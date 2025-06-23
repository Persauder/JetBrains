import React from 'react';
import * as FaIcons from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section
            className="
        relative w-full h-screen overflow-hidden flex items-center justify-center
        bg-black
      "
        >
            {/* 1) Чёрный фон на случай, если анимация где-то подгрузится позже */}
            <div className="absolute inset-0 bg-black" />

            {/* 2) Собственно анимированный градиент */}
            <div
                className="
          absolute inset-0
          [background-image:radial-gradient(circle_at_0%_50%,rgba(114,92,227,0.7)_0%,transparent_60%),radial-gradient(circle_at_100%_25%,rgba(89,52,202,0.7)_0%,transparent_60%)]
          [background-size:200%_200%]
          animate-wave1
          blur-[100px]
          pointer-events-none
          -z-10
        "
            />

            {/* 3) Ваш контент поверх */}
            <div className="relative z-10 max-w-4xl px-6 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Make Your Software <br />
                    Vision a Reality
                </h1>
                <p className="text-lg md:text-xl font-medium text-gray-300">
                    Pro tools created with{' '}
                    <span className="text-indigo-400 underline underline-offset-4">
            {'{developers}'}
          </span>
                    ,{' '}
                    <span className="inline-flex items-center text-cyan-400 underline underline-offset-4">
            <FaIcons.FaUsers className="mr-1" /> teams
          </span>
                    , and{' '}
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
