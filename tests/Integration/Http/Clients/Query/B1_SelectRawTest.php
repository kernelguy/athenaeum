<?php

namespace Aedart\Tests\Integration\Http\Clients\Query;

use Aedart\Testing\Helpers\ConsoleDebugger;
use Aedart\Tests\TestCases\Http\HttpClientsTestCase;

/**
 * B1_SelectRawTest
 *
 * @group http-clients
 * @group http-query
 * @group http-query-b1
 * @group http-query-grammars
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Tests\Integration\Http\Clients\Query
 */
class B1_SelectRawTest extends HttpClientsTestCase
{
    /*****************************************************************
     * Data Providers
     ****************************************************************/

    /**
     * Provides select raw test data
     *
     * @return array
     */
    public function providesSelectRawData(): array
    {
        return [
            'default' => [
                'default',
                '?select=account(42)'
            ]
        ];
    }

    /**
     * Provides injects bindings test data
     *
     * @return array
     */
    public function providesInjectsBindingsData(): array
    {
        return [
            'default' => [
                'default',
                '?select=account(3214)'
            ]
        ];
    }

    /**
     * Provides injects bindings test data
     *
     * @return array
     */
    public function providesSelectRegularAndRawData(): array
    {
        return [
            'default' => [
                'default',
                '?select=person.name,account(7)'
            ]
        ];
    }

    /*****************************************************************
     * Actual Tests
     ****************************************************************/

    /**
     * @test
     * @dataProvider providesSelectRawData
     *
     * @param string $grammar
     * @param string $expected
     *
     * @throws \Aedart\Contracts\Http\Clients\Exceptions\ProfileNotFoundException
     */
    public function canSelectRawExpression(string $grammar, string $expected)
    {
        $result = $this
            ->query($grammar)
            ->selectRaw('account(42)')
            ->build();

        ConsoleDebugger::output($result);

        $this->assertSame($expected, $result);
    }

    /**
     * @test
     * @dataProvider providesInjectsBindingsData
     *
     * @param string $grammar
     * @param string $expected
     *
     * @throws \Aedart\Contracts\Http\Clients\Exceptions\ProfileNotFoundException
     */
    public function injectsBindings(string $grammar, string $expected)
    {
        $result = $this
            ->query($grammar)
            ->selectRaw('account(:number)', [ 'number' => 3214 ])
            ->build();

        ConsoleDebugger::output($result);

        $this->assertSame($expected, $result);
    }

    /**
     * @test
     * @dataProvider providesSelectRegularAndRawData
     *
     * @param string $grammar
     * @param string $expected
     *
     * @throws \Aedart\Contracts\Http\Clients\Exceptions\ProfileNotFoundException
     */
    public function canSelectRegularAndRaw(string $grammar, string $expected)
    {
        $result = $this
            ->query($grammar)
            ->select('name', 'person')
            ->selectRaw('account(:number)', [ 'number' => 7 ])
            ->build();

        ConsoleDebugger::output($result);

        $this->assertSame($expected, $result);
    }
}
