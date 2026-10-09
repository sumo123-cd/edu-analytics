import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Overview from './pages/Overview';
import Enrollments from './pages/Enrollments';
import Completions from './pages/Completions';
import Ratings from './pages/Ratings';
import Demand from './pages/Demand';
import CourseCatalog from './pages/CourseCatalog';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <main className="app-main">
          <div className="ambient ambient-one" />
          <div className="ambient ambient-two" />

          <div className="page-container">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/enrollments" element={<Enrollments />} />
              <Route path="/completions" element={<Completions />} />
              <Route path="/ratings" element={<Ratings />} />
              <Route path="/demand" element={<Demand />} />
              <Route path="/courses" element={<CourseCatalog />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
