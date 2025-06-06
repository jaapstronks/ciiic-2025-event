import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HelmetProvider>
      <div className="layout">
        <header className="header">
          <div className="container header-content">
            <Link to="/" className="nav-link">
              <div className="logo-container">
                <img
                  src="/logo_ciiic_zwart.svg"
                  alt="CIIIC"
                  className="logo"
                />
                <h1 className="text-2xl font-bold">
                  Annual Meet-up 2025
                </h1>
              </div>
            </Link>
            <button
              className="hamburger-button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`hamburger-line ${
                  isMenuOpen ? 'open' : ''
                }`}
              ></span>
              <span
                className={`hamburger-line ${
                  isMenuOpen ? 'open' : ''
                }`}
              ></span>
              <span
                className={`hamburger-line ${
                  isMenuOpen ? 'open' : ''
                }`}
              ></span>
            </button>
            <nav
              className={`nav ${isMenuOpen ? 'open' : ''}`}
            >
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/sessions"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Sessions
              </Link>
              <Link
                to="/videos"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Videos
              </Link>
              <Link
                to="/gallery"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </nav>
          </div>
        </header>

        <main className="main">
          <div className="container">{children}</div>
        </main>

        <footer className="footer">
          <div className="container">
            <p className="text-center text-sm text-gray-500">
              © 2025 CIIIC Annual Meet-up. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default Layout;
