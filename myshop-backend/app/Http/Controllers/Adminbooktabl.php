<?php

namespace App\Http\Controllers;

use App\Models\Reservation; // كنعيطو للمودل ديال الحجوزات
use Illuminate\Http\Request;

class Adminbooktabl extends Controller
{
    public function index()
    {
        // كنجيبو كاع الحجوزات، مرتبين من الجديد للقديم
        $reservations = Reservation::orderBy('created_at', 'desc')->get();

        // كنصيفطوهم للصفحة (View)
        return view('admin.reservations', compact('reservations'));
    }
}