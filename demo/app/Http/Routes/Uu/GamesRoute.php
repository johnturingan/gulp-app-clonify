<?php

Route::get('casino', 'Uu\GamesController@casino');

Route::get('casino/{vendor}/{product?}', 'Uu\GamesController@casino');

Route::get('lottery', 'Uu\GamesController@lottery');

Route::get('texasmahjong','Uu\GamesController@texasmahjong');

Route::group(['prefix' => 'internal-sports'], function () {

    Route::get('{sport?}/{inplay?}', 'Uu\SportsController@internalSports');
});

Route::group(['prefix' => 'sports'], function () {

    Route::get('launcher/{sport}/{inplay?}', 'Uu\SportsController@launcher')->where('inplay', 'true|false|');

    Route::get('{sport?}/{inplay?}', 'Uu\SportsController@sports');
});

Route::group(['prefix' => 'games'], function () {

    Route::get('{categ}', 'Uu\GamesController@index');

    Route::get('gpi/game-settings', 'Uu\GamesController@gpiGameJsonSettings');
});

