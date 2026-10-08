import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { COURSES } from '../data';
import { Card, SectionHeader, Table, Tr, Td, Badge, Stars, ProgressBar } from '../components/ui';

const DEMAND_VARIANT = { 'Very High': 'red', 'High': 'blue', 'Medium': 'green', 'Low': 'default' };

export default function CourseCatalog() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return COURSES.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.cat.toLowerCase().includes(q) ||
      c.inst.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <SectionHeader title="Course Catalog" sub="Full performance view of all active courses">
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ background: 'transparent', border: '1px solid #2a2a2a' }}
        >
          <Search size={13} strokeWidth={2} color="#555" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search courses…"
            className="outline-none bg-transparent text-sm w-52"
            style={{ color: '#ededed', fontFamily: 'Inter, sans-serif' }}
          />
        </div>
      </SectionHeader>

      {/* Mini stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Total Courses',   value: COURSES.length },
          { label: 'Filtered Results', value: filtered.length },
          { label: 'Avg Completion',   value: `${(COURSES.reduce((s, c) => s + c.comp, 0) / COURSES.length).toFixed(1)}%` },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl px-4 py-3 flex items-center justify-between"
            style={{ background: '#0a0a0a', border: '1px solid #2a2a2a' }}
          >
            <span className="text-xs" style={{ color: '#555' }}>{label}</span>
            <span className="text-sm font-semibold tabular-nums" style={{ color: '#ededed' }}>{value}</span>
          </div>
        ))}
      </div>

      <Card padding={false}>
        <Table heads={['Course', 'Category', 'Instructor', 'Enrolled', 'Completion', 'Avg Rating', 'Demand', 'Status']}>
          {filtered.map(c => (
            <Tr key={c.name}>
              <Td>
                <span className="font-medium" style={{ color: '#ededed' }}>{c.name}</span>
              </Td>
              <Td><Badge>{c.cat}</Badge></Td>
              <Td muted>{c.inst}</Td>
              <Td><span className="tabular-nums">{c.enroll.toLocaleString()}</span></Td>
              <Td className="w-36">
                <div className="flex items-center gap-2">
                  <span className="text-xs tabular-nums w-7 shrink-0" style={{ color: '#666' }}>{c.comp}%</span>
                  <ProgressBar
                    pct={c.comp}
                    color={c.comp >= 70 ? '#50e3c2' : c.comp >= 55 ? '#f5a623' : '#ff4444'}
                  />
                </div>
              </Td>
              <Td>
                <div className="flex items-center gap-1.5">
                  <Stars rating={c.rating} />
                  <span className="text-xs tabular-nums font-semibold" style={{ color: '#ededed' }}>{c.rating}</span>
                </div>
              </Td>
              <Td><Badge variant={DEMAND_VARIANT[c.demand]}>{c.demand}</Badge></Td>
              <Td><Badge variant="green">Active</Badge></Td>
            </Tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={8} className="text-center py-12 text-sm" style={{ color: '#444' }}>
                No courses match your search.
              </td>
            </tr>
          )}
        </Table>
      </Card>
    </div>
  );
}
