<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Reservations</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>

    <div class="sidebar">
<h2>Restaurant Admin</h2>
        <ul>
            <li><a href="/admin/reservations" class="active"><i class="fas fa-calendar-check"></i> Reservations</a></li>
            
            <li><a href="/admin/comments"><i class="fas fa-comments"></i> Special Requests</a></li>
            
            <li><a href="#"><i class="fas fa-users"></i> Customers</a></li>
            <li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
        </ul>
    </div>

    <div class="main-content">
        <header>
            <h1>Reservation Requests</h1>
            <div class="user-info">Admin User</div>
        </header>

        <div class="table-container">
            <table>
             <thead>
                <tr>
                 <th>ID</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Date</th>
        <th>Time</th>
        <th>Guests</th>
        
        <th>Special Request</th>
        
        <th>Status</th>
        <th>Date Created</th>
    </tr>
</thead>
                <tbody>
@foreach($reservations as $reservation)
    <tr>
        <td>#{{ $reservation->id }}</td>
        <td class="font-bold">{{ $reservation->name }}</td>
        <td>{{ $reservation->phone }}</td>
        <td>{{ $reservation->date }}</td>
        <td><span class="badge-time">{{ $reservation->time }}</span></td>
        <td>{{ $reservation->guests }} People</td>

        <td style="color: #d97706; font-style: italic; max-width: 200px;">
            {{ $reservation->special_requests ?? 'None' }}
        </td>

        <td>
            <span class="status {{ $reservation->status == 'pending' ? 'pending' : 'confirmed' }}">
                {{ ucfirst($reservation->status) }}
            </span>
        </td>
        <td>{{ $reservation->created_at->format('Y-m-d H:i') }}</td>
    </tr>
    @endforeach
                </tbody>
            </table>
        </div>
    </div>

</body>
</html>