<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    
    <div class="sidebar">
        <h2>🔥 Snack Anass</h2>
        <ul>
            <li><a href="/admin"><i class="fas fa-home"></i> Dashboard</a></li>
            <li><a href="/admin/orders"><i class="fas fa-shopping-cart"></i> Orders</a></li>
            <li><a href="/admin/reservations"><i class="fas fa-calendar-check"></i> Reservations</a></li>
        </ul>
    </div>

    <div class="main-content">
        @yield('content')
    </div>

</body>
</html>