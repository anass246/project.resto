<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    // ✅ 1. دالة التسجيل (signup)
    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
            'token' => $token
        ], 201);
    }

    // ✅ 2. دالة الدخول (Login) - هادي اللي زدنا دابا
    public function login(Request $request)
    {
        // التحقق من المعلومات
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // قلب على اليوزر بالإيميل
        $user = User::where('email', $request->email)->first();

// 1. تحقق واش اليوزر كاين أصلاً
        if (!$user) {
            return response()->json([
                'message' => 'Hada l-email ma msajalch. 3afak sir tsajal ba3da.'
            ], 404);
        }

        // 2. دابا عاد تحقق من المود باس
        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid login credentials (Mot de passe ghalat)'
            ], 401);
        }

        // صايب التوكن
        $token = $user->createToken('auth_token')->plainTextToken;

        // صيفط الجواب
        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token
        ], 200);
    }
}