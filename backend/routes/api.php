<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//================= HTTP GET =================

Route::get('getUsers', 'UserController@getUsers');
Route::get('searchReviews/{id}', 'ReviewController@searchReviews');
Route::get('rankedList', 'ReviewController@rankedList');
Route::get('getDataToChart', 'ReviewController@getDataToChart');

//================= HTTP POST =================
Route::post('addReview', 'ReviewController@addReview');
