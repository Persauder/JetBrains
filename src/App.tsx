import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
const App: React.FC = () => {
  return (
      <div>
        <Header />
        <Hero />
      </div>
  );
};

export default App;
