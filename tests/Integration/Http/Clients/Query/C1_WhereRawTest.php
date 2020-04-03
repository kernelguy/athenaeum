<?php

namespace Aedart\Tests\Integration\Http\Clients\Query;

use Aedart\Contracts\Http\Clients\Exceptions\HttpQueryBuilderException;
use Aedart\Contracts\Http\Clients\Exceptions\ProfileNotFoundException;
use Aedart\Testing\Helpers\ConsoleDebugger;
use Aedart\Tests\TestCases\Http\HttpClientsTestCase;

/**
 * C1_WhereRawTest
 *
 * @group http-clients
 * @group http-query
 * @group http-query-c1
 * @group http-query-grammars
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Tests\Integration\Http\Clients\Query
 */
class C1_WhereRawTest extends HttpClientsTestCase
{
    /*****************************************************************
     * Data Providers
     ****************************************************************/

    /**
     * Provides where raw test data
     *
     * @return array
     */
    public function providesWhereRawData(): array
    {
        $expected = '?user=john';

        return [
            'default' => [
                'default',
                $expected
            ],
            'json api' => [
                'json_api',
                $expected
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
        $expected = '?filter=user eq 10';

        return [
            'default' => [
                'default',
                $expected
            ],
            'json api' => [
                'json_api',
                $expected
            ]
        ];
    }

    /**
     * Provides combines where with raw where test data
     *
     * @return array
     */
    public function providesCombineWhereWithRawWhere(): array
    {
        return [
            'default' => [
                'default',
                '?name[like]=john&filter=age gt 25'
            ],
            'json api' => [
                'json_api',
                '?filter[name][like]=john&filter=age gt 25'
            ]
        ];
    }

    /*****************************************************************
     * Actual Tests
     ****************************************************************/

    /**
     * @test
     * @dataProvider providesWhereRawData
     *
     * @param string $grammar
     * @param string $expected
     *
     * @throws ProfileNotFoundException
     * @throws HttpQueryBuilderException
     */
    public function canAddWhereRawExpression(string $grammar, string $expected)
    {
        $result = $this
            ->query($grammar)
            ->whereRaw('user=john')
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
     * @throws ProfileNotFoundException
     * @throws HttpQueryBuilderException
     */
    public function injectsBindings(string $grammar, string $expected)
    {
        $result = $this
            ->query($grammar)
            ->whereRaw('filter=user eq :amount', [ 'amount' => 10 ])
            ->build();

        ConsoleDebugger::output($result);

        $this->assertSame($expected, $result);
    }

    /**
     * @test
     * @dataProvider providesCombineWhereWithRawWhere
     *
     * @param string $grammar
     * @param string $expected
     *
     * @throws ProfileNotFoundException
     * @throws HttpQueryBuilderException
     */
    public function canCombineWhereWithRawWhere(string $grammar, string $expected)
    {
        $result = $this
            ->query($grammar)
            ->where('name', 'like', 'john')
            ->whereRaw('filter=age gt :amount', [ 'amount' => 25 ])
            ->build();

        ConsoleDebugger::output($result);

        $this->assertSame($expected, $result);
    }
}
