"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    setMounted(true);
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('auth_token');
        const user = localStorage.getItem('user');
        if (token && user) {
          setCurrentUser(JSON.parse(user));
        } else {
          setCurrentUser(null);
        }
      } catch (e) {
        setCurrentUser(null);
      }
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleMenuClick = (e: React.MouseEvent) => {
    closeMenu();
    try {
      const token = localStorage.getItem('auth_token');
      const user = localStorage.getItem('user');
      if (!token || !user) {
        e.preventDefault();
        router.push('/login?redirect=/menu&reason=auth_required');
      }
    } catch {
      e.preventDefault();
      router.push('/login?redirect=/menu&reason=auth_required');
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
    } catch (e) {
      console.error(e);
    }
    setCurrentUser(null);
    closeMenu();
    router.push('/login');
  };

  const navItems = [
    { label: 'Home', href: '/#home', isMenu: false },
    { label: 'Menu', href: '/menu', isMenu: true },
    { label: 'Features', href: '/#features', isMenu: false },
    { label: 'Book a Table', href: '/#booking', isMenu: false },
    { label: 'Reviews', href: '/#rating-comments', isMenu: false },
    { label: 'Contact', href: '/#contact', isMenu: false },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#800000] text-white p-4 flex justify-between items-center fixed w-full z-50 top-0 shadow-lg">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide flex items-center">
          <i className="fas fa-utensils mr-2 text-[#d4af37]" />
          <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-amber-200">
            Snack Anass
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-7 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={item.isMenu ? handleMenuClick : undefined}
                className="hover:text-[#d4af37] transition duration-300 relative group flex items-center gap-1.5"
              >
                <span>{item.label}</span>
                {item.isMenu && mounted && !currentUser && (
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded-full border border-amber-400/30 flex items-center gap-1" title="Sign in required">
                    <i className="fas fa-lock text-[8px]"></i>
                  </span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          {/* Auth Action */}
          <li>
            {mounted && currentUser ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-black/25 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-200">
                  <i className="fas fa-user-circle text-amber-300 text-sm"></i>
                  <span className="max-w-[110px] truncate">{currentUser.name || 'Member'}</span>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="bg-red-900/80 hover:bg-red-800 text-amber-200 border border-red-700/60 px-3.5 py-1.5 rounded-full text-xs font-bold transition duration-300 shadow flex items-center gap-1.5"
                  title="Sign Out"
                >
                  <i className="fas fa-sign-out-alt text-xs"></i>
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="bg-[#d4af37] text-[#800000] px-5 py-2 rounded-full font-bold hover:bg-white hover:text-[#800000] transition duration-300 shadow-md text-sm"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-transparent border border-[#d4af37] text-[#d4af37] px-4 py-2 rounded-full font-bold hover:bg-[#d4af37] hover:text-[#800000] transition duration-300 text-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-2xl text-white hover:text-[#d4af37] transition duration-300 focus:outline-none"
          aria-label="Open mobile menu"
        >
          <i className="fas fa-bars" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#800000]/95 backdrop-blur-sm z-[60] flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-white hover:text-[#d4af37] text-3xl transition duration-300"
          aria-label="Close mobile menu"
        >
          <i className="fas fa-times" />
        </button>

        <div className="text-center space-y-6 flex flex-col items-center max-w-sm px-4">
          <div className="text-4xl font-bold mb-4 flex items-center justify-center text-white">
            <i className="fas fa-utensils mr-3 text-[#d4af37]" />
            Snack Anass
          </div>

          {/* User state badge in mobile */}
          {mounted && currentUser && (
            <div className="bg-black/30 border border-amber-400/40 px-5 py-2 rounded-full text-sm font-semibold text-amber-200 flex items-center gap-2">
              <i className="fas fa-user-check text-amber-300"></i>
              <span>Signed in as <strong className="text-white">{currentUser.name}</strong></span>
            </div>
          )}

          {/* Mobile Links */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={item.isMenu ? handleMenuClick : closeMenu}
              className="text-2xl text-white hover:text-[#d4af37] font-medium transition duration-300 flex items-center gap-2"
            >
              <span>{item.label}</span>
              {item.isMenu && mounted && !currentUser && (
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30">
                  <i className="fas fa-lock text-[10px] mr-1"></i>Sign in
                </span>
              )}
            </Link>
          ))}

          {/* Mobile Auth Actions */}
          <div className="pt-4 flex flex-col gap-3 w-full">
            {mounted && currentUser ? (
              <button
                type="button"
                onClick={handleLogout}
                className="w-full bg-red-900/80 hover:bg-red-800 text-amber-200 border border-red-700 px-8 py-3 rounded-full text-lg font-bold transition duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <i className="fas fa-sign-out-alt"></i>
                <span>Sign Out</span>
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="bg-[#d4af37] text-[#800000] px-10 py-3 rounded-full text-lg font-bold hover:bg-white transition duration-300 shadow-lg inline-block text-center"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] px-10 py-3 rounded-full text-lg font-bold hover:bg-[#d4af37] hover:text-[#800000] transition duration-300 inline-block text-center"
                >
                  Register Account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
