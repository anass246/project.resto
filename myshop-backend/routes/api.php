<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController; // 👈 ضروري تزيد هادي باش يعرف الكونترولر

// Route Get User (خليها، غاتحتاجها من بعد باش تجيب معلومات المستخدم)
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// 👇 هادو هما الروابط الجداد لي زدنا (Public Routes)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);