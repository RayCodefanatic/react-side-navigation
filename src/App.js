import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import SideNav from './components/SideNav';
import ApplicationAnalysis from './pages/ApplicationAnalysis';
import TransDetailedReport from './pages/TransDetailedReport';
import SummaryReport from './pages/SummaryReport';
import DownloadCenter from './pages/DownloadCenter';
import WebUserActivity from './pages/WebUserActivity';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Router>
      <div className="App">
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className={isOpen ? 'main-expanded' : 'main-collapsed'}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="transDetailedReport" replace />}
            />
            <Route
              path="applicationAnalysis"
              element={<ApplicationAnalysis />}
            />
            <Route
              path="transDetailedReport"
              element={<TransDetailedReport />}
            />
            <Route path="summaryReport" element={<SummaryReport />} />
            <Route path="downloadcenter" element={<DownloadCenter />} />
            <Route path="webUserActivity" element={<WebUserActivity />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
