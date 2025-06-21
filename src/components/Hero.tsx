import React from 'react';
import * as FaIcons from 'react-icons/fa';
import VantaWaves from './VantaWaves';

const Hero: React.FC = () => {
    return (
        <section
            className="relative w-full h-screen overflow-hidden flex items-center justify-center
      bg-gradient-to-br from-black via-purple-900 to-black"
        >
            <VantaWaves />

            <div className="relative z-10 max-w-4xl px-6 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Make Your Software <br />
                    Vision a Reality
                </h1>
                <p className="text-lg md:text-xl font-medium text-gray-300">
                    Pro tools created with{' '}
                    <span className="text-indigo-400 underline underline-offset-4">
            {'{developers}'}
          </span>,{' '}
                    <span className="inline-flex items-center text-cyan-400 underline underline-offset-4">
            <FaIcons.FaUsers className="mr-1" /> teams
          </span>, and{' '}
                    <span className="inline-flex items-center text-pink-500 underline underline-offset-4">
            <FaIcons.FaBuilding className="mr-1" /> businesses
          </span>{' '}
                    in mind
                </p>
            </div>
        </section>
    );
};

export default Hero;
