<?php

namespace Aedart\Tests\Integration\Http\Clients;

use Aedart\Contracts\Http\Clients\Exceptions\ProfileNotFoundException;
use Aedart\Contracts\Http\Clients\Requests\Builder;
use Aedart\Contracts\Http\Clients\Requests\Builders\Guzzle\CookieJarAware;
use Aedart\Contracts\Http\Cookies\Cookie;
use Aedart\Contracts\Http\Cookies\SetCookie;
use Aedart\Testing\Helpers\ConsoleDebugger;
use Aedart\Tests\TestCases\Http\HttpClientsTestCase;
use DateTime;
use GuzzleHttp\Psr7\Response;
use Illuminate\Support\Carbon;

/**
 * H0_CookiesTest
 *
 * @group http-clients
 * @group http-clients-h0
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Tests\Integration\Http\Clients
 */
class H0_CookiesTest extends HttpClientsTestCase
{
    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function extractsCookiesFromOptions(string $profile)
    {
        $cookieJar = $this->makeCookieJar([
            'first_cookie' => 'foo',
            'second_cookie' => 'bar'
        ]);

        $client = $this->client($profile, [ 'cookies' => $cookieJar ]);

        $this->assertTrue($client->hasCookie('first_cookie'), 'First cookie not extracted from options');
        $this->assertSame('foo', $client->getCookie('first_cookie')->getValue(), 'Incorrect cookie value');

        $this->assertTrue($client->hasCookie('second_cookie'), 'Second cookie not extracted from options');
        $this->assertSame('bar', $client->getCookie('second_cookie')->getValue(), 'Incorrect cookie value');
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canAddCookieUsingInstance(string $profile)
    {
        $cookie = $this->makeCookie()
            ->name('foo')
            ->value('bar');

        $builder = $this->client($profile)
            ->withOption('handler', $this->makeRespondsOkMock())
            ->withCookie($cookie);

        $builder->post('/records');

        // --------------------------------------------------------------- //

        $this->assertTrue($builder->hasCookie('foo'), 'Cookie not in builder');

        // --------------------------------------------------------------- //

        $request = $this->lastRequest;
        $cookieHeader = $request->getHeaderLine('Cookie');
        ConsoleDebugger::output($cookieHeader);

        $this->assertStringContainsString('foo=bar', $cookieHeader, 'Cookie header not set correctly');
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canAddCookieUsingArray(string $profile)
    {
        $cookie = [
            'name' => 'foo',
            'value' => 'bar'
        ];

        $builder = $this->client($profile)
            ->withOption('handler', $this->makeRespondsOkMock())
            ->withCookie($cookie);

        $builder->post('/records');

        // --------------------------------------------------------------- //

        $this->assertTrue($builder->hasCookie('foo'), 'Cookie not in builder');

        // --------------------------------------------------------------- //

        $request = $this->lastRequest;
        $cookieHeader = $request->getHeaderLine('Cookie');
        ConsoleDebugger::output($cookieHeader);

        $this->assertStringContainsString('foo=bar', $cookieHeader, 'Cookie header not set correctly');
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canAddCookieUsingCallback(string $profile)
    {
        $cookie = function (Cookie $cookie) {
            $cookie
                ->name('foo')
                ->value('bar');
        };

        $builder = $this->client($profile)
            ->withOption('handler', $this->makeRespondsOkMock())
            ->withCookie($cookie);

        $builder->post('/records');

        // --------------------------------------------------------------- //

        $this->assertTrue($builder->hasCookie('foo'), 'Cookie not in builder');

        // --------------------------------------------------------------- //

        $request = $this->lastRequest;
        $cookieHeader = $request->getHeaderLine('Cookie');
        ConsoleDebugger::output($cookieHeader);

        $this->assertStringContainsString('foo=bar', $cookieHeader, 'Cookie header not set correctly');
    }

    /**
     * @test
     * @dataProvider providesClientProfiles
     *
     * @param string $profile
     *
     * @throws ProfileNotFoundException
     */
    public function canAddCookieUsingOptions(string $profile)
    {
        $cookieJar = $this->makeCookieJar([
            'foo' => 'bar'
        ]);

        $builder = $this->client($profile)
            ->withOption('handler', $this->makeRespondsOkMock());

        $builder->request('get', '/records', [ 'cookies' => $cookieJar ]);

        // --------------------------------------------------------------- //

        $this->assertFalse($builder->hasCookie('foo'), 'Cookie should NOT be added to builder');

        // --------------------------------------------------------------- //

        $request = $this->lastRequest;
        $cookieHeader = $request->getHeaderLine('Cookie');
        ConsoleDebugger::output($cookieHeader);

        $this->assertStringContainsString('foo=bar', $cookieHeader, 'Cookie header not set correctly');
    }

    /**
     * @test
     *
     * @throws ProfileNotFoundException
     */
    public function preservesCookieJar()
    {
        // Create mocked response, with Set-Cookie header

        $name = 'foo';
        $value = 'bar';
        $domain = 'acme.org';
        $path = '/somwehere';
        $expiresAt = Carbon::now()->addRealDays(3);
        $expires = gmdate(DateTime::RFC7231, $expiresAt->getTimestamp());
        $maxAge = $this->getFaker()->randomNumber(3, true);
        $secure = true;
        $httpOnly = true;
        $sameSite = SetCookie::SAME_SITE_STRICT;
        $header = "$name=$value; Domain=$domain; Path=$path; Expires=$expires; Max-Age=$maxAge; Secure; HttpOnly; SameSite=$sameSite;";

        $mockedResponse = new Response(200, [
            'Set-Cookie' => $header
        ]);

        // --------------------------------------------------------------- //

        // Create Cookie Jar
        $cookieJar = $this->makeCookieJar([], $domain);

        // Apply mocked response and cookie jar
        /** @var Builder|CookieJarAware $builder */
        $builder = $this->client('default')
            ->withOption('handler', $this->makeResponseMock([ $mockedResponse ]))
            ->setCookieJar($cookieJar);

        // Perform a request
        $response = $builder->get("https://$domain/records");

        // --------------------------------------------------------------- //

        ConsoleDebugger::output($response);
        $this->assertSame($cookieJar, $builder->getCookieJar());

        // --------------------------------------------------------------- //

        $this->assertCount(1, $cookieJar);

        // Obtain single cookie form jar... seems a bit frustrating to do it
        // this way, but interface offers no other method.
        /** @var \GuzzleHttp\Cookie\SetCookie $cookie */
        $cookie = null;
        foreach ($cookieJar as $storedCookie) {
            $cookie = $storedCookie;
        }

        $this->assertNotNull($cookie, 'Unable to obtain cookie from CookieJar');

        // --------------------------------------------------------------- //

        $this->assertSame($name, $cookie->getName(), 'Incorrect name');
        $this->assertSame($value, $cookie->getValue(), 'Incorrect value');
        $this->assertSame($domain, $cookie->getDomain(), 'Incorrect domain');
        $this->assertSame($path, $cookie->getPath(), 'Incorrect path');

        $expiresAtFromCookie = Carbon::createFromTimestamp($cookie->getExpires());
        $this->assertTrue($expiresAt->equalTo($expiresAtFromCookie), 'Incorrect expires at');

        $this->assertSame($maxAge, (int) $cookie->getMaxAge(), 'Incorrect max-age');
        $this->assertSame($secure, $cookie->getSecure(), 'Incorrect secure');
        $this->assertSame($httpOnly, $cookie->getHttpOnly(), 'Incorrect http-only');

        $data = $cookie->toArray();
        $this->assertArrayHasKey('SameSite', $data, 'Same Site does not exist');
        $this->assertSame($data['SameSite'], $sameSite, 'Incorrect Same Site');
    }
}
