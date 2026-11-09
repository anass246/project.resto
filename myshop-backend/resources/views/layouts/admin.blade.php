<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Dashboard') - Snack Anass</title>
    
    <!-- Google Fonts & Font Awesome -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- Admin Stylesheet -->
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>
<body>
    
    <!-- Mobile Sidebar Overlay -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- Sidebar Navigation -->
    <aside class="sidebar" id="adminSidebar">
        <div class="sidebar-header">
            <a href="/admin" class="brand-wrapper">
                <div class="brand-icon">
                    <i class="fas fa-fire-flame-curved"></i>
                </div>
                <div class="brand-info">
                    <h2>Snack Anass</h2>
                    <span>Admin Panel</span>
                </div>
            </a>
        </div>

        <ul class="sidebar-menu">
            <div class="menu-label">Main Menu</div>
            <li>
                <a href="/admin" class="{{ request()->is('admin') ? 'active' : '' }}">
                    <i class="fas fa-chart-pie"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="/admin/orders" class="{{ request()->is('admin/orders*') ? 'active' : '' }}">
                    <i class="fas fa-bag-shopping"></i>
                    <span>Orders</span>
                </a>
            </li>
            <li>
                <a href="/admin/reservations" class="{{ request()->is('admin/reservations*') ? 'active' : '' }}">
                    <i class="fas fa-calendar-check"></i>
                    <span>Reservations</span>
                </a>
            </li>
            <li>
                <a href="/admin/comments" class="{{ request()->is('admin/comments*') ? 'active' : '' }}">
                    <i class="fas fa-comments"></i>
                    <span>Reviews & Feedback</span>
                </a>
            </li>

            <div class="menu-label">Store Links</div>
            <li>
                <a href="http://localhost:3000" target="_blank">
                    <i class="fas fa-arrow-up-right-from-square"></i>
                    <span>View Public Website</span>
                </a>
            </li>
        </ul>

        <div class="sidebar-footer">
            <div class="admin-profile">
                <div class="profile-avatar">
                    <i class="fas fa-user-shield"></i>
                </div>
                <div class="profile-details">
                    <div class="profile-name">Restaurant Manager</div>
                    <div class="profile-status">System Online</div>
                </div>
            </div>
        </div>
    </aside>

    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <!-- Top Navbar -->
        <header class="top-navbar">
            <div class="top-left">
                <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="page-breadcrumb">
                    <a href="/admin"><i class="fas fa-home"></i></a>
                    <i class="fas fa-chevron-right" style="font-size: 10px;"></i>
                    <span>@yield('breadcrumb', 'Dashboard')</span>
                </div>
            </div>

            <div class="top-right">
                <div class="today-pill">
                    <i class="far fa-calendar-alt"></i>
                    <span>{{ now()->format('l, d M Y') }}</span>
                </div>
                <a href="http://localhost:3000" target="_blank" class="btn-view-site">
                    <i class="fas fa-globe"></i>
                    <span>Live Store</span>
                </a>
            </div>
        </header>

        <!-- Main Page Content -->
        <main class="main-content">
            @yield('content')
        </main>
    </div>

    <!-- Mobile Menu Script -->
    <script>
        const menuBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.getElementById('adminSidebar');
        const overlay = document.getElementById('sidebarOverlay');

        if(menuBtn && sidebar && overlay) {
            menuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('active');
            });

            overlay.addEventListener('click', () => {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            });
        }
    </script>
</body>
</html>
