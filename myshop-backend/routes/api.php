<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\BookaTable;
use App\Http\Controllers\OrderController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// 👇 هادو هما الروابط الجداد لي زدنا (Public Routes)
Route::post('/signup', [AccountController::class, 'signup']);
Route::post('/login', [AccountController::class, 'login']);
Route::post('/reservations', [BookaTable::class, 'store']);
Route::post('/orders', [OrderController::class, 'store']);