<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Schedule Timezone
    |--------------------------------------------------------------------------
    |
    | Default timezone for your scheduled events. If "null" is provided, then
    | the timezone will default to your application's timezone.
    | See app.timezone
    */

    'timezone' => null,

    /*
    |--------------------------------------------------------------------------
    | Schedule Cache
    |--------------------------------------------------------------------------
    |
    | The cache store (driver) to use by scheduled events.
    */

    'cache' => env('SCHEDULE_CACHE_DRIVER', 'file'),

    /*
    |--------------------------------------------------------------------------
    | Schedule Tasks
    |--------------------------------------------------------------------------
    |
    | Each provided component defines one ore more tasks that are to be executed
    | when they are due. Components MUST inherit from the "Schedules Tasks" interface.
    | @see \Aedart\Contracts\Console\Scheduling\SchedulesTasks
    */

    'tasks' => [

        \Aedart\Tests\Helpers\Dummies\Console\Scheduling\DefinesTestTasks::class

    ]
];
