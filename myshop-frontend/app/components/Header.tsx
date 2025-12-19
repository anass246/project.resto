import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar bg-[#800000] text-white p-4 flex justify-between items-center fixed w-full z-50 top-0">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide flex items-center">
          <i className="fas fa-utensils mr-2 text-[#d4af37]" />
          <span className="gradient-text">Snack Anass</span>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-lg">
          <li>
            <a
              href="#home"
              className="nav-link text-white hover:text-[#d4af37] transition duration-300"
              data-nav="home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="nav-link text-white hover:text-[#d4af37] transition duration-300"
              data-nav="features"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#booking"
              className="nav-link text-white hover:text-[#d4af37] transition duration-300"
              data-nav="booking"
            >
              Book a Table
            </a>
          </li>
          <li>
            <a
              href="#rating-comments"
              className="nav-link text-white hover:text-[#d4af37] transition duration-300"
              data-nav="rating-comments"
            >
              Ratings &amp; Comments
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-link text-white hover:text-[#d4af37] transition duration-300"
              data-nav="contact"
            >
              Contact
            </a>
          </li>
          <li>
            <a href="/login" className="btn-primary">
              Login
            </a>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-2xl text-white hover:text-[#d4af37] transition duration-300"
        >
          <i className="fas fa-bars" />
        </button>
      </nav>
      {/* Mobile Menu */}
      <div id="mobile-menu" className="mobile-menu">
        <button
          id="close-menu"
          className="absolute top-6 right-6 text-white hover:text-[#d4af37] text-2xl transition duration-300"
        >
          <i className="fas fa-times" />
        </button>
        <div className="text-center">
          <div className="text-3xl font-bold mb-10 flex items-center justify-center">
            <i className="fas fa-utensils mr-2 text-[#d4af37]" />
            <span className="text-white">Snack Anass</span>
          </div>
          <a href="#home" className="mobile-nav-link" data-nav="home">
            Home
          </a>
          <a href="#features" className="mobile-nav-link" data-nav="features">
            Features
          </a>
          <a href="#booking" className="mobile-nav-link" data-nav="booking">
            Book a Table
          </a>
          <a
            href="#rating-comments"
            className="mobile-nav-link"
            data-nav="rating-comments"
          >
            Ratings &amp; Comments
          </a>
          <a href="#contact" className="mobile-nav-link" data-nav="contact">
            Contact
          </a>
          <a
            href="/login"
            className="mobile-nav-link bg-[#d4af37] text-[#800000] rounded-full px-6 py-2 mt-6 font-bold"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}