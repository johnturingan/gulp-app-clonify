<?php

Route::group(['prefix' => 'affiliate'], function () {
    Route::get('track','Uu\AffiliateController@track');
    Route::get('{page?}', 'Uu\AffiliateController@index');
});
