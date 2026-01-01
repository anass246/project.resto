<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment; // ضروري نعيطو للموديل

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $comments = Comment::orderBy('created_at', 'desc')->get();
        return response()->json($comments);
        // 1. التحقق من المعلومات
        $request->validate([
            'name' => 'required',
            'content' => 'required', // انتبه: فالرياكت سميتها content
            'rating' => 'required|integer'
        ]);

        // 2. التسجيل فالداتابيز
        $comment = Comment::create([
            'name' => $request->name,
            'message' => $request->content,
            'rating' => $request->rating,
            'status' => 'pending' // كيبان غير للأدمين فالأول
        ]);

        return response()->json(['message' => 'Comment saved!'], 201);
    }
    
    // دالة باش تجيب الكومنتيرات الموافق عليها (اختياري)
    public function index()
    {
        $comments = Comment::where('status', 'approved')->latest()->get();
        return response()->json($comments);
    }
}