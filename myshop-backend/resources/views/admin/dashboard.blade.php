@extends('layouts.admin')

@section('content')
    <header>
        <h1>Welcome Back, Admin! 👋</h1>
    </header>

    <div class="dashboard-cards" style="display: flex; gap: 20px; margin-top: 20px;">
        
        <div class="card" style="background: white; padding: 20px; border-radius: 10px; flex: 1; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="font-size: 30px; color: #800000;"><i class="fas fa-shopping-cart"></i></div>
            <h3>Total Orders</h3>
            <p style="font-size: 24px; font-weight: bold;">{{ $ordersCount }}</p>
        </div>

        <div class="card" style="background: white; padding: 20px; border-radius: 10px; flex: 1; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="font-size: 30px; color: #d4af37;"><i class="fas fa-calendar-alt"></i></div>
            <h3>Reservations</h3>
            <p style="font-size: 24px; font-weight: bold;">{{ $reservationsCount }}</p>
        </div>

        <div class="card" style="background: white; padding: 20px; border-radius: 10px; flex: 1; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="font-size: 30px; color: green;"><i class="fas fa-dollar-sign"></i></div>
            <h3>Total Revenue</h3>
            <p style="font-size: 24px; font-weight: bold;">{{ $totalRevenue }} DH</p>
        </div>

    </div>
@endsection