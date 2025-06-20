import React from 'react';
import * as FaIcons from 'react-icons/fa'; // ВАЖЛИВО: імпортуємо все
import heroGif from '../assets/hero-bg.gif';

const Hero: React.FC = () => {
    return (
        <section className="relative text-white overflow-hidden h-[600px] flex items-center">
            {/* Фонове зображення або gif */}
            <img
                src={heroGif}
                alt="Animated background"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Контент */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Make Your Software <br />
                    Vision a Reality
                </h1>

                <p className="text-lg md:text-xl font-medium text-gray-300">
                    Pro tools created with{' '}
                    <span className="text-indigo-400 underline underline-offset-4">{'{developers}'}</span>,<br />
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
