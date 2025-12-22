<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Comments</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>

    <div class="sidebar">
        <h2>Restaurant Admin</h2>
        <ul>
            <li><a href="/admin/reservations"><i class="fas fa-calendar-check"></i> Reservations</a></li>
            
            <li><a href="/admin/comments" class="active"><i class="fas fa-comments"></i> Special Requests</a></li>
            
            <li><a href="#"><i class="fas fa-users"></i> Customers</a></li>
            <li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
        </ul>
    </div>

    <div class="main-content">
        <header>
            <h1>Client Reviews & Comments</h1>
            <div class="user-info">Admin User</div>
        </header>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Message</th>
                        <th>Rating</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($comments as $comment)
                    <tr>
                        <td>#{{ $comment->id }}</td>
                        <td class="font-bold">{{ $comment->name }}</td>
                        
                        <td>{{ Str::limit($comment->message, 50) }}</td>
                        
                        <td style="color: #f59e0b;">
                            {{ $comment->rating }} <i class="fas fa-star"></i>
                        </td>
                        
                        <td>{{ $comment->created_at->format('Y-m-d') }}</td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="5" style="text-align: center; padding: 20px;">No comments found.</td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

</body>
</html>