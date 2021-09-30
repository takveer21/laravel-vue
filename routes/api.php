<?php

use App\Http\Controllers\DataController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/all-blogs',[DataController::class,'allBlogs']);
Route::get('/single-blog/{id}',[DataController::class,'singleBlog']);
Route::get('/all-categories',[DataController::class,'allCategories']);
Route::get('/all-tags',[DataController::class,'allTags']);
