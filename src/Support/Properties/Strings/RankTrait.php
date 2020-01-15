<?php

namespace Aedart\Support\Properties\Strings;

/**
 * Rank Trait
 *
 * @see \Aedart\Contracts\Support\Properties\Strings\RankAware
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Support\Properties\Strings
 */
trait RankTrait
{
    /**
     * The position in a hierarchy
     *
     * @var string|null
     */
    protected ?string $rank = null;

    /**
     * Set rank
     *
     * @param string|null $position The position in a hierarchy
     *
     * @return self
     */
    public function setRank(?string $position)
    {
        $this->rank = $position;

        return $this;
    }

    /**
     * Get rank
     *
     * If no "rank" value set, method
     * sets and returns a default "rank".
     *
     * @see getDefaultRank()
     *
     * @return string|null rank or null if no rank has been set
     */
    public function getRank() : ?string
    {
        if ( ! $this->hasRank()) {
            $this->setRank($this->getDefaultRank());
        }
        return $this->rank;
    }

    /**
     * Check if "rank" has been set
     *
     * @return bool True if "rank" has been set, false if not
     */
    public function hasRank() : bool
    {
        return isset($this->rank);
    }

    /**
     * Get a default "rank" value, if any is available
     *
     * @return string|null Default "rank" value or null if no default value is available
     */
    public function getDefaultRank() : ?string
    {
        return null;
    }
}
