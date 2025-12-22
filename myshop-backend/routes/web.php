<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Adminbooktabl; 
use App\Http\Controllers\AdminCommentController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin/reservations', [Adminbooktabl::class, 'index']);
Route::get('/admin/comments', [AdminCommentController::class, 'index']);