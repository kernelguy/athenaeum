<?php

namespace Aedart\Http\Clients\Drivers;

use Aedart\Contracts\Http\Clients\Client;
use GuzzleHttp\Client as GuzzleClient;
use Psr\Http\Message\ResponseInterface;

/**
 * Default Http Client
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Http\Clients\Drivers
 */
class DefaultHttpClient implements Client
{
    /**
     * Initial client options
     *
     * @var array
     */
    protected array $initialOptions = [];

    /**
     * Options for the next request
     *
     * @var array
     */
    protected array $optionsForNextRequest = [];

    /**
     * The Guzzle Http Client
     *
     * @var GuzzleClient|null
     */
    protected ?GuzzleClient $client = null;

    /**
     * DefaultHttpClient constructor.
     *
     * @param array $options [optional]
     */
    public function __construct(array $options = [])
    {
        $this->initialOptions = $options;
        $this->resetOptionsForNextRequest();

        $this->client = new GuzzleClient($this->initialOptions);
    }

    /**
     * {@inheritdoc}
     */
    public function get($uri): ResponseInterface
    {
        return $this->request('GET', $uri);
    }

    /**
     * {@inheritdoc}
     */
    public function head($uri): ResponseInterface
    {
        return $this->request('HEAD', $uri);
    }

    /**
     * {@inheritdoc}
     */
    public function post($uri, array $body = []): ResponseInterface
    {
        return $this->request('POST', $uri, [ 'form_params' => $body ]);
    }

    /**
     * {@inheritdoc}
     */
    public function put($uri, array $body = []): ResponseInterface
    {
        return $this->request('PUT', $uri, [ 'form_params' => $body ]);
    }

    /**
     * {@inheritdoc}
     */
    public function delete($uri, array $body = []): ResponseInterface
    {
        return $this->request('DELETE', $uri, [ 'form_params' => $body ]);
    }

    /**
     * {@inheritdoc}
     */
    public function options($uri): ResponseInterface
    {
        return $this->request('OPTIONS', $uri);
    }

    /**
     * {@inheritdoc}
     */
    public function patch($uri, array $body = []): ResponseInterface
    {
        return $this->request('PATCH', $uri, [ 'form_params' => $body ]);
    }

    /**
     * {@inheritdoc}
     */
    public function request(string $method, $uri, array $options = []): ResponseInterface
    {
        // Resolve options for request
        $options = $this->withOptions($options)
                        ->getOptions();

        // Perform request
        $response = $this->client->request($method, $uri, $options);

        // Reset options for next request
        $this->resetOptionsForNextRequest();

        // Finally, return response
        return $response;
    }

    /**
     * {@inheritdoc}
     */
    public function withHeaders(array $headers = []): Client
    {
        $this->optionsForNextRequest['headers'] = array_merge_recursive($this->optionsForNextRequest['headers'], $headers);

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function withHeader(string $name, $value): Client
    {
        return $this->withHeaders([ $name => $value ]);
    }

    /**
     * {@inheritdoc}
     */
    public function withoutHeader(string $name): Client
    {
        unset($this->optionsForNextRequest['headers'][$name]);

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getHeaders(): array
    {
        return $this->optionsForNextRequest['headers'];
    }

    /**
     * {@inheritdoc}
     */
    public function getHeader(string $name)
    {
        if(isset($this->optionsForNextRequest['headers'][$name])){
            return $this->optionsForNextRequest['headers'][$name];
        }

        return null;
    }

    /**
     * {@inheritdoc}
     */
    public function withOptions(array $options = []): Client
    {
        $this->optionsForNextRequest = array_merge_recursive($this->optionsForNextRequest, $options);

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function withOption(string $name, $value): Client
    {
        return $this->withOptions([ $name => $value ]);
    }

    /**
     * {@inheritdoc}
     */
    public function withoutOption(string $name): Client
    {
        unset($this->optionsForNextRequest[$name]);

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getOptions(): array
    {
        return $this->optionsForNextRequest;
    }

    /**
     * {@inheritdoc}
     */
    public function getOption(string $name)
    {
        if(isset($this->optionsForNextRequest[$name])){
            return $this->optionsForNextRequest[$name];
        }

        return null;
    }

    /**
     * @inheritDoc
     *
     * @return GuzzleClient
     */
    public function driver()
    {
        return $this->client;
    }

    /*****************************************************************
     * Internals
     ****************************************************************/

    /**
     * Resets the options back to the initial options
     */
    protected function resetOptionsForNextRequest()
    {
        $this->optionsForNextRequest = $this->initialOptions;
    }
}