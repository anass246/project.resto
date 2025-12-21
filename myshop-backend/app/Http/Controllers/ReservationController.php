<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReservationController extends Controller
{
    public function store(Request $request)
    {
        // 1. التحقق من المعلومات (Validation)
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

        // --- التصحيح هنا ---
        
        // أول حاجة: واش الإيميل كاين أصلاً؟ (هادي اللي كانت ناقصاك)
        if (!$user) {
            return response()->json([
                'message' => 'Hada l-email ma msajalch. 3afak sir tsajal ba3da.'
            ], 404);
        }

        // ثاني حاجة: دابا حيث تأكدنا أنه كاين، عاد نقارنو السمية
        if ($request->name !== $user->name) {
            return response()->json([
                'message' => 'Hada l-email kayn, walakin smya machi hiya (Name mismatch).'
            ], 400);
        }
        
        // -------------------

        // 3. تسجيل الحجز
        $reservation = Reservation::create([
            'user_id' => $user->id,
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'guests' => $request->guests,
            'date' => $request->date,
            'time' => $request->time,
            'special_requests' => $request->special_requests,
            'status' => 'pending'
        ]);

        return response()->json([
            'message' => 'Reservation created successfully!',
            'data' => $reservation
        ], 201);
    }
}