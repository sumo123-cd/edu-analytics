import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  LayoutDashboard, Users, CheckCircle2, Star,
  TrendingUp, BookOpen, GraduationCap,
} from 'lucide-react';

const NAV = [
  { to: '/',            icon: LayoutDashboard, label: 'Overview'       },
  { to: '/enrollments', icon: Users,           label: 'Enrollments'    },
  { to: '/completions', icon: CheckCircle2,    label: 'Completions'    },
  { to: '/ratings',     icon: Star,            label: 'Ratings'        },
  { to: '/demand',      icon: TrendingUp,      label: 'Demand'         },
  { to: '/courses',     icon: BookOpen,        label: 'Course Catalog' },
];

export default function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-0 h-screen flex flex-col w-[240px] z-50"
      style={{ background: 'var(--surface)', borderRight: '1px solid var(--border)' }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-2.5 px-5 h-14"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: 'var(--text)' }}
        >
          <GraduationCap size={15} color="white" strokeWidth={2.2} />
        </div>
        <span className="text-sm font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
          EduAnalytics
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5 overflow-y-auto">
        <p
          className="text-xs font-medium px-2 mb-2 mt-1 uppercase tracking-widest"
          style={{ color: 'var(--text-3)' }}
        >
          Analytics
        </p>

        {NAV.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm font-medium transition-all duration-100',
                isActive
                  ? 'text-[var(--text)] bg-[var(--surface-2)]'
                  : 'text-[var(--text-3)] hover:text-[var(--text-2)] hover:bg-[var(--surface-2)]',
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={15}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  style={{ color: isActive ? 'var(--text)' : 'var(--text-3)' }}
                />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div
        className="px-5 py-4 flex items-center gap-2.5"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
          style={{ background: 'var(--surface-2)', color: 'var(--text-2)', border: '1px solid var(--border)' }}
        >
          E
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium truncate" style={{ color: 'var(--text)' }}>EduAdmin</p>
          <p className="text-xs truncate" style={{ color: 'var(--text-3)' }}>admin@edu.io</p>
        </div>
      </div>
    </aside>
  );
}
