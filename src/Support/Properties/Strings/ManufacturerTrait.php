<?php

namespace Aedart\Support\Properties\Strings;

/**
 * Manufacturer Trait
 *
 * @see \Aedart\Contracts\Support\Properties\Strings\ManufacturerAware
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Support\Properties\Strings
 */
trait ManufacturerTrait
{
    /**
     * Name or identifier of a manufacturer
     *
     * @var string|null
     */
    protected $manufacturer = null;

    /**
     * Set manufacturer
     *
     * @param string|null $identifier Name or identifier of a manufacturer
     *
     * @return self
     */
    public function setManufacturer(?string $identifier)
    {
        $this->manufacturer = $identifier;

        return $this;
    }

    /**
     * Get manufacturer
     *
     * If no "manufacturer" value set, method
     * sets and returns a default "manufacturer".
     *
     * @see getDefaultManufacturer()
     *
     * @return string|null manufacturer or null if no manufacturer has been set
     */
    public function getManufacturer() : ?string
    {
        if ( ! $this->hasManufacturer()) {
            $this->setManufacturer($this->getDefaultManufacturer());
        }
        return $this->manufacturer;
    }

    /**
     * Check if "manufacturer" has been set
     *
     * @return bool True if "manufacturer" has been set, false if not
     */
    public function hasManufacturer() : bool
    {
        return isset($this->manufacturer);
    }

    /**
     * Get a default "manufacturer" value, if any is available
     *
     * @return string|null Default "manufacturer" value or null if no default value is available
     */
    public function getDefaultManufacturer() : ?string
    {
        return null;
    }
}