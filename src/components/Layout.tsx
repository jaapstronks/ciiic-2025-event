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
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <p
              className="text-center text-sm text-gray-500"
              style={{ margin: 0 }}
            >
              © 2025 CIIIC.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <a
                href="https://www.ciiic.nl/en/newsletter"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'rgba(224, 247, 250, 0.12)',
                  color: '#e0f7fa',
                  borderRadius: '999px',
                  padding: '0.5em 1.5em',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  letterSpacing: '0.01em',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseOver={(e) => (
                  (e.currentTarget.style.background =
                    '#e0f7fa'),
                  (e.currentTarget.style.color = '#284b46')
                )}
                onMouseOut={(e) => (
                  (e.currentTarget.style.background =
                    'rgba(224, 247, 250, 0.12)'),
                  (e.currentTarget.style.color = '#e0f7fa')
                )}
              >
                Subscribe to our newsletter
              </a>
              <a
                href="https://www.linkedin.com/showcase/ciiic-nl/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(224, 247, 250, 0.12)',
                  color: '#e0f7fa',
                  borderRadius: '999px',
                  padding: '0.5em 1.2em 0.5em 1em',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  letterSpacing: '0.01em',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseOver={(e) => (
                  (e.currentTarget.style.background =
                    '#e0f7fa'),
                  (e.currentTarget.style.color = '#284b46')
                )}
                onMouseOut={(e) => (
                  (e.currentTarget.style.background =
                    'rgba(224, 247, 250, 0.12)'),
                  (e.currentTarget.style.color = '#e0f7fa')
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: '0.5em' }}
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  />
                  <path d="M16 8a6 6 0 0 1 6 6v6" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8" />
                </svg>
                Follow us on LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default Layout;
