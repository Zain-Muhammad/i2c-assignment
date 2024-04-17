import React from 'react';
import Navigation from './components/Header';
import Herobanner from './components/Herobanner';
import About from './components/About';
import PartnerSlider from './components/PartnerSlider';
import RegistrationSection from './components/RegistrationSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Herobanner />
      <About />
      <PartnerSlider />
      <RegistrationSection />
      <Footer />
    </div>
  );
}

export default App;
