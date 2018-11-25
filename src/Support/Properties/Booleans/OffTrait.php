<?php

namespace Aedart\Support\Properties\Booleans;

/**
 * Off Trait
 *
 * @see \Aedart\Contracts\Support\Properties\Booleans\OffAware
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Support\Properties\Booleans
 */
trait OffTrait
{
    /**
     * 
     *
     * @var bool|null
     */
    protected $off = null;

    /**
     * Set off
     *
     * @param bool|null $isOff 
     *
     * @return self
     */
    public function setOff(?bool $isOff)
    {
        $this->off = $isOff;

        return $this;
    }

    /**
     * Get off
     *
     * If no "off" value set, method
     * sets and returns a default "off".
     *
     * @see getDefaultOff()
     *
     * @return bool|null off or null if no off has been set
     */
    public function getOff() : ?bool
    {
        if ( ! $this->hasOff()) {
            $this->setOff($this->getDefaultOff());
        }
        return $this->off;
    }

    /**
     * Check if "off" has been set
     *
     * @return bool True if "off" has been set, false if not
     */
    public function hasOff() : bool
    {
        return isset($this->off);
    }

    /**
     * Get a default "off" value, if any is available
     *
     * @return bool|null Default "off" value or null if no default value is available
     */
    public function getDefaultOff() : ?bool
    {
        return null;
    }
}