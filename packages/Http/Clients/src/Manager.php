<?php

namespace Aedart\Http\Clients;

use Aedart\Contracts\Http\Clients\Client;
use Aedart\Contracts\Http\Clients\Manager as HttpClientsManager;
use Aedart\Contracts\Support\Helpers\Config\ConfigAware;
use Aedart\Contracts\Support\Helpers\Container\ContainerAware;
use Aedart\Http\Clients\Requests\Helpers\ManagerHelper;
use Aedart\Support\Helpers\Container\ContainerTrait;
use Illuminate\Contracts\Container\Container;

/**
 * Http Clients Manager
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Http\Clients
 */
class Manager implements
    HttpClientsManager,
    ContainerAware,
    ConfigAware
{
    use ContainerTrait;
    use ManagerHelper;

    /**
     * List of created Http Clients
     *
     * @var Client[]
     */
    protected array $clients = [];

    /**
     * Manager constructor.
     *
     * @param Container|null $container [optional]
     */
    public function __construct(?Container $container = null)
    {
        $this->defaultProfileKey = 'http-clients.default';
        $this->profilesKey = 'http-clients.profiles';

        $this->setContainer($container);
    }

    /**
     * {@inheritdoc}
     */
    public function profile(?string $profile = null, array $options = []): Client
    {
        // Resolve requested profile name
        $profile = $this->resolveProfile($profile);

        // Return client if already created
        if (isset($this->clients[$profile])) {
            return $this->clients[$profile];
        }

        // Obtain profile configuration
        $configuration = $this->findOrFailConfiguration($profile, 'Http Client profile "%s" does not exist');
        $driver = $configuration['driver'];
        $options = array_merge_recursive($configuration['options'], $options);

        // Finally, create the Http Client
        return $this->clients[$profile] = new $driver(
            $this->getContainer(),
            $options
        );
    }
}
