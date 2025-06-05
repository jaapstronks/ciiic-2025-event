import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
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
          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/sessions" className="nav-link">
              Sessions
            </Link>
            <Link to="/videos" className="nav-link">
              Videos
            </Link>
            <Link to="/gallery" className="nav-link">
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
  );
};

export default Layout;
