<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\BookaTable;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CommentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AccountController::class, 'store']);
Route::post('/login', [AccountController::class, 'login']);
Route::post('/reservations', [BookaTable::class, 'store']);
Route::post('/orders', [OrderController::class, 'store']);
Route::post('/comments', [CommentController::class, 'store']);
Route::get('/comments', [CommentController::class, 'index']);