<?php

namespace Aedart\Tests\Integration\Support\Helpers;


use Aedart\Support\Helpers\Auth\AuthFactoryTrait;
use Aedart\Support\Helpers\Auth\AuthTrait;
use Aedart\Support\Helpers\Auth\PasswordBrokerFactoryTrait;
use Aedart\Support\Helpers\Auth\PasswordTrait;
use Aedart\Support\Helpers\Broadcasting\BroadcastFactoryTrait;
use Aedart\Tests\TestCases\Support\LaravelHelpersTestCase;
use \Mockery as m;

/**
 * LaravelSupportHelpersTest
 *
 * @group laravel
 * @group support
 * @group support-helpers
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Tests\Integration\Support\Helpers
 */
class LaravelSupportHelpersTest extends LaravelHelpersTestCase
{
    /*****************************************************************
     * Setup Methods
     ****************************************************************/

    protected function _after()
    {
        // Prevent laravel from stopping, as this just increases
        // the time it takes to execute
        // @see cleanup() inside this test
    }

    /*****************************************************************
     * Helpers and Utils
     ****************************************************************/

    /**
     * @return array
     */
    public function awareOfComponentsProvider()
    {
        return [
            // Auth
            // TODO: Still unable to mock Gate
            // TODO: @see https://github.com/mockery/mockery/issues/861
            //'GateTrait'                       => [ GateTrait::class ],
            'AuthFactoryTrait'                  => [ AuthFactoryTrait::class ],
            'AuthTrait'                         => [ AuthTrait::class ],
            'PasswordBrokerFactoryTrait'        => [ PasswordBrokerFactoryTrait::class ],
            'PasswordTrait'                     => [ PasswordTrait::class ],

            // Broadcasting
            'BroadcastFactoryTrait'             => [ BroadcastFactoryTrait::class ]
        ];
    }

    /*****************************************************************
     * Actual Tests
     ****************************************************************/

    /**
     * @test
     * @dataProvider awareOfComponentsProvider
     *
     * @param string $awareOfTrait
     *
     * @throws \ReflectionException
     */
    public function canInvokeAwareOfMethods(string $awareOfTrait)
    {
        $this->assertTraitMethods($awareOfTrait, null, null, false);
    }

    /**
     * @test
     *
     * depends canInvokeTraitMethods
     */
    public function cleanup()
    {
        $this->stopApplication();
        m::close();
    }
}