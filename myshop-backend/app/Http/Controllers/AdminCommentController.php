<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class AdminCommentController extends Controller
{
    public function index()
    {
        // كنجيبو كاع التعليقات، الجديدة هي اللولة
        $comments = Comment::orderBy('created_at', 'desc')->get();
        return view('admin.comments', compact('comments'));
    }
}