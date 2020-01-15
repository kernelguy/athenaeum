<?php

namespace Aedart\Support\Properties\Strings;

/**
 * Value Trait
 *
 * @see \Aedart\Contracts\Support\Properties\Strings\ValueAware
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Support\Properties\Strings
 */
trait ValueTrait
{
    /**
     * Value
     *
     * @var string|null
     */
    protected ?string $value = null;

    /**
     * Set value
     *
     * @param string|null $value Value
     *
     * @return self
     */
    public function setValue(?string $value)
    {
        $this->value = $value;

        return $this;
    }

    /**
     * Get value
     *
     * If no "value" value set, method
     * sets and returns a default "value".
     *
     * @see getDefaultValue()
     *
     * @return string|null value or null if no value has been set
     */
    public function getValue() : ?string
    {
        if ( ! $this->hasValue()) {
            $this->setValue($this->getDefaultValue());
        }
        return $this->value;
    }

    /**
     * Check if "value" has been set
     *
     * @return bool True if "value" has been set, false if not
     */
    public function hasValue() : bool
    {
        return isset($this->value);
    }

    /**
     * Get a default "value" value, if any is available
     *
     * @return string|null Default "value" value or null if no default value is available
     */
    public function getDefaultValue() : ?string
    {
        return null;
    }
}
