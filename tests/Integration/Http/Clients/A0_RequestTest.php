<?php

namespace Aedart\Tests\Integration\Http\Clients;

use Aedart\Contracts\Http\Clients\Exceptions\ProfileNotFoundException;
use Aedart\Testing\Helpers\ConsoleDebugger;
use Aedart\Tests\TestCases\Http\HttpClientsTestCase;
use Psr\Http\Message\ResponseInterface;

/**
 * A0_RequestTest
 *
 * @group http
 * @group http-clients
 * @group http-clients-a0
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Tests\Integration\Http\Clients
 */
class A0_RequestTest extends HttpClientsTestCase
{
    /*****************************************************************
     * Helpers
     ****************************************************************/

    /**
     * Assert given client is able to perform a request
     * using given Http method
     *
     * @param string $method
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    protected function assertCanPerformRequest(string $method, string $profile)
    {
        $client = $this->getHttpClientsManager()->profile($profile);
        ConsoleDebugger::output(get_class($client), $method);

        // Resolve method and uri
        $method = strtolower($method);
        $uri = '/' . $this->getFaker()->word;

        // Perform request
        /** @var ResponseInterface $response */
        $response = $client
            ->withOption('handler', $this->makeRespondsOkMock())
            ->{$method}($uri);

        // ------------------------------------------------- //

        $methodsSent = $this->lastRequest->getMethod();
        $this->assertSame($method, strtolower($methodsSent), 'Request did not send correct Http method');
        $this->assertSame(200, $response->getStatusCode());
    }

    /*****************************************************************
     * Actual Tests
     ****************************************************************/

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canPerformGetRequest(string $profile)
    {
        $this->assertCanPerformRequest('GET', $profile);
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canPerformHeadRequest(string $profile)
    {
        $this->assertCanPerformRequest('HEAD', $profile);
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canPerformPostRequest(string $profile)
    {
        $this->assertCanPerformRequest('POST', $profile);
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canPerformPutRequest(string $profile)
    {
        $this->assertCanPerformRequest('PUT', $profile);
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canPerformDeleteRequest(string $profile)
    {
        $this->assertCanPerformRequest('DELETE', $profile);
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canPerformOptionsRequest(string $profile)
    {
        $this->assertCanPerformRequest('OPTIONS', $profile);
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canPerformPatchRequest(string $profile)
    {
        $this->assertCanPerformRequest('PATCH', $profile);
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canPerformRealRequest(string $profile)
    {
        // "live" integration test to see if guzzle works
        // as intended.
        $client = $this->getHttpClientsManager()->profile($profile);

        $response = $client->get('https://jsonplaceholder.typicode.com/posts/42');

        $content = $response->getBody()->getContents();
        ConsoleDebugger::output($content);

        $this->assertSame(200, $response->getStatusCode());
        $this->assertNotEmpty($content);
    }
}
