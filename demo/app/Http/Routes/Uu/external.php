<?php
/**
 * Created by PhpStorm.
 * User: john
 * Date: 7/10/15
 * Time: 5:10 PM
 */

Route::group(['prefix' => 'pages'], function () {
    Route::get('{page}/{type?}', 'Uu\ExternalPagesController@index');

});

Route::get('/landing/{page}', 'Uu\ExternalPagesController@landingPage');