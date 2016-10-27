<?php
/**
 * Created by PhpStorm.
 * User: john
 * Date: 7/8/15
 * Time: 8:59 AM
 */

/******************************
 * DEFAULT
 ******************************/

Route::get('/', 'Uu\HomeController@index');

Route::get('/uu/{aid}/{route?}', 'Uu\HomeController@captureAffiliateId');

Route::get('logout', 'Uu\HomeController@logout');

Route::get('grab-a-member', 'Uu\GrabmemberController@index');

Route::get('infocenter', 'Uu\InfoCenterController@index');

/******************************
 * ERROR
 ******************************/

Route::group(['prefix'=>'/error'],function(){
    Route::get('deposit', 'Uu\ErrorPageController@deposit');
});



/******************************
 * PROMOTIONS
 ******************************/

Route::group(['prefix'=>'promotions'],function(){
    Route::get('/', 'Uu\PromotionsController@index');
    Route::get('game_list', 'Uu\PromotionsController@game_list');
});



/******************************
 * PLAYTECH CASHIER PAGE
 ******************************/

Route::group( ['prefix' => '/cashierpage'], function () {
    Route::get('{type}', 'Uu\ExternalPagesController@cashierPage');
    Route::get('{type}/debug/{token}', 'Uu\ExternalPagesController@cashierPageDebug');
});
