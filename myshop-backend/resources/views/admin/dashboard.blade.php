@extends('layouts.admin')

@section('title', 'Dashboard Overview')
@section('breadcrumb', 'Overview')

@section('content')
    <div class="page-header">
        <div>
            <h1><i class="fas fa-chart-pie"></i> Restaurant Dashboard</h1>
            <p class="subtitle">Welcome back! Here is a summary of today's business activity at Snack Anass.</p>
        </div>
        <div style="display: flex; gap: 10px;">
            <a href="/admin/orders" class="btn btn-primary">
                <i class="fas fa-bag-shopping"></i> View Orders
            </a>
            <a href="/admin/reservations" class="btn btn-outline">
                <i class="fas fa-calendar-check"></i> Manage Bookings
            </a>
        </div>
    </div>

    <!-- Stat Cards Grid -->
    <div class="dashboard-cards">
        <!-- Revenue Card -->
        <div class="stat-card">
            <div class="stat-card-top">
                <div class="stat-icon accent">
                    <i class="fas fa-coins"></i>
                </div>
                <span class="stat-badge success">+ Live Earnings</span>
            </div>
            <div>
                <div class="stat-label">Total Revenue</div>
                <div class="stat-value" style="color: #800000;">{{ number_format($totalRevenue, 2) }} <span style="font-size: 16px; font-weight: 600; color: #d4af37;">MAD</span></div>
            </div>
            <div class="stat-card-footer">
                <i class="fas fa-shield-halved"></i>
                <span>Verified PayPal payments</span>
            </div>
        </div>

        <!-- Orders Card -->
        <div class="stat-card">
            <div class="stat-card-top">
                <div class="stat-icon primary">
                    <i class="fas fa-bag-shopping"></i>
                </div>
                <span class="stat-badge primary">Orders</span>
            </div>
            <div>
                <div class="stat-label">Total Orders</div>
                <div class="stat-value">{{ $ordersCount }}</div>
            </div>
            <div class="stat-card-footer">
                <i class="fas fa-truck-fast"></i>
                <span>Delivery & takeaway</span>
            </div>
        </div>

        <!-- Reservations Card -->
        <div class="stat-card">
            <div class="stat-card-top">
                <div class="stat-icon success">
                    <i class="fas fa-calendar-check"></i>
                </div>
                <span class="stat-badge success">Tables</span>
            </div>
            <div>
                <div class="stat-label">Reservations</div>
                <div class="stat-value">{{ $reservationsCount }}</div>
            </div>
            <div class="stat-card-footer">
                <i class="fas fa-chair"></i>
                <span>Table bookings in restaurant</span>
            </div>
        </div>

        <!-- Comments Card -->
        <div class="stat-card">
            <div class="stat-card-top">
                <div class="stat-icon info">
                    <i class="fas fa-comments"></i>
                </div>
                <span class="stat-badge info">Reviews</span>
            </div>
            <div>
                <div class="stat-label">Customer Reviews</div>
                <div class="stat-value">{{ $commentsCount ?? 0 }}</div>
            </div>
            <div class="stat-card-footer">
                <i class="fas fa-star" style="color: #f59e0b;"></i>
                <span>Ratings & feedback</span>
            </div>
        </div>
    </div>

    <!-- Recent Activity Grids -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: 24px;">
        
        <!-- Recent Orders Box -->
        <div class="card-box">
            <div class="card-box-header">
                <div class="card-box-title">
                    <i class="fas fa-receipt"></i> Recent Orders
                </div>
                <a href="/admin/orders" class="btn btn-outline btn-sm">
                    View All <i class="fas fa-arrow-right" style="font-size: 11px;"></i>
                </a>
            </div>
            <div class="table-responsive">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($recentOrders as $order)
                        <tr>
                            <td><span class="id-badge">#{{ $order->id }}</span></td>
                            <td>
                                <div class="user-name">{{ $order->client_name ?? 'Guest Customer' }}</div>
                                <div class="user-subtext">{{ $order->email ?? '-' }}</div>
                            </td>
                            <td>
                                <strong style="color: #800000;">{{ number_format($order->total_price, 2) }} MAD</strong>
                            </td>
                            <td style="color: var(--text-muted); font-size: 13px;">
                                {{ $order->created_at ? $order->created_at->diffForHumans() : '-' }}
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="4" style="text-align: center; padding: 30px; color: var(--text-muted);">
                                No recent orders found.
                            </td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Recent Reservations Box -->
        <div class="card-box">
            <div class="card-box-header">
                <div class="card-box-title">
                    <i class="fas fa-calendar-day"></i> Latest Bookings
                </div>
                <a href="/admin/reservations" class="btn btn-outline btn-sm">
                    View All <i class="fas fa-arrow-right" style="font-size: 11px;"></i>
                </a>
            </div>
            <div class="table-responsive">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Guest</th>
                            <th>Date & Time</th>
                            <th>Guests</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($recentReservations as $res)
                        <tr>
                            <td>
                                <div class="user-name">{{ $res->name }}</div>
                                <div class="user-subtext"><i class="fas fa-phone" style="font-size: 11px;"></i> {{ $res->phone }}</div>
                            </td>
                            <td>
                                <div style="font-weight: 600;">{{ \Carbon\Carbon::parse($res->date)->format('M d, Y') }}</div>
                                <div class="user-subtext">{{ $res->time }}</div>
                            </td>
                            <td>
                                <span style="font-weight: 700; color: #800000;">{{ $res->guests }} people</span>
                            </td>
                            <td>
                                @if($res->status == 'confirmed')
                                    <span class="badge badge-success"><span class="badge-dot"></span> Confirmed</span>
                                @elseif($res->status == 'cancelled')
                                    <span class="badge badge-danger"><span class="badge-dot"></span> Cancelled</span>
                                @else
                                    <span class="badge badge-warning"><span class="badge-dot"></span> Pending</span>
                                @endif
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="4" style="text-align: center; padding: 30px; color: var(--text-muted);">
                                No table reservations yet.
                            </td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

    </div>
@endsection
