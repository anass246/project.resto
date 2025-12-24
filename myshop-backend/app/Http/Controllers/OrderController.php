<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order; // ضروري باش يعرف الموديل

class OrderController extends Controller
{
    // 1. هادي هي الدالة اللي كاتستقبل الطلب من Frontend وتسجلو
    public function store(Request $request)
    {
        // كنتأكدو أن المعلومات وصلات هي هاديك
        $validated = $request->validate([
            'client_name' => 'required|string',
            'total_price' => 'required',
            'items' => 'required', // الماكلة اللي شرى
        ]);

        // كنسجلو الكوموند فالداتابيز
        $order = Order::create([
            'client_name' => $request->client_name,
            'email' => $request->email,
            'total_price' => $request->total_price,
            'items' => $request->items, // Laravel غايتكلف يحولها لـ JSON حيت درنا Cast فالملف Order.php
            'transaction_id' => $request->transaction_id,
            'status' => 'Paid' // الحالة: مدفوع
        ]);

        return response()->json(['message' => 'Order created successfully', 'order' => $order], 201);
    }

    // 2. هادي هي الدالة اللي كاتوريك الطلبات فالأدمين
    public function index()
    {
        // كنجيبو الطلبات من الجديد للقديم
        $orders = Order::orderBy('created_at', 'desc')->get();

        // كنصيفطوهم للصفحة orders.blade.php
        return view('admin.orders', compact('orders'));
    }
}