import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import FarmInfo from './components/FarmInfo';
import Plants from './components/plants';
import IrrigationSystem from './components/irrigationsystem';
import Farmers from './components/Farmers'; // New component
import FinancialRecords from './components/FinancialRecords.js'; // New component
import Harvests from './components/Harvests'; // New component
import Medicines from './components/Medicines'; // New component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<FarmInfo />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/irrigation" element={<IrrigationSystem />} />
            <Route path="/farmers" element={<Farmers />} /> {/* New route */}
            <Route path="/financial-records" element={<FinancialRecords />} /> {/* New route */}
            <Route path="/harvests" element={<Harvests />} /> {/* New route */}
            <Route path="/medicines" element={<Medicines />} /> {/* New route */}
          </Routes>
        </main>
      </div>
      <style jsx>{`
        .App {
          font-family: Arial, sans-serif;
        }
        main {
          padding: 20px;
        }
      `}</style>
    </Router>
  );
};

export default App;
