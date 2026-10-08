import clsx from 'clsx';
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';

export const TOOLTIP = {
  contentStyle: {
    background: '#0a0a0a',
    border: '1px solid #2d2d2d',
    borderRadius: '10px',
    color: '#ededed',
    fontSize: 12,
    fontFamily: 'Inter, sans-serif',
    padding: '9px 12px',
    boxShadow: '0 18px 50px rgba(0,0,0,0.55)',
  },
  labelStyle: { color: '#8b8b8b', fontWeight: 500, marginBottom: 4 },
  itemStyle: { color: '#ededed' },
  cursor: { fill: 'rgba(255,255,255,0.035)' },
};

export function Card({ children, className = '', padding = true, glow = false }) {
  return (
    <div
      className={clsx('ui-card', padding && 'ui-card-padding', glow && 'ui-card-glow', className)}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, sub, action }) {
  return (
    <div className="card-header">
      <div>
        <p className="card-title">{title}</p>
        {sub && <p className="card-subtitle">{sub}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function KpiCard({ label, value, change, up = true }) {
  return (
    <div className="kpi-card">
      <div className="kpi-topline">
        <p className="kpi-label">{label}</p>
        <ArrowUpRight size={13} className="kpi-arrow" />
      </div>
      <p className="kpi-value">{value}</p>
      <div className="kpi-change">
        {up
          ? <TrendingUp size={12} strokeWidth={2.4} />
          : <TrendingDown size={12} strokeWidth={2.4} />}
        <span>{change}</span>
      </div>
    </div>
  );
}

const BADGE_MAP = {
  default: { bg: '#141414', color: '#a1a1a1', border: '#2b2b2b' },
  green: { bg: 'rgba(80,227,194,0.09)', color: '#72e8cf', border: 'rgba(80,227,194,0.22)' },
  red: { bg: 'rgba(255,68,68,0.09)', color: '#ff7777', border: 'rgba(255,68,68,0.22)' },
  blue: { bg: 'rgba(96,165,250,0.09)', color: '#8abcf7', border: 'rgba(96,165,250,0.22)' },
  amber: { bg: 'rgba(245,166,35,0.09)', color: '#f3bb63', border: 'rgba(245,166,35,0.22)' },
  purple: { bg: 'rgba(167,139,250,0.09)', color: '#bda8ff', border: 'rgba(167,139,250,0.22)' },
};

export function Badge({ children, variant = 'default' }) {
  const s = BADGE_MAP[variant] || BADGE_MAP.default;
  return (
    <span
      className="badge"
      style={{ background: s.bg, color: s.color, borderColor: s.border }}
    >
      {children}
    </span>
  );
}

export function Stars({ rating }) {
  const full = Math.round(rating);
  return (
    <span className="stars">
      {'★'.repeat(full)}{'☆'.repeat(5 - full)}
    </span>
  );
}

export function SectionHeader({ title, sub, children }) {
  return (
    <div className="section-header">
      <div className="section-heading">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          Analytics workspace
        </div>
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
      {children && <div className="section-actions">{children}</div>}
    </div>
  );
}

export function Table({ heads, children }) {
  return (
    <div className="table-scroll">
      <table className="data-table">
        <thead>
          <tr>
            {heads.map(h => <th key={h}>{h}</th>)}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function Tr({ children }) {
  return <tr className="data-row">{children}</tr>;
}

export function Td({ children, muted = false, className = '' }) {
  return (
    <td className={clsx('data-cell', className, muted && 'data-cell-muted')}>
      {children}
    </td>
  );
}

export function ProgressBar({ pct, color = '#fff' }) {
  return (
    <div className="progress-track">
      <div className="progress-fill" style={{ width: `${Math.min(pct, 100)}%`, background: color }} />
    </div>
  );
}

export function DemandBar({ label, val, rank }) {
  return (
    <div className="demand-bar">
      <span className="demand-rank">{rank}</span>
      <span className="demand-label">{label}</span>
      <div className="demand-track">
        <div className="demand-fill" style={{ width: `${val}%` }} />
      </div>
      <span className="demand-value">{val}%</span>
    </div>
  );
}

export function Button({ children, variant = 'primary', size = 'sm', onClick }) {
  return (
    <button
      className={clsx('ui-button', `ui-button-${variant}`, `ui-button-${size}`)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function Select({ value, onChange, options }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)} className="ui-select">
      {options.map(o => (
        <option key={o} value={o} style={{ background: '#0a0a0a' }}>{o}</option>
      ))}
    </select>
  );
}

export function Divider() {
  return <hr className="ui-divider" />;
}
