import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { CATEGORIES, CAT_COMPLETION } from '../data';
import { Card, CardHeader, KpiCard, SectionHeader, TOOLTIP } from '../components/ui';

const CHART_COLORS = ['#fff','#60a5fa','#50e3c2','#f5a623','#ff6b6b','#a78bfa','#34d399','#f97316'];
const tick = { fill: '#555', fontSize: 11, fontFamily: 'Inter, sans-serif' };

const funnelData = [
  { name: 'Enrolled',  value: 248312 },
  { name: 'Started',   value: 198640 },
  { name: '50%+ Done', value: 142100 },
  { name: 'Completed', value: 152479 },
  { name: 'Certified', value: 148103 },
];
const funnelColors = ['#fff', '#a1a1a1', '#666', '#50e3c2', '#60a5fa'];

const byCat = CATEGORIES.map((c, i) => ({ name: c.split(' ')[0], Rate: CAT_COMPLETION[i] }));

const dropoutData = [
  { name: 'Lack of Time',  value: 34 }, { name: 'Too Difficult', value: 28 },
  { name: 'Lost Interest', value: 18 }, { name: 'Job Change',    value:  9 },
  { name: 'Cheaper Alt.',  value:  4 }, { name: 'Poor Quality',  value:  3 },
  { name: 'Tech Issues',   value:  2 }, { name: 'Other',         value:  2 },
];

export default function Completions() {
  return (
    <div>
      <SectionHeader title="Completions" sub="Course completion rates and dropout analysis" />

      <div className="grid grid-cols-4 gap-3 mb-6">
        <KpiCard label="Completed"            value="152,479" change="8.1% YoY"         up />
        <KpiCard label="Dropouts"             value="95,833"  change="2.4% improvement" up />
        <KpiCard label="Avg Days to Complete" value="34.7"    change="2 days faster"    up />
        <KpiCard label="Certificates Issued"  value="148,103" change="12.3% YoY"        up />
      </div>

      <div className="grid grid-cols-5 gap-3 mb-3">
        <Card className="col-span-3">
          <CardHeader title="Completion Funnel" sub="Enrolled → Started → Completed → Certified" />
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={funnelData} layout="vertical" margin={{ top: 4, right: 8, bottom: 0, left: 10 }}>
              <CartesianGrid horizontal={false} />
              <XAxis type="number" tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
              <YAxis type="category" dataKey="name" width={75} tick={tick} axisLine={false} tickLine={false} />
              <Tooltip {...TOOLTIP} formatter={v => v.toLocaleString()} />
              <Bar dataKey="value" name="Students" radius={[0,3,3,0]} maxBarSize={18}>
                {funnelData.map((_, i) => <Cell key={i} fill={funnelColors[i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="col-span-2">
          <CardHeader title="By Category" sub="Completion rate per subject" />
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={byCat} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tick={tick} axisLine={false} tickLine={false} />
              <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0,100]} />
              <Tooltip {...TOOLTIP} formatter={v => `${v}%`} />
              <Bar dataKey="Rate" name="Completion %" radius={[3,3,0,0]} maxBarSize={26}>
                {byCat.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <CardHeader title="Dropout Reasons" sub="Self-reported survey from students who did not complete" />
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={dropoutData} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tick={tick} axisLine={false} tickLine={false} />
            <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
            <Tooltip {...TOOLTIP} formatter={v => `${v}%`} />
            <Bar dataKey="value" name="% of dropouts" fill="#ff4444" fillOpacity={0.8} radius={[3,3,0,0]} maxBarSize={34} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
