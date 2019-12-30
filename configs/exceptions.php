<?php
return [

    /*
     |--------------------------------------------------------------------------
     | Enable or disable exceptions handling
     |--------------------------------------------------------------------------
     |
     | If enabled, then application will automatically set and register the
     | following:
     | - error reporting
     | - error handler
     | - exceptions handler
     | - shutdown function
     |
     | If disabled, then none of the settings found withing this configuration
     | file will have any effect!
     |
     | TIP: If your application already has some of these set, then you
     | should NOT enable this or it might conflict with your existing logic.
     |
     | @see \Aedart\Core\Bootstrappers\SetExceptionHandling
    */

    'enabled' => env('EXCEPTION_HANDLING_ENABLED', false),

    /*
     |--------------------------------------------------------------------------
     | Error Reporting
     |--------------------------------------------------------------------------
     |
     | Set the level of errors to be reported.
     |
     | @see https://www.php.net/manual/en/function.error-reporting.php
    */

    'error-reporting' => -1,

    /*
     |--------------------------------------------------------------------------
     | Error Displaying
     |--------------------------------------------------------------------------
     |
     | Determine in what environments "display_error" should be turned on.
     | By default, error displaying will be turned off.
     |
     | @see https://www.php.net/manual/en/errorfunc.configuration.php#ini.display-errors
    */

    'display-errors-in' => [
        'testing',
        //'local',
        //'production'
    ],

    /*
     |--------------------------------------------------------------------------
     | Fatal Errors (during shutdown)
     |--------------------------------------------------------------------------
     |
     | List of error-severities that are considered fatal. If these are encountered
     | during shutdown, then a "Fatal Exception" is passed on to the registered
     | exception handler.
     |
     | @see https://www.php.net/manual/en/errorfunc.constants.php
    */

    'fatal-errors' => [
        E_COMPILE_ERROR,
        E_COMPILE_WARNING,
        E_CORE_ERROR,
        E_CORE_WARNING,
        E_ERROR,
        E_PARSE,
        E_USER_ERROR,
        E_USER_WARNING,
        E_USER_NOTICE

        //E_DEPRECATED, // Might be good if you wish to hunt down deprecated functionality
        //E_USER_DEPRECATED, // Also good if developers use "trigger_error()" for custom deprecation

        //E_STRICT, // Good if you wish PHP to give suggestions on improvements

        //E_WARNING, // ...I dare you!
        //E_NOTICE, // ...I double-dare you!
        //E_ALL, // ...I submit to your superior PHP skills!
    ],
];
