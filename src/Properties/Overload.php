<?php

namespace Aedart\Properties;

use Aedart\Properties\Exceptions\UndefinedProperty;
use Aedart\Utils\Helpers\MethodHelper;
use ReflectionException;
use ReflectionProperty;

/**
 * Overload
 *
 * TODO: Description of this trait
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 * @package Aedart\Properties
 */
trait Overload
{
    use Reflections;

    /*****************************************************************
     * Magic methods
     ****************************************************************/

    /**
     * Method is utilized for reading data from inaccessible properties.
     *
     * @param string $name
     *
     * @return mixed
     *
     * @throws ReflectionException
     * @throws UndefinedProperty
     */
    public function __get(string $name)
    {
        if ($this->hasInternalProperty($name)) {
            return $this->invokeGetter($this->getInternalProperty($name));
        }

        throw new UndefinedProperty(sprintf('Failed reading Property "%s". It does not exist or is inaccessible', $name));
    }

    /**
     * Method is run when writing data to inaccessible properties.
     *
     * @param string $name
     * @param mixed $value
     *
     * @return mixed
     *
     * @throws ReflectionException
     * @throws UndefinedProperty
     */
    public function __set(string $name, $value)
    {
        if ($this->hasInternalProperty($name)) {
            return $this->invokeSetter($this->getInternalProperty($name), $value);
        }

        throw new UndefinedProperty(sprintf('Failed writing Property "%s". It does not exist or is inaccessible', $name));
    }

    /**
     * Method is triggered by calling isset() or empty() on inaccessible properties.
     *
     * <br />
     *
     * If an undefined property is being checked, using isset or empty, then
     * this method will always return false
     *
     * @param string $name
     *
     * @return bool
     *
     * @throws ReflectionException
     */
    public function __isset(string $name) : bool
    {
        if( ! $this->hasInternalProperty($name)){
            return false;
        }

        return isset($this->$name);
    }


    /*****************************************************************
     * Internals
     ****************************************************************/

    /**
     * Invoke and return the given property's getter-method
     *
     * @param ReflectionProperty $property
     *
     * @return mixed
     *
     * @throws ReflectionException
     * @throws UndefinedProperty
     */
    protected function invokeGetter(ReflectionProperty $property)
    {
        $methodName = MethodHelper::makeGetterName($property->getName());
        if ($this->hasInternalMethod($methodName)) {
            return $this->$methodName();
        }

        throw new UndefinedProperty(sprintf(
            'No %s() getter-method available for property "%s"', $methodName,
            $property->getName()
        ));
    }

    /**
     * Invoke the given property's setter-method
     *
     * @param ReflectionProperty $property
     * @param mixed $value
     *
     * @return mixed
     *
     * @throws ReflectionException
     * @throws UndefinedProperty
     */
    protected function invokeSetter(ReflectionProperty $property, $value)
    {
        $methodName = MethodHelper::makeSetterName($property->getName());
        if ($this->hasInternalMethod($methodName)) {
            return $this->$methodName($value);
        }

        throw new UndefinedProperty(sprintf(
            'No %s() setter-method available for property "%s"', $methodName,
            $property->getName()
        ));
    }
}
