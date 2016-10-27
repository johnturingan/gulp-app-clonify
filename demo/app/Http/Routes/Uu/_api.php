<?php

Route::group(['prefix' => 'command'], function () {
    Route::post('build-css', 'Uu\DeveloperController@buildCss');

});