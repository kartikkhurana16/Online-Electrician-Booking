import React from 'react'
import "./Footer.css"

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    aria-label={label}
  >
    {icon}
  </a>
);

// Reusable Footer Link component
const FooterLink = ({ href, children }) => (
  <a href={href} className="footer-link">
    {children}
  </a>
);

const Footer = () => {
  // Easy configuration - update your links here!
  const socialLinks = [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/9650210750', // Replace with your number
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kartik-khurana-563a61320/', // Replace with your LinkedIn
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/kartikkhurana_16?igsh=MWdmcjJpcDN3b2c4dg%3D%3D&utm_source=qr', // Replace with your Instagram
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ];

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Booking', href: '/booking' },
  ];

  return (
    <footer className="footer">
      {/* First Footer - Get Connected */}
      <div className="footer-connect">
        <div className="container">
          <h3>Get connected with us</h3>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Second Footer - Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Logo and About */}
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/src/assets/logo.jpg" alt="Logo" className="logo-image" />
                {/* Or use text logo: */}
                {/* <span className="logo-text">YourBrand</span> */}
              </div>
              <p className="footer-about">
                Your trusted platform for seamless booking experiences. 
                We make reservations easy, fast, and reliable for everyone.
                {/* Replace with your actual description */}
              </p>
            </div>

            {/* Navigate Links */}
            <div className="footer-section">
              <h4>Navigate</h4>
              <ul className="footer-links">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="footer-section">
              <h4>Connect</h4>
              <ul className="footer-links">
                <li>
                  <FooterLink href="/contact">Contact</FooterLink>
                </li>
              </ul>
            </div>

            {/* Admin */}
            <div className="footer-section">
              <h4>Admin</h4>
              <ul className="footer-links">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/kartik-khurana-563a61320/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:kartikkhurana136@gmail.com" 
                    className="footer-link"
                  >
                    kartikkhurana136@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Third Footer - Disclaimer */}
      <div className="footer-disclaimer">
        <div className="container">
          <p>
            <strong>Disclaimer:</strong> All information provided on this platform 
            is for general informational purposes only. We make no representations 
            or warranties of any kind, express or implied, about the completeness, 
            accuracy, reliability, or availability of the services. Any reliance 
            you place on such information is strictly at your own risk.
            {/* Replace with your actual disclaimer */}
          </p>
          
        </div>
      </div>

    </footer>
  );
};

export default Footer;
