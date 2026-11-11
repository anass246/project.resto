<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookaTable extends Controller
{
    public function store(Request $request)
    {
        // 1. Validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'guests' => 'required|integer|min:1',
            'date' => 'required|date',
            'time' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // 2. Find user by email
        $user = User::where('email', $request->email)->first();

        // Check if email exists
        if (!$user) {
            return response()->json([
                'message' => 'This email is not registered. Please sign up first.'
            ], 404);
        }

        // Check if name matches account
        if (strtolower(trim($request->name)) !== strtolower(trim($user->name))) {
            return response()->json([
                'message' => 'Name mismatch! Please use the exact name on your account: ' . $user->name
            ], 400);
        }

        // 3. Store reservation
        $reservation = Reservation::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'guests' => $request->guests,
            'date' => $request->date,
            'time' => $request->time,
            'special_requests' => $request->special_requests ?? '',
            'status' => 'pending'
        ]);

        return response()->json([
            'message' => 'Reservation created successfully!',
            'data' => $reservation
        ], 201);
    }
}
