<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;       
use App\Models\Reservation; 
use App\Models\Comment;

class DashboardController extends Controller
{
    public function index()
    {
        // 1. Orders count & total revenue
        $ordersCount = Order::count();
        $totalRevenue = Order::sum('total_price') ?? 0;

        // 2. Reservations count
        $reservationsCount = Reservation::count();

        // 3. Customer comments & reviews count
        $commentsCount = Comment::count();

        // 4. Recent activity
        $recentOrders = Order::latest()->take(5)->get();
        $recentReservations = Reservation::latest()->take(5)->get();

        return view('admin.dashboard', compact(
            'ordersCount', 
            'totalRevenue', 
            'reservationsCount', 
            'commentsCount',
            'recentOrders',
            'recentReservations'
        ));
    }
}
