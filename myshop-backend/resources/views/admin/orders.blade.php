@extends('layouts.admin')

@section('title', 'Orders Management')
@section('breadcrumb', 'Orders')

@section('content')
    <div class="page-header">
        <div>
            <h1><i class="fas fa-bag-shopping"></i> Orders Management</h1>
            <p class="subtitle">Track customer orders, PayPal payments, and items to prepare.</p>
        </div>
        <div style="display: flex; gap: 10px;">
            <button class="btn btn-outline" onclick="window.print()">
                <i class="fas fa-print"></i> Print List
            </button>
        </div>
    </div>

    <!-- Main Orders Card Box -->
    <div class="card-box">
        <!-- Search & Filter Bar -->
        <div class="filters-bar">
            <div class="filters-group">
                <input type="text" id="orderSearchInput" class="input-control" placeholder="Search customer or ID..." style="min-width: 250px;">
                <select id="orderStatusFilter" class="select-control">
                    <option value="all">All Payment Statuses</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
            <div style="font-size: 13px; color: var(--text-muted); font-weight: 500;">
                Showing <strong>{{ count($orders) }}</strong> total orders
            </div>
        </div>

        <div class="table-responsive">
            <table class="custom-table" id="ordersTable">
                <thead>
                    <tr>
                        <th style="width: 80px;">Order</th>
                        <th>Customer</th>
                        <th>Ordered Dishes</th>
                        <th>Total Amount</th>
                        <th>Payment Status</th>
                        <th>Transaction ID</th>
                        <th>Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($orders as $order)
                    <tr>
                        <td>
                            <span class="id-badge">#{{ $order->id }}</span>
                        </td>
                        <td>
                            <div class="user-cell">
                                <div class="user-avatar">
                                    {{ strtoupper(substr($order->client_name ?? 'C', 0, 2)) }}
                                </div>
                                <div>
                                    <div class="user-name">{{ $order->client_name ?? 'Guest Client' }}</div>
                                    <div class="user-subtext">{{ $order->email ?? 'No email provided' }}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            @if(is_array($order->items) && count($order->items) > 0)
                                <div style="display: flex; flex-direction: column; gap: 4px;">
                                    @foreach($order->items as $item)
                                        <div style="font-size: 13px; color: var(--dark-muted);">
                                            <span style="color: var(--accent); font-weight: 700; background: var(--accent-light); padding: 2px 6px; border-radius: 4px; font-size: 11px;">
                                                {{ $item['quantity'] ?? 1 }}x
                                            </span>
                                            <span style="font-weight: 500;">{{ $item['name'] ?? 'Item' }}</span>
                                        </div>
                                    @endforeach
                                </div>
                            @else
                                <span style="color: var(--text-light); font-size: 13px;">No item details</span>
                            @endif
                        </td>
                        <td>
                            <div style="font-size: 16px; font-weight: 800; color: #800000;">
                                ${{ number_format($order->total_price, 2) }}
                            </div>
                        </td>
                        <td>
                            <span class="badge badge-success">
                                <span class="badge-dot"></span> {{ ucfirst($order->status ?? 'Paid') }}
                            </span>
                        </td>
                        <td>
                            @if($order->transaction_id)
                                <code style="background: var(--bg-body); padding: 4px 8px; border-radius: 4px; font-size: 11px; border: 1px solid var(--border-color); color: var(--dark-muted);">
                                    {{ Str::limit($order->transaction_id, 14) }}
                                </code>
                            @else
                                <span style="color: var(--text-light); font-size: 12px;">Cash / Standard</span>
                            @endif
                        </td>
                        <td>
                            <div style="font-size: 13px; font-weight: 600; color: var(--dark-muted);">
                                {{ $order->created_at ? $order->created_at->format('M d, Y') : '-' }}
                            </div>
                            <div class="user-subtext">
                                {{ $order->created_at ? $order->created_at->format('H:i A') : '' }}
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="7">
                            <div class="empty-state">
                                <div class="empty-state-icon">
                                    <i class="fas fa-bag-shopping"></i>
                                </div>
                                <h3>No Orders Placed Yet</h3>
                                <p>Customer online food orders will automatically appear here once checked out via the website.</p>
                            </div>
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        @if(count($orders) > 0)
        <div class="table-footer">
            <div>
                Showing all <strong>{{ count($orders) }}</strong> records
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-outline btn-sm" disabled><i class="fas fa-chevron-left"></i> Previous</button>
                <button class="btn btn-outline btn-sm" disabled>Next <i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
        @endif
    </div>

    <script>
        // Live client-side search
        const searchInput = document.getElementById('orderSearchInput');
        if (searchInput) {
            searchInput.addEventListener('keyup', function() {
                const query = this.value.toLowerCase();
                const rows = document.querySelectorAll('#ordersTable tbody tr');
                rows.forEach(row => {
                    const text = row.innerText.toLowerCase();
                    row.style.display = text.includes(query) ? '' : 'none';
                });
            });
        }
    </script>
@endsection
