<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     * Strict check: ONLY users authenticated with the 'admin' guard from the 'admins' table are allowed.
     * Regular clients from the 'users' table are strictly denied.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // 1. Check if authenticated through the 'admin' guard
        if (Auth::guard('admin')->check()) {
            return $next($request);
        }

        // 2. Check session fallback from 'admins' table
        if ($request->session()->get('admin_authenticated') === true && $request->session()->has('admin_email')) {
            $adminEmail = $request->session()->get('admin_email');
            $admin = \App\Models\Admin::where('email', $adminEmail)->first();
            if ($admin) {
                Auth::guard('admin')->login($admin);
                return $next($request);
            }
        }

        // If not authorized as admin, clear any session and reject
        $request->session()->forget(['admin_authenticated', 'admin_id', 'admin_user', 'admin_email']);

        if ($request->expectsJson()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized. Administrator access required.'
            ], 403);
        }

        return redirect()->route('admin.login')->with('error', '🔒 Access Restricted! You must log in with authorized administrator credentials to enter this area.');
    }
}
