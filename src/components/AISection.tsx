import React from 'react';
import { FaGift, FaRobot, FaMagic } from 'react-icons/fa';
import AiBG from '/assets/ai-banner-back-md.png'
const features = [
    { icon: <FaRobot className="inline-block mr-2" />, text: 'Coding agent' },
    { icon: <FaMagic className="inline-block mr-2" />, text: 'Smarter assistance' },
    { icon: <FaGift className="inline-block mr-2" />, text: 'Free tier' },
];

export default function AISection() {
    return (
        <section className="flex justify-center py-16 bg-black">
            <div className="relative flex flex-col md:flex-row items-center bg-black border border-purple-600 rounded-2xl overflow-hidden max-w-6xl w-full mx-4">
                {/* Левая колонка */}
                <div className="z-10 w-full md:w-1/2 p-8 md:p-12 text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        JetBrains IDEs Go AI
                    </h2>

                    <ul className="space-y-4 mb-8">
                        {features.map((f, i) => (
                            <li key={i} className="text-lg flex items-center">
                                {f.icon}
                                <span>{f.text}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
                    >
                        Let’s Go
                    </button>
                </div>

                {/* Правая колонка с градиентным фоном и узлами */}
                <div className="absolute inset-0 md:relative md:w-1/2 h-64 md:h-auto">
                    {/* Градиентный фон */}
                    <div
                        className="w-full h-full"
                        style={{
                            background: 'radial-gradient(circle at 80% 30%, #b64ff8, #2e046d 60%)',
                        }}
                    />

                    {/* Пример узлов и линии */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="20" />
                            </filter>
                        </defs>

                        {/* Линия */}
                        <path
                            d="M 20% 70% C 40% 50%, 60% 50%, 80% 30%"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />

                        {/* Узел 1 */}
                        <circle cx="20%" cy="70%" r="24" fill="rgba(255,255,255,0.2)" />
                        <text
                            x="20%"
                            y="70%"
                            fill="#fff"
                            fontSize="14"
                            textAnchor="middle"
                            dy="4"
                        >
                            Junie
                        </text>

                        {/* Узел 2 */}
                        <circle cx="80%" cy="30%" r="24" fill="rgba(255,255,255,0.2)" />
                        <text
                            x="80%"
                            y="30%"
                            fill="#fff"
                            fontSize="14"
                            textAnchor="middle"
                            dy="4"
                        >
                            AI Assistant
                        </text>
                    </svg>
                </div>
            </div>
        </section>
    );
}