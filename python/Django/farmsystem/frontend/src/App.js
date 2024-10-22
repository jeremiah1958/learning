import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import FarmInfo from './components/FarmInfo';
import Plants from './components/plants';
import IrrigationSystem from './components/irrigationsystem';
import Farmers from './components/Farmers'; 
import FinancialRecords from './components/FinancialRecords.js'; 
import Harvests from './components/Harvests'; 
import Medicines from './components/Medicines'; 



const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<FarmInfo />} />
            <Route path="/plants" element={<Plants/>} />
            <Route path="/irrigation" element={<IrrigationSystem />} />
            <Route path="/farmers" element={<Farmers />} /> {}
            <Route path="/financial-records" element={<FinancialRecords />} /> {}
            <Route path="/harvests" element={<Harvests />} /> {}
            <Route path="/medicines" element={<Medicines />} /> {}
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


