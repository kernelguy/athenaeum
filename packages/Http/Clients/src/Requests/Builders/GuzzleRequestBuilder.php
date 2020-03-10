<?php

namespace Aedart\Http\Clients\Requests\Builders;

use Aedart\Contracts\Http\Clients\Client;
use Aedart\Contracts\Http\Clients\Requests\Builder;
use Aedart\Http\Clients\Requests\Builders\Guzzle\Handlers\CaptureHandler;
use Aedart\Http\Clients\Requests\Builders\Guzzle\Pipes\AppliesHeaders;
use Aedart\Http\Clients\Requests\Builders\Guzzle\Pipes\AppliesHttpProtocolVersion;
use Aedart\Http\Clients\Requests\Builders\Guzzle\Pipes\ResolvesRequestPayload;
use Aedart\Http\Clients\Requests\Builders\Pipes\MergeWithBuilderOptions;
use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\RequestOptions;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

/**
 * Guzzle Http Request Builder
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Http\Clients\Requests\Builders
 */
class GuzzleRequestBuilder extends BaseBuilder
{
    /**
     * The data format to use
     *
     * @var string
     */
    protected string $dataFormat = RequestOptions::FORM_PARAMS;

    /**
     * Temporary request options
     *
     * @var array
     */
    protected array $nextRequestOptions = [];

    /**
     * GuzzleRequestBuilder constructor.
     *
     * @param Client $client
     * @param array $options [optional] Guzzle Request Options
     */
    public function __construct(Client $client, array $options = [])
    {
        parent::__construct($client, $options);

        $this
            ->extractHeadersFromOptions()
            ->extractDataFormatFromOptions()
            ->setPrepareOptionsPipes([
                MergeWithBuilderOptions::class,
                AppliesHttpProtocolVersion::class,
                ResolvesRequestPayload::class,
                AppliesHeaders::class
            ]);
    }

    /**
     * {@inheritdoc}
     */
    public function request(string $method = null, $uri = null, array $options = []): ResponseInterface
    {
        $method = $method ?? $this->getMethod();
        $uri = $uri ?? $this->getUri();

        // Set the next response's options
        $this->nextRequestOptions = $options;

        $response = $this->send(
            $this->createRequest($method, $uri), // NOTE: Alters the next request options!
            $this->nextRequestOptions
        );

        // Reset the next request options, to avoid memory leaks or
        // other unwanted behaviour
        $this->nextRequestOptions = [];

        // Finally, return the response
        return $response;
    }

    /**
     * @inheritDoc
     */
    public function createRequest(string $method, $uri): RequestInterface
    {
        $options = $this->prepareDriverOptions($this->nextRequestOptions);

        // Obtain original handler
        $originalHandler = $options['handler'] ?? null;

        // Create a "capture" handler
        $handler = new CaptureHandler();
        $options['handler'] = $handler;

        // Perform a request, which is NOT sent, but rather captured,
        // once it has been built.
        $this->driver()->request($method, $uri, $options);

        // Overwrite the next request options, with the processed options
        // from Guzzle. This should limit processing time if the builder's
        // "request()" is sending the captured request.
        $this->nextRequestOptions = $handler->options();

        // Restore original handler option
        unset($this->nextRequestOptions['handler']);
        if(isset($originalHandler)){
            $this->nextRequestOptions['handler'] = $originalHandler;
        }

        // Finally, return the built request
        return $handler->request();
    }

    /**
     * @inheritdoc
     */
    public function send(RequestInterface $request, array $options = []): ResponseInterface
    {
        return $this->driver()->send(
            $request,
            $options
        );
    }

    /**
     * @inheritDoc
     */
    public function formFormat(): Builder
    {
        return $this
            ->useDataFormat('form_params')
            ->withContentType('application/x-www-form-urlencoded');
    }

    /**
     * @inheritDoc
     */
    public function jsonFormat(): Builder
    {
        return $this
            ->useDataFormat('json')
            ->withAccept($this->jsonAccept)
            ->withContentType($this->jsonContentType);
    }

    /**
     * @inheritDoc
     */
    public function multipartFormat(): Builder
    {
        return $this
            ->useDataFormat('multipart')
            ->withContentType('multipart/form-data');
    }

    /**
     * @inheritDoc
     */
    public function useBasicAuth(string $username, string $password): Builder
    {
        return $this->withOption('auth', [ $username, $password ]);
    }

    /**
     * @inheritDoc
     */
    public function useDigestAuth(string $username, string $password): Builder
    {
        return $this->withOption('auth', [ $username, $password, 'digest' ]);
    }

    /**
     * @inheritDoc
     */
    public function maxRedirects(int $amount): Builder
    {
        if ($amount === 0) {
            return $this->disableRedirects();
        }

        return $this->withOption('allow_redirects', [
            'max' => $amount,
            'strict' => true,
            'referer' => true,
            'protocols' => ['http', 'https'],
            'track_redirects' => false
        ]);
    }

    /**
     * @inheritDoc
     */
    public function disableRedirects(): Builder
    {
        return $this->withOption('allow_redirects', false);
    }

    /**
     * @inheritDoc
     */
    public function withTimeout(float $seconds): Builder
    {
        return $this->withOption('timeout', $seconds);
    }

    /**
     * @inheritDoc
     */
    public function getTimeout(): float
    {
        return (float) $this->getOption('timeout');
    }

    /**
     * @inheritDoc
     *
     * @return GuzzleClient
     */
    public function driver()
    {
        return parent::driver();
    }

    /*****************************************************************
     * Internals
     ****************************************************************/

    /**
     * Extracts the Http headers from the options into this
     * builder.
     *
     * @return self
     */
    protected function extractHeadersFromOptions()
    {
        $headers = $this->options['headers'] ?? [];

        if (!empty($headers)) {
            $this->withHeaders($headers);
        }

        unset($this->options['headers']);

        return $this;
    }

    /**
     * Extracts the data format from the options and sets
     * the appropriate headers
     *
     * @return self
     */
    protected function extractDataFormatFromOptions()
    {
        $format = $this->options['data_format'] ?? $this->getDataFormat();
        unset($this->options['data_format']);

        switch ($format) {
            case RequestOptions::FORM_PARAMS:
            case RequestOptions::BODY:
                $this->formFormat();
                break;

            case RequestOptions::JSON:
                $this->jsonFormat();
                break;

            case RequestOptions::MULTIPART:
                $this->multipartFormat();
                break;

            default:
                $this->useDataFormat($format);
                break;
        }

        return $this;
    }
}