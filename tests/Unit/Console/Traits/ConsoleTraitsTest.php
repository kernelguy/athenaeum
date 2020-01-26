<?php

namespace Aedart\Tests\Unit\Console\Traits;

use Aedart\Console\Traits\CoreApplicationTrait;
use Aedart\Tests\TestCases\TraitTestCase;

/**
 * ConsoleTraitsTest
 *
 * @group console
 * @group console-traits
 * @group traits
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Tests\Unit\Console\Traits
 */
class ConsoleTraitsTest extends TraitTestCase
{
    /*****************************************************************
     * Providers
     ****************************************************************/

    /**
     * @return array
     */
    public function awareOfComponentsProvider()
    {
        return [
            'CoreApplicationTrait'           => [ CoreApplicationTrait::class ],
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
        $this->assertTraitMethods($awareOfTrait, null, null);
    }
}