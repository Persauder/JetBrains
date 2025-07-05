import React from 'react';
import Aurora from './Aurora';
import * as FaIcons from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-1/6 overflow-hidden">
            {/* Чорний фон */}
            <div className="absolute inset-0 bg-black" />

            {/* Анімація Aurora поверх фону */}
            <div className="absolute inset-0 z-10">
                <Aurora
                    colorStops={['#5227ff', '#66ffc4', '#c629ff']}
                    blend={0.07}
                    amplitude={1.0}
                    speed={0.8}
                />
            </div>

            {/* Контент зверху */}
            <div
                className="
          relative z-20
          max-w-[800px]       /* ширина контейнера */
          ml-15 md:ml-56       /* зсув вправо */
          mt-16 md:mt-32      /* відступ зверху */
          px-6 text-left
        "
            >
                <h1 className="text-7xl font-semibold mb-6 leading-tight text-white drop-shadow-lg">
                    Make Your Software <br />
                    Vision a Reality
                </h1>

                <p className="text-lg md:text-3xl font-medium text-gray-300">
                    Pro tools created with{' '}
                    <span className="text-indigo-400 underline underline-offset-8">
            {'{developers}'}
          </span>,<br />

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