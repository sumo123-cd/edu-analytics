import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell,
} from 'recharts';
import { MONTHS, DEMAND_TOPICS } from '../data';
import { Card, CardHeader, KpiCard, SectionHeader, DemandBar, TOOLTIP } from '../components/ui';

const tick = { fill: '#555', fontSize: 11, fontFamily: 'Inter, sans-serif' };
const CHART_COLORS = ['#fff','#60a5fa','#50e3c2','#f5a623','#ff6b6b','#a78bfa','#34d399'];

const regionData = [
  { name: 'Asia-Pacific', value: 31 }, { name: 'N. America', value: 27 },
  { name: 'Europe',       value: 19 }, { name: 'South Asia', value: 11 },
  { name: 'Latam',        value:  7 }, { name: 'M. East',    value:  3 },
  { name: 'Africa',       value:  2 },
];

const demandTrend = MONTHS.map((m, i) => ({
  name: m,
  'Search Vol (k)':  [120,132,140,155,162,178,170,166,180,188,175,160][i],
  'Course Requests': [240,280,310,350,380,420,400,390,440,460,430,380][i],
}));

export default function Demand() {
  return (
    <div>
      <SectionHeader title="Demand" sub="Trending topics, search demand & market interest" />

      <div className="grid grid-cols-4 gap-3 mb-6">
        <KpiCard label="Trending Searches" value="+41%"     change="AI & ML topics leading" up />
        <KpiCard label="Fastest Growing"   value="Gen AI"   change="312% YoY"               up />
        <KpiCard label="Top Region"        value="Asia-Pac" change="28% growth"              up />
        <KpiCard label="Corporate Demand"  value="34%"      change="of total demand"         up />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <Card>
          <CardHeader title="Top 10 Demand Topics" sub="By student search & enrolment interest" />
          <div>
            {DEMAND_TOPICS.map((t, i) => (
              <DemandBar key={t.label} label={t.label} val={t.val} rank={i + 1} />
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader title="Demand by Region" sub="Geographic distribution of course interest" />
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={regionData} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tick={tick} axisLine={false} tickLine={false} />
              <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
              <Tooltip {...TOOLTIP} formatter={v => `${v}%`} />
              <Bar dataKey="value" name="Share" radius={[3,3,0,0]} maxBarSize={30}>
                {regionData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <CardHeader title="Demand Growth Trend" sub="Monthly search volume & new course requests, 2024" />
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={demandTrend} margin={{ top: 4, right: 30, bottom: 0, left: -10 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tick={tick} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left"  tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `${v}k`} />
            <YAxis yAxisId="right" orientation="right" tick={{ ...tick, fill: '#60a5fa' }} axisLine={false} tickLine={false} />
            <Tooltip {...TOOLTIP} />
            <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} iconType="circle" iconSize={7} />
            <Line yAxisId="left"  type="monotone" dataKey="Search Vol (k)"  stroke="#fff"    strokeWidth={2} dot={false} />
            <Line yAxisId="right" type="monotone" dataKey="Course Requests" stroke="#60a5fa" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
