<?php


namespace Aedart\Tests\Integration\Container;

use Aedart\Support\Facades\IoCFacade;
use Aedart\Testing\TestCases\IntegrationTestCase;
use Aedart\Tests\Helpers\Dummies\Box;

/**
 * IoCFacadeTest
 *
 * @group ioc
 * @group container
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Tests\Integration\Container
 */
class IoCFacadeTest extends IntegrationTestCase
{
    /**
     * @test
     */
    public function canResolveBinding()
    {
        $abstract = 'my_binding';
        $this->ioc->bind($abstract, fn () => new Box());

        // -------------------------------------------- //

        $resolved = IoCFacade::tryMake($abstract);

        $this->assertInstanceOf(Box::class, $resolved, 'unable to resolve binding');
    }

    /**
     * @test
     */
    public function returnsDefaultWhenBindingDoesNotExist()
    {
        $abstract = 'my_binding';
        $default = 'nothing there...';

        $resolved = IoCFacade::tryMake($abstract, $default);

        $this->assertSame($default, $resolved, 'incorrect default resolved');
    }

    /**
     * @test
     */
    public function resolvesCallbackValueAsDefault()
    {
        $abstract = 'my_binding';
        $default = function () {
            return 'my_default';
        };

        $resolved = IoCFacade::tryMake($abstract, $default);

        $this->assertSame('my_default', $resolved, 'incorrect default resolved');
    }
}
