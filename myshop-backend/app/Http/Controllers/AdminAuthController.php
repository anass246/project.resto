<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminAuthController extends Controller
{
    /**
     * Show the Admin Login view.
     */
    public function showLogin()
    {
        // If already authorized on admin guard, jump to admin dashboard
        if (Auth::guard('admin')->check() || session('admin_authenticated') === true) {
            return redirect()->route('admin.dashboard');
        }

        return view('admin.login');
    }

    /**
     * Handle Admin authentication.
     * Authenticates EXCLUSIVELY against the separate `admins` table.
     * Regular clients in the `users` table can NEVER log in here.
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $inputEmail = strtolower(trim($request->email));
        $inputPassword = $request->password;

        // 1. Query EXCLUSIVELY the separate `admins` table (Not the `users` table!)
        $admin = Admin::where('email', $inputEmail)->first();

        // 2. If not found in `admins` table or password does not match
        if (!$admin || !Hash::check($inputPassword, $admin->password)) {
            return back()->with('error', '⛔ Access Denied: Invalid administrator credentials or unauthorized account.')->withInput();
        }

        // 3. Log in using the dedicated 'admin' guard
        Auth::guard('admin')->login($admin);

        session([
            'admin_authenticated' => true,
            'admin_id' => $admin->id,
            'admin_user' => $admin->name,
            'admin_email' => $admin->email,
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Welcome back, ' . $admin->name . '! Access granted.');
    }

    /**
     * Logout administrator.
     */
    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
        $request->session()->forget(['admin_authenticated', 'admin_id', 'admin_user', 'admin_email']);
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login')->with('info', 'You have been logged out securely.');
    }
}
