<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// 👇 هادو هما السطور اللي ناقصينك!
use App\Models\Order;       
use App\Models\Reservation; 

class DashboardController extends Controller
{
    public function index()
    {
        // 1. حسب عدد الطلبات (دابا غايعرف منين يجيب Order)
        $ordersCount = Order::count();
        
        // 2. حسب مجموع الفلوس
        $totalRevenue = Order::sum('total_price');

        // 3. حسب عدد الحجوزات (تأكد أنك ديجا مصاوب الموديل Reservation)
        // إلى مازال ما عندكش الموديل Reservation، دير قدام السطر جوج شرطات // باش يتلغى مؤقتاً
        // $reservationsCount = Reservation::count(); 
        $reservationsCount = 0; // دير هادي مؤقتاً باش مايطلعش ليك خطأ آخر

        return view('admin.dashboard', compact('ordersCount', 'totalRevenue', 'reservationsCount'));
    }
}