import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import { Menu, Search, Command, Activity } from 'lucide-react';

const NAV_LINKS = [
  { to: '/',            label: 'Overview' },
  { to: '/enrollments', label: 'Enrollments' },
  { to: '/completions', label: 'Completions' },
  { to: '/ratings',     label: 'Ratings' },
  { to: '/demand',      label: 'Demand' },
  { to: '/courses',     label: 'Courses' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand" aria-label="EduAnalytics home">
            <span className="brand-mark" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5L16.2 15H1.8L9 1.5Z" fill="currentColor" />
              </svg>
            </span>
            <span>EduAnalytics</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  clsx('nav-link', isActive && 'nav-link-active')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="topbar-actions">
            <button className="search-trigger" type="button" aria-label="Search">
              <Search size={14} />
              <span>Search</span>
              <kbd><Command size={10} /> K</kbd>
            </button>
            <div className="live-status" title="Analytics data is live">
              <span className="live-dot" />
              Live
            </div>
            <div className="avatar" aria-label="Signed in as EduAdmin">E</div>
            <button
              className="mobile-menu"
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle navigation"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  clsx('mobile-nav-link', isActive && 'mobile-nav-link-active')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
