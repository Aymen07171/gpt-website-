import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
