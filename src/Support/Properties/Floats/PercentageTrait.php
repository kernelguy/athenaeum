<?php

namespace Aedart\Support\Properties\Floats;

/**
 * Percentage Trait
 *
 * @see \Aedart\Contracts\Support\Properties\Floats\PercentageAware
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Support\Properties\Floats
 */
trait PercentageTrait
{
    /**
     * A proportion (especially per hundred)
     *
     * @var float|null
     */
    protected $percentage = null;

    /**
     * Set percentage
     *
     * @param float|null $percentage A proportion (especially per hundred)
     *
     * @return self
     */
    public function setPercentage(?float $percentage)
    {
        $this->percentage = $percentage;

        return $this;
    }

    /**
     * Get percentage
     *
     * If no "percentage" value set, method
     * sets and returns a default "percentage".
     *
     * @see getDefaultPercentage()
     *
     * @return float|null percentage or null if no percentage has been set
     */
    public function getPercentage() : ?float
    {
        if ( ! $this->hasPercentage()) {
            $this->setPercentage($this->getDefaultPercentage());
        }
        return $this->percentage;
    }

    /**
     * Check if "percentage" has been set
     *
     * @return bool True if "percentage" has been set, false if not
     */
    public function hasPercentage() : bool
    {
        return isset($this->percentage);
    }

    /**
     * Get a default "percentage" value, if any is available
     *
     * @return float|null Default "percentage" value or null if no default value is available
     */
    public function getDefaultPercentage() : ?float
    {
        return null;
    }
}
