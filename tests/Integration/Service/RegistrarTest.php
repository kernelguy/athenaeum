<?php

namespace Aedart\Tests\Integration\Service;

use Aedart\Contracts\Service\Registrar as RegistrarInterface;
use Aedart\Testing\Helpers\MessageBag;
use Aedart\Testing\TestCases\ApplicationTestCase;
use Aedart\Tests\Helpers\Dummies\Service\Providers\Partials\ProviderState;
use Aedart\Tests\Helpers\Dummies\Service\Providers\ServiceProviderA;
use Aedart\Tests\Helpers\Dummies\Service\Providers\ServiceProviderB;
use Aedart\Tests\Helpers\Dummies\Service\Providers\ServiceProviderC;
use Aedart\Tests\Helpers\Dummies\Service\Providers\ServiceProviderD;
use Illuminate\Support\ServiceProvider;

/**
 * RegistrarTest
 *
 * @group service
 * @group service-registrar
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Tests\Integration\Service
 */
class RegistrarTest extends ApplicationTestCase
{
    /**
     * @inheritdoc
     */
    protected function _after()
    {
        // Clear cached messages
        MessageBag::clearAll();

        parent::_after();
    }

    /*****************************************************************
     * Helpers
     ****************************************************************/

    /**
     * Creates a new service provider registrar instance
     *
     * @return RegistrarInterface
     */
    protected function makeRegistrar() : RegistrarInterface
    {
        return $this->app->getServiceProviderRegistrar();
    }

    /**
     * Returns a list of service providers
     *
     * @return string[]|ServiceProvider[]
     */
    protected function simpleProvidersList() : array
    {
        return [
            ServiceProviderA::class,
            ServiceProviderB::class,
            new ServiceProviderD($this->ioc)
        ];
    }

    /**
     * Returns a list of service providers
     *
     * @return string[]|ServiceProvider[]
     */
    protected function providersListWithAggregate() : array
    {
        return [
            ServiceProviderA::class,
            ServiceProviderB::class,
            ServiceProviderC::class,
            new ServiceProviderD($this->ioc)
        ];
    }

    /*****************************************************************
     * Actual Tests
     ****************************************************************/

    /**
     * @test
     */
    public function canCreateInstance()
    {
        $registrar = $this->makeRegistrar();
        $this->assertNotNull($registrar);
    }

    /**
     * @test
     */
    public function canRegisterMultipleServiceProviders()
    {
        $registrar = $this->makeRegistrar();
        $providers = $this->simpleProvidersList();
        $registrar->registerMultiple($providers, false);

        $registeredProviders = $registrar->providers();
        $bootedProviders = $registrar->booted();

        // ----------------------------------------------------- //

        $this->assertGreaterThanOrEqual(count($providers), $registeredProviders, 'Incorrect amount of providers registered');
        $this->assertCount(0, $bootedProviders, 'Should NOT have booted any providers');

        // Determine if requested providers have been registered
        foreach ($providers as $provider){
            $this->assertTrue( $registrar->isRegistered($provider) , 'A provider was not registered!');
        }
    }

    /**
     * @test
     */
    public function canRegisterAndBootMultipleServiceProviders()
    {
        $registrar = $this->makeRegistrar();
        $providers = $this->simpleProvidersList();
        $registrar->registerMultiple($providers);

        $registeredProviders = $registrar->providers();
        $bootedProviders = $registrar->booted();

        // ----------------------------------------------------- //

        $this->assertGreaterThanOrEqual(count($providers), $registeredProviders, 'Incorrect amount of providers registered');
        $this->assertGreaterThanOrEqual(count($providers), $bootedProviders, 'Incorrect amount of providers registered');

        foreach ($registeredProviders as $provider){
            // Skip providers that do not inherit from "provider state".
            // The application might have one or more core providers registered
            // that do not inherit such.
            if( ! ($provider instanceof ProviderState)){
                continue;
            }

            $this->assertTrue($provider->hasRegistered, sprintf('%s has not been marked as registered', get_class($provider)));
            $this->assertTrue($provider->hasBooted, sprintf('%s has not been marked as booted', get_class($provider)));
        }
    }

    /**
     * @test
     */
    public function canRegisterAndBootUnsafe()
    {
        $registrar = $this->makeRegistrar();
        $providers = $this->simpleProvidersList();
        $registrar->registerMultiple($providers, true, false);

        // ----------------------------------------------------- //
        $messages = MessageBag::all();

        // Verify that register & boot order is correct
        $this->assertStringContainsString('A has registered', $messages[0]);
        $this->assertStringContainsString('A has booted', $messages[1]);
        $this->assertStringContainsString('B has registered', $messages[2]);
        $this->assertStringContainsString('B has booted', $messages[3]);
        $this->assertStringContainsString('D has registered', $messages[4]);
        $this->assertStringContainsString('D has booted', $messages[5]);
    }

    /**
     * @test
     */
    public function doesNotRegisterSameProviderTwice()
    {
        $registrar = $this->makeRegistrar();

        $first = $registrar->register(ServiceProviderA::class);
        $second = $registrar->register(ServiceProviderA::class);

        // ----------------------------------------------------- //

        $this->assertTrue($first, 'First service provider not registered');
        $this->assertFalse($second, 'Same service provider registered, but should not be');
    }

    /**
     * @test
     */
    public function doesNotBootSameProviderTwice()
    {
        $registrar = $this->makeRegistrar();
        $providers = [
            ServiceProviderA::class,
        ];
        $registrar->registerMultiple($providers);

        $registeredProviders = $registrar->providers();
        $serviceProviderA = array_shift($registeredProviders);

        $result = $registrar->boot($serviceProviderA);

        // ----------------------------------------------------- //

        $this->assertFalse($result, 'Should NOT have booted already booted service provider');
    }

    /**
     * @test
     */
    public function canRegisterAndBootAggregateServiceProviders()
    {
        $registrar = $this->makeRegistrar();
        $providers = $this->providersListWithAggregate();
        $registrar->registerMultiple($providers);

        // ----------------------------------------------------- //
        $messages = MessageBag::all();

        // Verify that register & boot order is correct
        $this->assertStringContainsString('A has registered', $messages[0]);
        $this->assertStringContainsString('B has registered', $messages[1]);
        $this->assertStringContainsString('C1 has registered', $messages[2]);
        $this->assertStringContainsString('C2 has registered', $messages[3]);
        $this->assertStringContainsString('C3 has registered', $messages[4]);
        $this->assertStringContainsString('C has registered', $messages[5]);
        $this->assertStringContainsString('D has registered', $messages[6]);

        $this->assertStringContainsString('A has booted', $messages[7]);
        $this->assertStringContainsString('B has booted', $messages[8]);
        $this->assertStringContainsString('C1 has booted', $messages[9]);
        $this->assertStringContainsString('C2 has booted', $messages[10]);
        $this->assertStringContainsString('C3 has booted', $messages[11]);
        $this->assertStringContainsString('C has booted', $messages[12]);
        $this->assertStringContainsString('D has booted', $messages[13]);
    }
}
