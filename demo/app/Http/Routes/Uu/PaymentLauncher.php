<?php
/**
 * Created by PhpStorm.
 * User: john
 * Date: 7/8/15
 * Time: 1:49 PM
 */

Route::group(['prefix' => 'payments/launcher'], function () {
    Route::get('{type}/{amount}', 'Uu\PaymentLauncherController@index');
});

Route::group(['prefix' => 'payments'], function () {
    Route::get('/{type}/callback', 'Uu\ExternalPagesController@callbackurl');
    Route::post('/{type}/callback', 'Uu\ExternalPagesController@callbackurl');

    Route::get('/{type}/thankyou', 'Uu\ExternalPagesController@thankyou');
    Route::post('/{type}/thankyou', 'Uu\ExternalPagesController@thankyou');
});