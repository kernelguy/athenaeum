<?php

namespace Aedart\Tests\Unit\Utils\Dates;

use Aedart\Testing\TestCases\UnitTestCase;
use Aedart\Utils\Dates\Duration;

/**
 * DurationTest
 *
 * @group utils
 * @group date
 * @group duration
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Tests\Unit\Utils\Dates
 */
class DurationTest extends UnitTestCase
{
    /**
     * @test
     */
    public function canInstatiate()
    {
        $duration = new Duration(42);

        $this->assertEqual($duration->format("S"), "42");
    }

}
