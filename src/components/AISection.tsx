import React from 'react';
import AiBG from '../assets/ai-banner-back-md.png'
import { ReactComponent as CodingAgentIcon } from '../assets/coding-agent.svg';
import {ReactComponent as SmarterAssistanceIcon} from '../assets/sa-icon-xs.svg';
import {ReactComponent as FreeTierIcon} from '../assets/free-tier-icon-xs.svg';

export default function AISection() {
    return (
        <section className="flex justify-center py-16 bg-black">
            <div
                className="
                  relative
                  w-[1100px] h-[340px]
                  flex flex-col justify-between
                  p-[44px] mt-[18px]
                  border-2 border-[rgb(90,31,208)] rounded-[24px]
                  overflow-hidden
                "
                style={{
                    backgroundImage: `url(${AiBG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center right',
                }}
            >
                {/* ===== Заголовок ===== */}
                <h2 className="text-white text-6xl font-semibold">
                    JetBrains IDEs Go AI
                </h2>

                {/* ===== Ряд іконок ===== */}
                <div className="flex items-center text-white mt-[20px] space-x-[18px] h-[24px] flex-none">
                    <div className="flex items-center space-x-2 h-[24px]">
                        <CodingAgentIcon className="w-6 h-6" />
                        <span>Coding agent</span>
                    </div>
                    <div className="flex items-center space-x-2 h-[24px]">
                        <SmarterAssistanceIcon className="w-6 h-6" />
                        <span>Smarter assistance</span>
                    </div>
                    <div className="flex items-center space-x-2 h-[24px]">
                        <FreeTierIcon className="w-6 h-6" />
                        <span>Free tier</span>
                    </div>
                </div>

                {/* ===== Кнопка ===== */}
                <button className="
                  bg-white text-gray-800 rounded-full
                  px-6 py-2 text-lg font-medium
                  shadow-md hover:shadow-lg transition-shadow
                  active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-300
                  self-start /* щоб кнопка була прижата зліва */
                ">
                    Let’s Go
                </button>
            </div>
        </section>
    );
}
