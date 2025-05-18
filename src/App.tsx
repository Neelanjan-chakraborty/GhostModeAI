import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import Download from './sections/Download';
import Footer from './sections/Footer';
import Legal from './pages/Legal.tsx';

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white bg-cyber-grid bg-[size:50px_50px]">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 opacity-90"></div>
      <div className="relative z-10">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <Pricing />
              <Download />
            </main>
          } />
          <Route path="/legal" element={<Legal />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;