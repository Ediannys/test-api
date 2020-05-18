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

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
  
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

Route::group([    
    'middleware' => 'api',    
    'prefix' => 'ticket'
], function () {  

    Route::post('create', 'TicketController@create_ticket');

    Route::get('list', 'TicketController@list_tickets');

    Route::get('find/{id}', 'TicketController@find_ticket');

    Route::get('list_users', 'TicketController@list_users');

    Route::get('all_user_tickets', 'TicketController@all_user_tickets');

    Route::get('user_tickets/{id}', 'TicketController@user_tickets');

    Route::put('update/{id}', 'TicketController@update_ticket');

    Route::put('update_status/{id}', 'TicketController@update_status');

    Route::delete('delete/{id}', 'TicketController@delete');
   
});
