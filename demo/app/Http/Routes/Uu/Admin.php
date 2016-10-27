<?php

Route::group(['prefix'=>'admin'],function() {
    Route::get('application/mc/flush', 'Base\BaseAdminController@flushMemcached');
    Route::get( 'health/check', 'Base\BaseAdminController@healthCheck');
    Route::get( 'error/handler/{errorCode}', 'Base\BaseAdminController@error');
});