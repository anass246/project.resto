<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validation
        $request->validate([
            'name' => 'required|string',
            'content' => 'required|string',
            'rating' => 'required|integer|min:1|max:5'
        ]);

        // 2. Save to database
        $comment = Comment::create([
            'name' => $request->name,
            'message' => $request->content,
            'rating' => $request->rating,
            'status' => 'pending'
        ]);

        return response()->json(['message' => 'Comment saved successfully!', 'comment' => $comment], 201);
    }
    
    // Get approved comments
    public function index()
    {
        $comments = Comment::where('status', 'approved')->latest()->get();
        return response()->json($comments);
    }
}