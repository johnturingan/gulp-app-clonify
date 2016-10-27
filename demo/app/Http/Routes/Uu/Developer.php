<?php
/**
 * Created by PhpStorm.
 * User: john
 * Date: 10/23/15
 * Time: 2:46 PM
 */

Route::get('/performance-status', 'Uu\DeveloperController@performanceCheck');
Route::get('/header-status', 'Uu\DeveloperController@headersCheck');
Route::post('/performance-status', 'Uu\DeveloperController@capturePerformance');

Route::get('/diagnostic-tool', 'Uu\DeveloperController@diagnosticTool');
Route::post('/diagnostic-tool', 'Uu\DeveloperController@captureDiagnostic');
Route::get('/diagnostic-tool/{diagnosticId}/{loadType?}', 'Uu\DeveloperController@diagnosticExport');
Route::get('/diagnostic/{method}/{token?}', 'Uu\ApiController@runServiceCalls');