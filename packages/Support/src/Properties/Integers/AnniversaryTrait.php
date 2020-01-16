<?php

namespace Aedart\Support\Properties\Integers;

/**
 * Anniversary Trait
 *
 * @see \Aedart\Contracts\Support\Properties\Integers\AnniversaryAware
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Support\Properties\Integers
 */
trait AnniversaryTrait
{
    /**
     * Date of anniversary
     *
     * @var int|null
     */
    protected ?int $anniversary = null;

    /**
     * Set anniversary
     *
     * @param int|null $anniversary Date of anniversary
     *
     * @return self
     */
    public function setAnniversary(?int $anniversary)
    {
        $this->anniversary = $anniversary;

        return $this;
    }

    /**
     * Get anniversary
     *
     * If no "anniversary" value set, method
     * sets and returns a default "anniversary".
     *
     * @see getDefaultAnniversary()
     *
     * @return int|null anniversary or null if no anniversary has been set
     */
    public function getAnniversary() : ?int
    {
        if ( ! $this->hasAnniversary()) {
            $this->setAnniversary($this->getDefaultAnniversary());
        }
        return $this->anniversary;
    }

    /**
     * Check if "anniversary" has been set
     *
     * @return bool True if "anniversary" has been set, false if not
     */
    public function hasAnniversary() : bool
    {
        return isset($this->anniversary);
    }

    /**
     * Get a default "anniversary" value, if any is available
     *
     * @return int|null Default "anniversary" value or null if no default value is available
     */
    public function getDefaultAnniversary() : ?int
    {
        return null;
    }
}