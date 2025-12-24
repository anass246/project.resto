<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Adminbooktabl; 
use App\Http\Controllers\AdminCommentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin/reservations', [Adminbooktabl::class, 'index']);
Route::get('/admin/comments', [AdminCommentController::class, 'index']);
Route::get('/admin', [DashboardController::class, 'index']);
Route::get('/admin/orders', [OrderController::class, 'index']); // 👈 زيد هادي لتحت