@extends('layouts.admin')

@section('title', 'Customer Reviews')
@section('breadcrumb', 'Reviews & Feedback')

@section('content')
    <div class="page-header">
        <div>
            <h1><i class="fas fa-comments"></i> Customer Reviews & Feedback</h1>
            <p class="subtitle">Monitor ratings, testimonials, and comments left by restaurant customers.</p>
        </div>
    </div>

    <div class="card-box">
        <div class="filters-bar">
            <div class="filters-group">
                <input type="text" id="commentSearchInput" class="input-control" placeholder="Search by customer or message..." style="min-width: 260px;">
                <select id="ratingFilter" class="select-control">
                    <option value="all">All Star Ratings</option>
                    <option value="5">5 Stars ⭐⭐⭐⭐⭐</option>
                    <option value="4">4 Stars ⭐⭐⭐⭐</option>
                    <option value="3">3 Stars ⭐⭐⭐</option>
                </select>
            </div>
            <div style="font-size: 13px; color: var(--text-muted); font-weight: 500;">
                Showing <strong>{{ count($comments) }}</strong> customer reviews
            </div>
        </div>

        <div class="table-responsive">
            <table class="custom-table" id="commentsTable">
                <thead>
                    <tr>
                        <th style="width: 70px;">ID</th>
                        <th>Customer</th>
                        <th>Rating</th>
                        <th style="width: 40%;">Review Content</th>
                        <th>Status</th>
                        <th>Submitted At</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($comments as $comment)
                    <tr>
                        <td>
                            <span class="id-badge">#{{ $comment->id }}</span>
                        </td>
                        <td>
                            <div class="user-cell">
                                <div class="user-avatar" style="background: #fef3c7; color: #b45309;">
                                    {{ strtoupper(substr($comment->name, 0, 2)) }}
                                </div>
                                <div>
                                    <div class="user-name">{{ $comment->name }}</div>
                                    <div class="user-subtext">{{ $comment->email ?? 'Guest Reviewer' }}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="display: flex; gap: 3px; color: #f59e0b; font-size: 13px;">
                                @for($i = 1; $i <= 5; $i++)
                                    @if($i <= $comment->rating)
                                        <i class="fas fa-star"></i>
                                    @else
                                        <i class="far fa-star" style="color: #cbd5e1;"></i>
                                    @endif
                                @endfor
                            </div>
                            <span style="font-size: 11px; font-weight: 700; color: #b45309; margin-top: 3px; display: inline-block;">
                                {{ $comment->rating }}.0 / 5.0
                            </span>
                        </td>
                        <td>
                            <p style="color: var(--dark-muted); line-height: 1.5; font-size: 14px;">
                                "{{ $comment->message }}"
                            </p>
                        </td>
                        <td>
                            @if($comment->status == 'approved')
                                <span class="badge badge-success"><span class="badge-dot"></span> Approved</span>
                            @else
                                <span class="badge badge-warning"><span class="badge-dot"></span> Pending Approval</span>
                            @endif
                        </td>
                        <td>
                            <div style="font-size: 13px; font-weight: 600; color: var(--dark-muted);">
                                {{ $comment->created_at ? $comment->created_at->format('M d, Y') : '-' }}
                            </div>
                            <div class="user-subtext">
                                {{ $comment->created_at ? $comment->created_at->diffForHumans() : '' }}
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="6">
                            <div class="empty-state">
                                <div class="empty-state-icon">
                                    <i class="far fa-message"></i>
                                </div>
                                <h3>No Customer Reviews Yet</h3>
                                <p>Customer feedback left through the website comments form will appear here for review and approval.</p>
                            </div>
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        @if(count($comments) > 0)
        <div class="table-footer">
            <div>
                Total <strong>{{ count($comments) }}</strong> customer testimonials
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-outline btn-sm" disabled><i class="fas fa-chevron-left"></i> Previous</button>
                <button class="btn btn-outline btn-sm" disabled>Next <i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
        @endif
    </div>

    <script>
        const commentSearch = document.getElementById('commentSearchInput');
        if (commentSearch) {
            commentSearch.addEventListener('keyup', function() {
                const query = this.value.toLowerCase();
                document.querySelectorAll('#commentsTable tbody tr').forEach(row => {
                    row.style.display = row.innerText.toLowerCase().includes(query) ? '' : 'none';
                });
            });
        }
    </script>
@endsection
