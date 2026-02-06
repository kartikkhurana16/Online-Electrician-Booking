import React,{useState} from "react";
import "./Header.css";
const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="nav-link"
  >
    {children}
  </a>
);

// Main Header component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Easy configuration - just add more links here!
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Booking', href: '/booking' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
    // Add more links easily:
    // { label: 'Services', href: '/services' },
    // { label: 'Gallery', href: '/gallery' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <a href="/">
              <img src="/src/assets/logo.jpg" alt="Logo" className="logo-image" />
              {/* Or use text logo: */}
              {/* <span className="logo-text">YourBrand</span> */}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <NavLink 
              key={index} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;