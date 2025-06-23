import React from 'react';
import Silk from './Silk';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold">Welcome</h1>
      </div>
    </section>
  );
};

export default Hero;
