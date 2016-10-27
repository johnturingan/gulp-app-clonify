<?php
/**
 * Created by PhpStorm.
 * User: john
 * Date: 6/23/15
 * Time: 1:08 PM
 */

Route::group(['prefix' => 'launcher'], function () {

    Route::get('palazzo/redirect', 'Uu\GameLauncherController@palazzoredirect');

    Route::get('{game}/{gameId}/{mode}', 'Uu\GameLauncherController@index');

});

