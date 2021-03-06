# Release Notes

### Unreleased

#### Fixed

* Codeception broken after update (_in codeception version 4.1.x series_).

## v4.x

### [v4.2.1](https://github.com/aedart/athenaeum/compare/4.2.0...4.2.1)

* Bumped minimum required dependencies, due to [security issue / release from Laravel](https://blog.laravel.com/laravel-cookie-security-releases).

### [v4.2.0](https://github.com/aedart/athenaeum/compare/4.1.0...4.2.0)

#### Added

* Circuits package that offers a `CircuitBreaker`, with a `Manager` (profile-based).

### [v4.1.0](https://github.com/aedart/athenaeum/compare/4.0.1...4.1.0)

#### Fixed

* (Core) Unable to run `schedule:run` command. [#10](https://github.com/aedart/athenaeum/issues/10)

#### Changed

* Minimum required Laravel packages version set to version `^7.7`

#### Added

* `LaravelExceptionHandler` adaptor

### [v4.0.1](https://github.com/aedart/athenaeum/compare/v4.0...4.0.1)

#### Fixed

* Broken inter-dependencies in all packages. Removed version `v4.0` from packagist.org to prevent conflicts. 

### [v4.0.0](https://github.com/aedart/athenaeum/compare/3.1.0...v4.0)

#### Changed

**Breaking Changes**

* Required PHP version changed to `v7.4.x`.
* Upgraded Laravel dependencies to `v7.6.x`, Symfony to `v5.0.x`, Codeception to `v4.1.x`, and various other dependencies.
* All class properties now have their [types declared](https://www.php.net/manual/en/migration74.new-features.php#migration74.new-features.core.typed-properties), if possible.
* `dto:create` command now generates traits with class [type declarations](https://www.php.net/manual/en/migration74.new-features.php#migration74.new-features.core.typed-properties) for it's properties (_former `dto:create-aware-of` command_).
* `Dto` and `ArrayDto` now implements the `__serialize()` and `__unserialize()` magic methods.
* Replaced `\Aedart\Dto` with `\Aedart\Dto\Dto`[1].
* Replaced `\Aedart\ArrayDto` with `\Aedart\Dto\ArrayDto`[1].
* [Codeception](https://github.com/Codeception/Codeception) and [Orchestra Testbench](https://github.com/orchestral/testbench) are now defined as dev-dependencies.
You need to require these packages, if you depended on them[2].
* (_Fix_) `IoC` no longer highjacks Laravel's `app` binding automatically, when `getInstance()` is invoked.
This was used to get some of Laravel's components to work outside the scope of a Laravel application.
Yet, this was a "hack" that potentially could lead to conflicted with Laravel. This was never intended[3]!
* Deprecated `\Aedart\Console\CommandBase`, `\Aedart\Console\AwareOfScaffoldCommand` and `\Aedart\Console\CreateAwareOfCommand` components.
Commands have been replaced with updated versions within the [`aedart/athenaeum-support `](https://packagist.org/packages/aedart/athenaeum-support) package.
The original commands are still available using the `athenaeum` console application.
* Redesign entire Http `Client` package, now makes use of a Request Builder and Http Query Builder.
* Deprecated all aware-of helpers that contained `*\Mixed\*` in their namespace.
These will be removed in next major version.
Replacement components are available within the `*\Mixes\*` namespace.
The term `Mixed` has been a [soft-reserved keyword](https://www.php.net/manual/en/reserved.other-reserved-words.php) since PHP `v7.0`.

**Non-breaking Changes**

* Converted athenaeum into a true [mono repository](ttps://en.wikipedia.org/wiki/Monorepo). All major components are now available as separate packages, via composer.
* Code style to [PSR-12](https://www.php-fig.org/psr/psr-12/).
* Replaced deprecated `Twig` components, in `TwigPartial` trait.
* `UnitTestCase` now uses `FakerPartial` to setup [Faker](https://github.com/fzaninotto/Faker).
* `UnitTestCase` now inherits from Codeception's `Unit` test-case.
* Using `IoCFacade` to resolve default Http Client `Manager`, in `HttpClientsManagerTrait`.
* Added `\Aedart\Contracts\Container\IoC` and `\Illuminate\Contracts\Container\Container` as `app` binding aliases, in `IoC`[3].
* Added possibility to specify specific `vendor` and `output` paths for `interfaces` and `traits`, in the aware-of `Generator`. 
* `getHeader()` is now case-insensitive, in `DefaultHttpClient` and `JsonHttpClient`.
Handling of headers is now more inline with [PSR-7](https://www.php-fig.org/psr/psr-7/#12-http-headers).
* Added `data_format` option for Http Clients.

[1]: _Deprecation of existing abstractions or components is due to the conversion of this package into a [mono repository](ttps://en.wikipedia.org/wiki/Monorepo).
Existing abstractions are still available, yet will be removed entirely in `v5.0`._

[2]: _You can require packages separately or if you only use the "testing" components, then replace this package with [`aedart/athenaeum-testing`](https://packagist.org/packages/aedart/athenaeum-testing) as dev-dependency and the mentioned packages will all be installed._

[3]: _You have to invoke `registerAsApplication()` explicitly to bind the `IoC` instance as `app`, should you require this during testing or outside a Laravel application.
**Warning**: do NOT invoke mentioned method if you are using the `IoC` within a Laravel application.
It will highjack the `app` binding, which will cause your application to behave unfavourable._

#### Added

* `Application`, custom adaptation of Laravel's Application.
* `Kernel`, custom adaptation of Laravel's Console Application (Artisan).
* `Registrar`, able to register service providers.
* `IoCFacade`, able to resolve bindings or return a default value, if binding does not exist.
* `LastInput` and `LastOutput` aware components (console).
* `ListenersViaConfigServiceProvider`, offers registration of event listeners and subscribers via configuration.
* `ConsoleServiceProvider`, offers console commands to be registered via configuration.
* `BaseExeptionHandler` abstraction along with a few default exception handlers that can be used with `Application`, if enabled.
* `Builder`, a Http request builder used by the Http `Client`.
* Http Query `Builder`, used by the request builder.
* `Grammar` abstraction to compile Http Query string - three grammars are offered: `DefaultGrammar`, `JsonApiGrammar` and `ODataGrammar`.
* `FakerAware` component that can be used for testing purposes.
* `FakerPartial`, offers basic setup for [Faker](https://github.com/fzaninotto/Faker).
* `callOrReturn()` utility method in `MethodHelper`.
* `MessageBag` testing component. Intended to store test or debugging messages across components and tests.
* `Version` utility. 
* `Math` utility.
* `Arr` utility.
* `string` and `int` `Milestone` aware components
* `ApplicationInitiator` and `AthenaeumTestHelper`, testing utilities for the custom adaptation of Laravel's Application.
* `MailManagerAware` and `MailManagerTrait` Laravel Aware-of Helper.
* Http- `ClientFactoryAware` and `ClientFactoryTrait` Laravel Aware-of Helper.
* `Cookie` and `SetCookie` DTOs.

#### Fixed

* `Loader` fails to populate configuration correctly, adds initial directory path to each section.
_This happens when relative paths are set as the loader's initial directory._
* `Applicaiton` instance not destroyed after `stopApplication()` invoked, in `ApplocationInitiator`.
This resulting in `$instance` still containing reference to the application, inside Laravel's Service Container, causing tests to fail.
* `destroy()` does not flush bindings, in `IoC`. Instance is destroyed, yet formal Service Container `flush()` was not respected.
* Default values not triggered when invoking `toArray()`, in `Dto` and `ArrayDto`, when using aware-of traits to create a Dto class.
* `ContainerTrait`'s default value returns the `Facade` root application, instead of `Container`.
(_Strictly speaking, this was not a defect. `Application` is an extended version of `Container`._)
* Headers option not initially set in `DefaultHttpClient`.
* Default return type of `MailerTrait` and `MailQueueTrait` (Laravel `v7.x` changed return of `Mail` Facade to `MailManager`).
* `withOptions()` incorrectly merged options, in `DefaultHttpClient` and `JsonHttpClient`.
This caused strange behaviour, when attempting to overwrite an already set option.
* Http Client `Manager` does not use default profile name from configuration, it always returns "default", when no profile name given.

## v3.x

### [v3.1.0](https://github.com/aedart/athenaeum/compare/3.0.1...3.1.0)

#### Changed

* Updated license

### [v3.0.1](https://github.com/aedart/athenaeum/compare/3.0.0...3.0.1)

#### Fixed

* `LogicalException` thrown during travis build (_tests only_), caused by `PhpRedisConnector`. Changed test to use `predis` as default laravel redis connection.

### [v3.0.0](https://github.com/aedart/athenaeum/compare/2.3.0...3.0.0)

#### Changed

**Breaking Changes**

* Upgraded to Laravel `v6.x`, Symfony `v4.3.x` and upgraded various other dependencies.
* Removed custom `JsonException` (_deprecated_), in `Json` utility. Now defaults to php's native [`JsonException`](https://www.php.net/manual/en/class.jsonexception.php).

**Non-breaking Changes**

* Added `InteractsWithRedis` helper trait to the `LaravelTestHelper`.

## v2.x

### [v2.3.0](https://github.com/aedart/athenaeum/compare/2.2.0...2.3.0)

#### Changed

* Now supporting Symfony Console version 4.3.x, [#2](https://github.com/aedart/athenaeum/issues/2)

### [v2.2.0](https://github.com/aedart/athenaeum/compare/2.1.0...2.2.0)

#### Added

* Http Client package, a wrapper for the [Guzzle Http Client](http://docs.guzzlephp.org/en/stable/index.html), offering multiple "profile" based client instances, which can be configured via a `configs/http-clients.php` configuration file.

#### Changed

* Upgraded to codeception `v3.0.x` (_dev dependency_) and replaced deprecated assertions.

### [v2.1.0](https://github.com/aedart/athenaeum/compare/2.0.0...2.1.0)

#### Changed

* Simplified the bitmask operation for the `\Aedart\Utils\Json`.

### [v2.0.0](https://github.com/aedart/athenaeum/compare/1.2.0...2.0.0)

#### Changed

* Minimum required PHP version set to `v7.3.0`
* Main dependencies changed to Laravel `v5.8.x`, Symfony `v4.2.x` and Orchestra Testbench `v.3.8.x`
* `\Aedart\Utils\Json` automatically sets [`JSON_THROW_ON_ERROR`](http://php.net/manual/en/json.constants.php) bitmask option, if not set
* Deprecated `Aedart\Utils\Exceptions\JsonEncoding`. Use native [`JsonException`](http://php.net/manual/en/class.jsonexception.php) instead
* `Aedart\Utils\Exceptions\JsonEncoding` now inherits from [`JsonException`](http://php.net/manual/en/class.jsonexception.php)
* Deprecated `\Aedart\Contracts\Utils\Exceptions\JsonEncodingException`, will be removed in next major version
* Replaced deprecated `PHPUnit_Framework_MockObject_MockObject` with new `\PHPUnit\Framework\MockObject\MockObject`, in `TraitTester`

## v1.x

* Please review commits on [GitHub](https://github.com/aedart/athenaeum/commits/master)
