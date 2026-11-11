<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Authorization - Snack Anass</title>
    
    <!-- Google Fonts & Font Awesome -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        :root {
            --primary: #800000;
            --primary-hover: #600000;
            --accent: #d4af37;
            --dark: #0f172a;
            --bg: #0d0101;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
            background: radial-gradient(circle at 50% 20%, #2a0000 0%, #0d0000 60%, #050000 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: #ffffff;
        }

        .login-card {
            width: 100%;
            max-width: 440px;
            background: rgba(25, 5, 5, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(212, 175, 55, 0.25);
            border-radius: 24px;
            padding: 40px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(128, 0, 0, 0.25);
            position: relative;
            overflow: hidden;
        }

        .login-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #800000, #d4af37, #800000);
        }

        .brand-header {
            text-align: center;
            margin-bottom: 32px;
        }

        .brand-icon {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, #800000 0%, #d4af37 100%);
            border-radius: 18px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #ffffff;
            margin-bottom: 16px;
            box-shadow: 0 10px 25px rgba(212, 175, 55, 0.35);
        }

        .brand-header h1 {
            font-size: 24px;
            font-weight: 800;
            letter-spacing: -0.02em;
            color: #ffffff;
            margin-bottom: 6px;
        }

        .brand-header p {
            font-size: 13px;
            color: #d4af37;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 600;
        }

        .security-badge {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 8px 12px;
            border-radius: 12px;
            font-size: 11px;
            color: #94a3b8;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            margin-bottom: 24px;
        }

        .security-badge i {
            color: #10b981;
        }

        .alert {
            padding: 12px 16px;
            border-radius: 12px;
            font-size: 13px;
            font-weight: 500;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            line-height: 1.4;
        }

        .alert-error {
            background: rgba(239, 68, 68, 0.15);
            border: 1px solid rgba(239, 68, 68, 0.4);
            color: #fca5a5;
        }

        .alert-success {
            background: rgba(16, 185, 129, 0.15);
            border: 1px solid rgba(16, 185, 129, 0.4);
            color: #6ee7b7;
        }

        .alert-info {
            background: rgba(59, 130, 246, 0.15);
            border: 1px solid rgba(59, 130, 246, 0.4);
            color: #93c5fd;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #cbd5e1;
            margin-bottom: 8px;
        }

        .input-wrapper {
            position: relative;
        }

        .input-wrapper i.field-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #64748b;
            font-size: 15px;
        }

        .input-field {
            width: 100%;
            padding: 14px 16px 14px 46px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 12px;
            color: #ffffff;
            font-size: 14px;
            outline: none;
            transition: all 0.25s ease;
        }

        .input-field:focus {
            border-color: #d4af37;
            background: rgba(255, 255, 255, 0.09);
            box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
        }

        .toggle-password {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #64748b;
            cursor: pointer;
            font-size: 14px;
        }

        .toggle-password:hover {
            color: #d4af37;
        }

        .btn-submit {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #800000 0%, #a80000 50%, #d4af37 100%);
            border: none;
            border-radius: 12px;
            color: #ffffff;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            box-shadow: 0 8px 20px rgba(128, 0, 0, 0.4);
            transition: all 0.3s ease;
            margin-top: 26px;
        }

        .btn-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 25px rgba(212, 175, 55, 0.4);
        }

        .card-footer {
            margin-top: 28px;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 20px;
        }

        .card-footer a {
            color: #94a3b8;
            text-decoration: none;
            font-size: 12px;
            font-weight: 500;
            transition: color 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .card-footer a:hover {
            color: #d4af37;
        }
    </style>
</head>
<body>

    <div class="login-card">
        <div class="brand-header">
            <div class="brand-icon">
                <i class="fas fa-shield-halved"></i>
            </div>
            <h1>Snack Anass</h1>
            <p>Authorized Admin Area</p>
        </div>

        <div class="security-badge">
            <i class="fas fa-lock"></i>
            <span>Restricted Access • Administrator Credentials Required</span>
        </div>

        @if(session('error'))
            <div class="alert alert-error">
                <i class="fas fa-triangle-exclamation"></i>
                <span>{{ session('error') }}</span>
            </div>
        @endif

        @if(session('success'))
            <div class="alert alert-success">
                <i class="fas fa-circle-check"></i>
                <span>{{ session('success') }}</span>
            </div>
        @endif

        @if(session('info'))
            <div class="alert alert-info">
                <i class="fas fa-circle-info"></i>
                <span>{{ session('info') }}</span>
            </div>
        @endif

        <form action="{{ route('admin.login.submit') }}" method="POST">
            @csrf

            <div class="form-group">
                <label class="form-label">Admin Email</label>
                <div class="input-wrapper">
                    <i class="fas fa-envelope field-icon"></i>
                    <input 
                        type="email" 
                        name="email" 
                        required 
                        value="{{ old('email') }}" 
                        placeholder="Enter admin email" 
                        class="input-field"
                        autocomplete="email"
                        autofocus
                    >
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Security Password</label>
                <div class="input-wrapper">
                    <i class="fas fa-key field-icon"></i>
                    <input 
                        type="password" 
                        name="password" 
                        id="adminPassword" 
                        required 
                        placeholder="••••••••••••" 
                        class="input-field"
                    >
                    <button type="button" class="toggle-password" onclick="togglePasswordVisibility()">
                        <i class="fas fa-eye" id="toggleIcon"></i>
                    </button>
                </div>
            </div>

            <button type="submit" class="btn-submit">
                <i class="fas fa-fingerprint"></i>
                <span>Authorize & Enter Admin</span>
            </button>
        </form>

        <div class="card-footer">
            <a href="http://localhost:3000">
                <i class="fas fa-arrow-left"></i>
                <span>Back to Restaurant Website</span>
            </a>
        </div>
    </div>

    <script>
        function togglePasswordVisibility() {
            const pass = document.getElementById('adminPassword');
            const icon = document.getElementById('toggleIcon');
            if (pass.type === 'password') {
                pass.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                pass.type = 'password';
                icon.className = 'fas fa-eye';
            }
        }
    </script>
</body>
</html>

