@extends('layouts.admin')

@section('title', 'Reservations Management')
@section('breadcrumb', 'Reservations')

@section('content')
    <div class="page-header">
        <div>
            <h1><i class="fas fa-calendar-check"></i> Reservations Management</h1>
            <p class="subtitle">Review, confirm, and manage customer table bookings.</p>
        </div>
        <div style="display: flex; gap: 10px;">
            <button id="export-btn" class="btn btn-primary">
                <i class="fas fa-file-export"></i> Export Data
            </button>
        </div>
    </div>

    <!-- Metric Cards -->
    <div class="dashboard-cards">
        <div class="stat-card">
            <div class="stat-card-top">
                <div class="stat-icon primary">
                    <i class="fas fa-calendar-days"></i>
                </div>
                <span class="stat-badge primary">Total</span>
            </div>
            <div>
                <div class="stat-label">Total Reservations</div>
                <div class="stat-value">{{ isset($reservations) ? count($reservations) : 0 }}</div>
            </div>
            <div class="stat-card-footer">
                <i class="fas fa-database"></i>
                <span>All time recorded bookings</span>
            </div>
        </div>

        <div class="stat-card">
            <div class="stat-card-top">
                <div class="stat-icon success">
                    <i class="fas fa-circle-check"></i>
                </div>
                <span class="stat-badge success">Active</span>
            </div>
            <div>
                <div class="stat-label">Confirmed Bookings</div>
                <div class="stat-value" style="color: var(--success);">
                    {{ isset($reservations) ? $reservations->where('status', 'confirmed')->count() : 0 }}
                </div>
            </div>
            <div class="stat-card-footer">
                <i class="fas fa-check-double"></i>
                <span>Ready for dining</span>
            </div>
        </div>

        <div class="stat-card">
            <div class="stat-card-top">
                <div class="stat-icon accent">
                    <i class="fas fa-bell"></i>
                </div>
                <span class="stat-badge success">Today</span>
            </div>
            <div>
                <div class="stat-label">Today's Schedule</div>
                <div class="stat-value" style="color: var(--warning);">
                    {{ isset($reservations) ? $reservations->where('date', today()->format('Y-m-d'))->count() : 0 }}
                </div>
            </div>
            <div class="stat-card-footer">
                <i class="far fa-clock"></i>
                <span>Tables booked for today</span>
            </div>
        </div>
    </div>

    <!-- Main Table Container -->
    <div class="card-box">
        <!-- Filters Bar -->
        <div class="filters-bar">
            <div class="filters-group">
                <input type="text" id="resSearchInput" class="input-control" placeholder="Search customer, phone..." style="min-width: 240px;">
                <input type="date" id="filter-date" class="input-control">
                <select id="filter-status" class="select-control">
                    <option value="all">All Statuses</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </div>
            <div style="font-size: 13px; color: var(--text-muted); font-weight: 500;">
                Showing <strong>{{ isset($reservations) ? count($reservations) : 0 }}</strong> table bookings
            </div>
        </div>

        <div class="table-responsive">
            <table class="custom-table" id="reservationsTable">
                <thead>
                    <tr>
                        <th style="width: 70px;">ID</th>
                        <th>Customer</th>
                        <th>Phone & Notes</th>
                        <th>Booking Date</th>
                        <th>Time</th>
                        <th>Guests</th>
                        <th>Status</th>
                        <th style="text-align: right;">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($reservations) && count($reservations) > 0)
                        @foreach($reservations as $reservation)
                        <tr>
                            <td>
                                <span class="id-badge">#{{ $reservation->id }}</span>
                            </td>
                            <td>
                                <div class="user-cell">
                                    <div class="user-avatar">
                                        {{ strtoupper(substr($reservation->name, 0, 2)) }}
                                    </div>
                                    <div>
                                        <div class="user-name">{{ $reservation->name }}</div>
                                        <div class="user-subtext">{{ $reservation->email ?? 'No email' }}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style="display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--dark-muted);">
                                    <i class="fas fa-phone" style="color: var(--primary); font-size: 12px;"></i>
                                    {{ $reservation->phone }}
                                </div>
                                @if(!empty($reservation->special_requests))
                                    <div class="user-subtext" style="margin-top: 4px; max-width: 240px; color: #b45309;">
                                        <i class="fas fa-comment-dots"></i> {{ Str::limit($reservation->special_requests, 35) }}
                                    </div>
                                @endif
                            </td>
                            <td>
                                <div style="font-weight: 600; color: var(--dark);">
                                    {{ \Carbon\Carbon::parse($reservation->date)->format('M d, Y') }}
                                </div>
                                <div class="user-subtext">
                                    {{ \Carbon\Carbon::parse($reservation->date)->format('l') }}
                                </div>
                            </td>
                            <td>
                                <span style="display: inline-flex; align-items: center; gap: 5px; font-weight: 600; font-size: 13px; background: var(--bg-body); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                                    <i class="far fa-clock" style="color: var(--primary);"></i>
                                    {{ $reservation->time }}
                                </span>
                            </td>
                            <td>
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 50%; background: #e0f2fe; color: #0284c7; font-weight: 700; font-size: 14px;">
                                    {{ $reservation->guests }}
                                </span>
                            </td>
                            <td>
                                @if($reservation->status == 'confirmed')
                                    <span class="badge badge-success"><span class="badge-dot"></span> Confirmed</span>
                                @elseif($reservation->status == 'cancelled')
                                    <span class="badge badge-danger"><span class="badge-dot"></span> Cancelled</span>
                                @else
                                    <span class="badge badge-warning"><span class="badge-dot"></span> Pending</span>
                                @endif
                            </td>
                            <td style="text-align: right;">
                                <div style="display: inline-flex; gap: 6px;">
                                    <button class="action-btn view view-btn" title="View details" data-id="{{ $reservation->id }}">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                    <button class="action-btn edit edit-btn" title="Edit booking" data-id="{{ $reservation->id }}">
                                        <i class="fas fa-pen-to-square"></i>
                                    </button>
                                    <button class="action-btn delete delete-btn" title="Delete booking" data-id="{{ $reservation->id }}">
                                        <i class="fas fa-trash-can"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="8">
                                <div class="empty-state">
                                    <div class="empty-state-icon">
                                        <i class="far fa-calendar-xmark"></i>
                                    </div>
                                    <h3>No Table Reservations Yet</h3>
                                    <p>When customers reserve a table from the website, their details and requested dates will show up here.</p>
                                </div>
                            </td>
                        </tr>
                    @endif
                </tbody>
            </table>
        </div>

        @if(isset($reservations) && count($reservations) > 0)
        <div class="table-footer">
            <div>
                Showing <strong>{{ count($reservations) }}</strong> total reservations
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-outline btn-sm" disabled><i class="fas fa-chevron-left"></i> Previous</button>
                <button class="btn btn-outline btn-sm" disabled>Next <i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
        @endif
    </div>

    <!-- Quick Javascript for interactive table features -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Search filter
            const searchInput = document.getElementById('resSearchInput');
            if (searchInput) {
                searchInput.addEventListener('keyup', function() {
                    const query = this.value.toLowerCase();
                    const rows = document.querySelectorAll('#reservationsTable tbody tr');
                    rows.forEach(row => {
                        row.style.display = row.innerText.toLowerCase().includes(query) ? '' : 'none';
                    });
                });
            }

            // Export button demo
            const exportBtn = document.getElementById('export-btn');
            if(exportBtn) {
                exportBtn.addEventListener('click', () => {
                    alert('Exporting reservations table to CSV/Excel...');
                });
            }

            // Action Buttons
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    alert('Viewing reservation #' + this.dataset.id);
                });
            });

            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    alert('Edit reservation #' + this.dataset.id);
                });
            });

            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    if (confirm('Are you sure you want to delete reservation #' + this.dataset.id + '?')) {
                        alert('Reservation #' + this.dataset.id + ' deleted.');
                    }
                });
            });
        });
    </script>
@endsection
