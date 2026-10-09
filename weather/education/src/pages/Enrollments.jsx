import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { MONTHS, ENROLL_2024, ENROLL_2023, ENROLL_2022, COURSES } from '../data';
import { Card, CardHeader, KpiCard, SectionHeader, Table, Tr, Td, Badge, ProgressBar, TOOLTIP } from '../components/ui';

const CHART_COLORS = ['#fff','#60a5fa','#50e3c2','#f5a623'];
const tick = { fill: '#555', fontSize: 11, fontFamily: 'Inter, sans-serif' };

const yoyData = MONTHS.map((m, i) => ({
  name: m, '2022': ENROLL_2022[i], '2023': ENROLL_2023[i], '2024': ENROLL_2024[i],
}));
const deviceData = [
  { name: 'Mobile', value: 48 }, { name: 'Desktop', value: 36 },
  { name: 'Tablet', value: 12 }, { name: 'TV / Other', value: 4 },
];
const topCourses = [...COURSES].sort((a, b) => b.enroll - a.enroll).slice(0, 10);

export default function Enrollments() {
  return (
    <div>
      <SectionHeader title="Enrollments" sub="Detailed breakdown of student enrollments" />

      <div className="grid grid-cols-4 gap-3 mb-6">
        <KpiCard label="Q1 Enrollments" value="58,210" change="11% vs Q1 2023" up />
        <KpiCard label="Q2 Enrollments" value="64,880" change="18% vs Q2 2023" up />
        <KpiCard label="Q3 Enrollments" value="67,402" change="9% vs Q3 2023"  up />
        <KpiCard label="Q4 Enrollments" value="57,820" change="4% vs Q4 2023"  up={false} />
      </div>

      <div className="grid grid-cols-5 gap-3 mb-3">
        <Card className="col-span-3">
          <CardHeader title="Year-over-Year Growth" sub="Monthly enrollment comparison 2022–2024" />
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={yoyData} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tick={tick} axisLine={false} tickLine={false} />
              <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `${v/1000}k`} />
              <Tooltip {...TOOLTIP} formatter={v => v.toLocaleString()} />
              <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} iconType="circle" iconSize={7} />
              <Bar dataKey="2022" fill="#2a2a2a" radius={[2,2,0,0]} />
              <Bar dataKey="2023" fill="#555"    radius={[2,2,0,0]} />
              <Bar dataKey="2024" fill="#fff"    radius={[2,2,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="col-span-2">
          <CardHeader title="Device Split" sub="How students access courses" />
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={deviceData} cx="50%" cy="50%" outerRadius={72} dataKey="value" nameKey="name" paddingAngle={2} strokeWidth={0}>
                {deviceData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} />)}
              </Pie>
              <Tooltip {...TOOLTIP} formatter={v => `${v}%`} />
              <Legend wrapperStyle={{ fontSize: 11 }} iconType="circle" iconSize={7} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card padding={false}>
        <div className="px-5 pt-5 pb-1">
          <CardHeader title="Top Enrolled Courses" sub="Highest enrollment numbers this year" />
        </div>
        <Table heads={['#', 'Course', 'Category', 'Enrollments', 'Share', 'Status']}>
          {topCourses.map((c, i) => {
            const pct = (c.enroll / topCourses[0].enroll) * 100;
            return (
              <Tr key={c.name}>
                <Td muted>{i + 1}</Td>
                <Td><span className="font-medium" style={{ color: '#ededed' }}>{c.name}</span></Td>
                <Td><Badge>{c.cat}</Badge></Td>
                <Td><span className="tabular-nums">{c.enroll.toLocaleString()}</span></Td>
                <Td className="w-36"><ProgressBar pct={pct} color={i === 0 ? '#fff' : '#444'} /></Td>
                <Td><Badge variant={c.comp >= 70 ? 'green' : 'default'}>
                  {c.comp >= 70 ? 'Trending' : 'Active'}
                </Badge></Td>
              </Tr>
            );
          })}
        </Table>
      </Card>
    </div>
  );
}
