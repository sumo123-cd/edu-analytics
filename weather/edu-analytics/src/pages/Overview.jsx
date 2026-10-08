import { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
} from 'recharts';
import { Download } from 'lucide-react';
import {
  MONTHS, CATEGORIES, CAT_ENROLL, CAT_RATING,
  ENROLL_2024, ENROLL_2023, COMPLETION_RATE, DROPOUT_RATE,
} from '../data';
import { Card, CardHeader, KpiCard, SectionHeader, TOOLTIP, Select, Button } from '../components/ui';

const CHART_COLORS = ['#fff','#60a5fa','#50e3c2','#f5a623','#ff6b6b','#a78bfa','#34d399','#f97316'];
const tick = { fill: '#555', fontSize: 11, fontFamily: 'Inter, sans-serif' };

const enrollLine = MONTHS.map((m, i) => ({ name: m, '2024': ENROLL_2024[i], '2023': ENROLL_2023[i] }));
const catDonut   = CATEGORIES.map((c, i) => ({ name: c, value: CAT_ENROLL[i] }));
const compBar    = MONTHS.map((m, i) => ({ name: m, Completion: COMPLETION_RATE[i], Dropout: DROPOUT_RATE[i] }));
const radarData  = CATEGORIES.map((c, i) => ({ subject: c.split(' ')[0], Rating: CAT_RATING[i] }));

export default function Overview() {
  const [year, setYear] = useState('2024');

  return (
    <div>
      <SectionHeader title="Overview" sub="Online Education Analytics · 2024">
        <Select value={year} onChange={setYear} options={['2024', '2023', '2022']} />
        <Button variant="outline" size="sm">
          <Download size={12} /> Export
        </Button>
      </SectionHeader>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <KpiCard label="Total Enrollments"   value="248,312" change="14.2% vs last year" up />
        <KpiCard label="Completion Rate"     value="61.4%"   change="3.8% improvement"  up />
        <KpiCard label="Avg Course Rating"   value="4.31"    change="0.12 pts higher"    up />
        <KpiCard label="High-Demand Courses" value="38"      change="6 new this year"    up />
      </div>

      {/* Row 1: 3+2 */}
      <div className="grid grid-cols-5 gap-3 mb-3">
        <Card className="col-span-3">
          <CardHeader title="Monthly Enrollments" sub="2024 vs 2023" />
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={enrollLine} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tick={tick} axisLine={false} tickLine={false} />
              <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `${v/1000}k`} />
              <Tooltip {...TOOLTIP} />
              <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} iconType="circle" iconSize={7} />
              <Line type="monotone" dataKey="2024" stroke="#fff" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="2023" stroke="#333" strokeWidth={1.5} strokeDasharray="4 3" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="col-span-2">
          <CardHeader title="By Category" sub="Enrollment distribution" />
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={catDonut} cx="50%" cy="50%" innerRadius={48} outerRadius={78}
                   dataKey="value" nameKey="name" paddingAngle={2} strokeWidth={0}>
                {catDonut.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
              </Pie>
              <Tooltip {...TOOLTIP} formatter={v => v.toLocaleString()} />
              <Legend wrapperStyle={{ fontSize: 10, paddingTop: 4 }} iconType="circle" iconSize={7} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Row 2: 2+2 */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardHeader title="Completion vs Dropout" sub="Stacked monthly percentage" />
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={compBar} stackOffset="expand" margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tick={tick} axisLine={false} tickLine={false} />
              <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `${(v*100).toFixed(0)}%`} />
              <Tooltip {...TOOLTIP} formatter={v => `${v}%`} />
              <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} iconType="square" iconSize={8} />
              <Bar dataKey="Completion" stackId="a" fill="#fff" fillOpacity={0.9} />
              <Bar dataKey="Dropout"    stackId="a" fill="#333" radius={[2,2,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <CardHeader title="Rating by Category" sub="Average satisfaction scores" />
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius={72}>
              <PolarGrid stroke="#2a2a2a" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#555', fontSize: 10 }} />
              <PolarRadiusAxis domain={[3.5, 5]} tick={{ fill: '#222', fontSize: 9 }} />
              <Radar name="Rating" dataKey="Rating" stroke="#fff" fill="#fff" fillOpacity={0.06} strokeWidth={1.5} />
              <Tooltip {...TOOLTIP} />
            </RadarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
