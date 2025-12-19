"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Hna 9adina links b ydidna bach ntakdo anna IDs s7a7 (b7al #booking)
  const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'Features', href: '/#features' },
    { label: 'Book a Table', href: '/#booking' }, // Hada howa lmohim
    { label: 'Ratings & Comments', href: '/#rating-comments' },
    { label: 'Contact', href: '/#contact' },
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
        <ul className="hidden md:flex items-center space-x-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-[#d4af37] transition duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="bg-[#d4af37] text-[#800000] px-6 py-2 rounded-full font-bold hover:bg-white hover:text-[#800000] transition duration-300 shadow-md"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-2xl text-white hover:text-[#d4af37] transition duration-300 focus:outline-none"
        >
          <i className="fas fa-bars" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#800000]/95 backdrop-blur-sm z-[60] flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-white hover:text-[#d4af37] text-3xl transition duration-300"
        >
          <i className="fas fa-times" />
        </button>

        <div className="text-center space-y-8 flex flex-col items-center">
          <div className="text-4xl font-bold mb-8 flex items-center justify-center text-white">
            <i className="fas fa-utensils mr-3 text-[#d4af37]" />
            Snack Anass
          </div>

          {/* Mobile Links using the same array */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="text-2xl text-white hover:text-[#d4af37] font-medium transition duration-300"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={closeMenu}
            className="mt-8 bg-[#d4af37] text-[#800000] px-10 py-3 rounded-full text-xl font-bold hover:bg-white transition duration-300 shadow-lg inline-block"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}