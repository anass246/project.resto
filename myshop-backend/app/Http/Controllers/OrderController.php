<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    // 1. Store order from Frontend checkout
    public function store(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string',
            'total_price' => 'required',
            'items' => 'required',
        ]);

        // Save order in database
        $order = Order::create([
            'client_name' => $request->client_name,
            'email' => $request->email,
            'total_price' => $request->total_price,
            'items' => $request->items,
            'transaction_id' => $request->transaction_id,
            'status' => 'Paid'
        ]);

        return response()->json(['message' => 'Order created successfully', 'order' => $order], 201);
    }

    // 2. Orders list for admin
    public function index()
    {
        $orders = Order::orderBy('created_at', 'desc')->get();
        return view('admin.orders', compact('orders'));
    }
}