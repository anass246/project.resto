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
        // 1. Validation (كنتأكدو أن المعلومات مكتوبة مزيان)
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

        // 2. كنقلبو على اليوزر بالإيميل
        $user = User::where('email', $request->email)->first();

        // الشرط الأول: واش الإيميل كاين أصلاً؟
        if (!$user) {
            return response()->json([
                'message' => 'This email is not registered. Please sign up first.'
            ], 404); // 404 Not Found
        }

        // الشرط الثاني: واش السمية مطابقة؟
        // درنا (strtolower) باش نتجاهلو الحروف الكبيرة والصغيرة (ANASS = anass)
        if (strtolower(trim($request->name)) !== strtolower(trim($user->name))) {
            return response()->json([
                'message' => 'Name mismatch! Please use the exact name on your account: ' . $user->name
            ], 400); // 400 Bad Request
        }

        // 3. تسجيل الحجز (إلى داز من الشروط كاملة)
        $reservation = Reservation::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'guests' => $request->guests,
            'date' => $request->date,
            'time' => $request->time,
            // كنقادو الطلبات الخاصة باش ماتعطيش NULL
            'special_requests' => $request->special_requests ?? '',
            'status' => 'pending'
        ]);

        return response()->json([
            'message' => 'Reservation created successfully!',
            'data' => $reservation
        ], 201);
    }
}
