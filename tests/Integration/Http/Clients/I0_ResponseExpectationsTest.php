<?php

namespace Aedart\Tests\Integration\Http\Clients;

use Aedart\Contracts\Http\Clients\Exceptions\ExpectationNotMetException;
use Aedart\Contracts\Http\Clients\Exceptions\ProfileNotFoundException;
use Aedart\Contracts\Http\Clients\Responses\Status;
use Aedart\Tests\TestCases\Http\HttpClientsTestCase;
use GuzzleHttp\Psr7\Response;

/**
 * I0_ResponseExpectationsTest
 *
 * @group http-clients
 * @group http-clients-i0
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Tests\Integration\Http\Clients
 */
class I0_ResponseExpectationsTest extends HttpClientsTestCase
{
    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canAddAndObtainExpectations(string $profile)
    {
        $expectations = [
            function (Status $status) {
                return true;
            },
            function (Status $status) {
                return true;
            },
            function (Status $status) {
                return true;
            },
        ];

        $builder = $this->client($profile)
            ->withExpectations($expectations);

        $this->assertTrue($builder->hasExpectations(), 'No expectations registered');
        $this->assertSame($expectations, $builder->getExpectations(), 'Incorrect expectations returned');
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function appliesExpectations(string $profile)
    {
        $hasAppliedA = false;
        $hasAppliedB = false;
        $hasAppliedC = false;

        $expectations = [
            function (Status $status) use (&$hasAppliedA) {
                $hasAppliedA = true;
            },
            function (Status $status) use (&$hasAppliedB) {
                $hasAppliedB = true;
            },
            function (Status $status) use (&$hasAppliedC) {
                $hasAppliedC = true;
            },
        ];

        $this->client($profile)
            ->withOption('handler', $this->makeRespondsOkMock())
            ->withExpectations($expectations)
            ->get('/users');

        $this->assertTrue($hasAppliedA, 'expectation A not applied');
        $this->assertTrue($hasAppliedB, 'expectation B not applied');
        $this->assertTrue($hasAppliedC, 'expectation C not applied');
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canExpectViaCallback(string $profile)
    {
        $hasApplied = false;

        $expectation = function() use(&$hasApplied) {
            $hasApplied = true;
        };

        $this->client($profile)
            ->withOption('handler', $this->makeRespondsOkMock())
            ->expect($expectation)
            ->get('/users');

        $this->assertTrue($hasApplied, 'has not applied callback expectation via "expect" method');
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function failsWithExceptionWhenExpectationNotMet(string $profile)
    {
        $this->expectException(ExpectationNotMetException::class);

        $mock = $this->makeResponseMock([
            new Response(301)
        ]);

        $this->client($profile)
            ->withOption('handler', $mock)
            ->expect(200)
            ->get('/users');
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function appliesOtherwiseCallbackWhenExpectationNotMet(string $profile)
    {
        $mock = $this->makeResponseMock([
            new Response(301)
        ]);

        $hasApplied = false;

        $otherwise = function() use(&$hasApplied) {
            $hasApplied = true;
        };

        $this->client($profile)
            ->withOption('handler', $mock)
            ->expect(200, $otherwise)
            ->get('/users');

        $this->assertTrue($hasApplied, 'Otherwise callback not invoked');
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function doesNothingWhenExpectationIsMet(string $profile)
    {
        $this->client($profile)
            ->withOption('handler', $this->makeRespondsOkMock())
            ->expect([201, 204, 200])
            ->get('/users');
    }
}
