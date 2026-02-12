import React,{useState,useRef} from "react";
import "./Header.css";
import { Link } from 'react-router-dom'
import { useAuth } from "../../Utils/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg"


const NavLink = ({ href, children, onClick }) => (
  <Link to={href} onClick={onClick} className="nav-link">
    {children}
  </Link>
);

// Main Header component
const Header = () => {
  const navigate = useNavigate();
const {user,admin, logoutUser}=useAuth();
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Booking', href: '/booking' },
   user &&
      (admin
        ? { label: 'Admin Dashboard', href: '/adminDashboard' }
        : { label: 'Dashboard', href: '/uDashboard' }
      ),
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ].filter(Boolean);

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
              <img src={logo} alt="Logo" className="logo-image" />
             </a>
          </div>

            <nav className="nav-desktop">
              {navLinks.map((link, index) => (
               <NavLink className="nav-link" key={index} href={link.href}>
                {link.label}
              </NavLink>
             ))}
            {!user && (
              <NavLink href="/login"></NavLink>
              )}
            {user && (
              <button className="logout-btn" onClick={logoutUser}>
                Logout
              </button>
            )}
           
          </nav>

           {/* Mobile Menu Toggle  */}
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

          {!user && (
            <NavLink href="/login" onClick={() => setIsMobileMenuOpen(false)}></NavLink>
          )}
          
          {user && (
            <button
              className="logout-btn mobile-logout"
              onClick={() => {
                logoutUser();
                setIsMobileMenuOpen(false);
              }}
            >
              Logout
            </button>
          )}
        </nav>

      </header>
    </>
  );
};

export default Header;