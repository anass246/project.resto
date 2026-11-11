<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\Adminbooktabl; 
use App\Http\Controllers\AdminCommentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderController;

Route::get('/', function () {
    return view('welcome');
});

// ==========================================
// 🛡️ Admin Authentication (Public Routes)
// ==========================================
Route::get('/admin/login', [AdminAuthController::class, 'showLogin'])->name('admin.login');
Route::post('/admin/login', [AdminAuthController::class, 'login'])->name('admin.login.submit');
Route::match(['get', 'post'], '/admin/logout', [AdminAuthController::class, 'logout'])->name('admin.logout');

// ==========================================
// 🔒 Protected Admin Area (Requires Authorization)
// ==========================================
Route::middleware(['admin.auth'])->group(function () {
    Route::get('/admin', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin/orders', [OrderController::class, 'index'])->name('admin.orders');
    Route::get('/admin/reservations', [Adminbooktabl::class, 'index'])->name('admin.reservations');
    Route::get('/admin/comments', [AdminCommentController::class, 'index'])->name('admin.comments');
});
