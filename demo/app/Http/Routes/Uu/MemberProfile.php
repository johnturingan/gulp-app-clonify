<?php

Route::get('signup', 'Uu\MembersignupController@index');

Route::group(['prefix' => 'profile'], function () {
    Route::get('/', 'Uu\ProfileController@index');
});

