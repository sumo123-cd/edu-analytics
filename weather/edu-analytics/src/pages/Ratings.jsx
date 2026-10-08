import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { MONTHS, COURSES } from '../data';
import { Card, CardHeader, KpiCard, SectionHeader, Table, Tr, Td, Badge, Stars, TOOLTIP } from '../components/ui';

const tick = { fill: '#555', fontSize: 11, fontFamily: 'Inter, sans-serif' };

const ratingDist = [
  { name: '5★', value: 43 },
  { name: '4★', value: 33 },
  { name: '3★', value: 15 },
  { name: '2★', value: 5.5 },
  { name: '1★', value: 3.5 },
];
const distColors = ['#fff', '#a1a1a1', '#555', '#333', '#2a2a2a'];

const ratingTrend = MONTHS.map((m, i) => ({
  name: m,
  Rating: [4.18,4.21,4.24,4.28,4.30,4.29,4.31,4.33,4.35,4.34,4.37,4.40][i],
}));

const topRated = [...COURSES].sort((a, b) => b.rating - a.rating).slice(0, 10);

export default function Ratings() {
  return (
    <div>
      <SectionHeader title="Ratings & Reviews" sub="Student satisfaction and feedback intelligence" />

      <div className="grid grid-cols-4 gap-3 mb-6">
        <KpiCard label="Overall Avg Rating" value="4.31 / 5" change="0.12 pts higher"     up />
        <KpiCard label="Total Reviews"       value="89,240"   change="21.5% YoY"           up />
        <KpiCard label="5-Star Reviews"      value="38,420"   change="43% of all reviews"  up />
        <KpiCard label="1-Star Reviews"      value="3,120"    change="3.5% of all reviews" up={false} />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <Card>
          <CardHeader title="Rating Distribution" sub="Breakdown of all star ratings received" />
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={ratingDist} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tick={tick} axisLine={false} tickLine={false} />
              <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
              <Tooltip {...TOOLTIP} formatter={v => `${v}%`} />
              <Bar dataKey="value" name="Share" radius={[3,3,0,0]} maxBarSize={52}>
                {ratingDist.map((_, i) => <Cell key={i} fill={distColors[i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <CardHeader title="Rating Trend" sub="Average monthly rating across all courses, 2024" />
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={ratingTrend} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tick={tick} axisLine={false} tickLine={false} />
              <YAxis tick={tick} axisLine={false} tickLine={false} domain={[3.8, 5]} tickFormatter={v => v.toFixed(1)} />
              <Tooltip {...TOOLTIP} formatter={v => `${v.toFixed(2)} ★`} />
              <Line type="monotone" dataKey="Rating" stroke="#fff" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card padding={false}>
        <div className="px-5 pt-5 pb-1">
          <CardHeader title="Top Rated Courses" sub="Highest average student ratings" />
        </div>
        <Table heads={['#', 'Course', 'Instructor', 'Category', 'Rating', 'Reviews']}>
          {topRated.map((c, i) => {
            const reviews = Math.floor(c.enroll * 0.4 * (0.8 + i * 0.03));
            return (
              <Tr key={c.name}>
                <Td muted>{i + 1}</Td>
                <Td><span className="font-medium" style={{ color: '#ededed' }}>{c.name}</span></Td>
                <Td muted>{c.inst}</Td>
                <Td><Badge>{c.cat}</Badge></Td>
                <Td>
                  <div className="flex items-center gap-1.5">
                    <Stars rating={c.rating} />
                    <span className="text-xs font-semibold tabular-nums" style={{ color: '#ededed' }}>{c.rating}</span>
                  </div>
                </Td>
                <Td muted><span className="tabular-nums">{reviews.toLocaleString()}</span></Td>
              </Tr>
            );
          })}
        </Table>
      </Card>
    </div>
  );
}
