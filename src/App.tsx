import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AISection from "./components/AISection";

const App: React.FC = () => {
  return (
      <div>
        <Header />
        <Hero />
        <AISection />
      </div>
  );
};

export default App;
