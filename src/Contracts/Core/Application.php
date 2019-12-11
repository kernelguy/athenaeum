<?php

namespace Aedart\Contracts\Core;

use Aedart\Contracts\Container\IoC;
use Aedart\Contracts\Service\ServiceProviderRegistrarAware;
use Illuminate\Contracts\Foundation\Application as LaravelApplication;

/**
 * Application
 *
 * Adapted version of Laravel's Application
 *
 * @see \Illuminate\Contracts\Foundation\Application
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Contracts\Core
 */
interface Application extends IoC,
    LaravelApplication,
    ServiceProviderRegistrarAware
{
    /**
     * Determine if this application has booted
     *
     * @return bool
     */
    public function isBooted() : bool ;
}
