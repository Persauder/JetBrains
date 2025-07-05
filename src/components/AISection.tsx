import React from 'react';
import AiBG from '../assets/ai-banner-back-md.png'
import { ReactComponent as CodingAgentIcon } from '../assets/coding-agent.svg';
import {ReactComponent as SmarterAssistanceIcon} from '../assets/sa-icon-xs.svg';
import {ReactComponent as FreeTierIcon} from '../assets/free-tier-icon-xs.svg';

export default function AISection() {
    return (
        <section className="flex justify-center py-16 bg-black">
            <div className="w-[1100px] h-[340px] flex flex-col p-[44px] border-[2px] mt-[18px] border-[rgb(90,31,208)] rounded-lg">

                {/* Заголовок */}
                <div className="basis-[25%]">
                    <h2 className="text-white text-6xl font-semibold">
                        JetBrains IDEs Go AI
                    </h2>
                </div>

                {/* Ряд іконок: висота авто, в кожному pair — 24px */}
                <div className="basis-[35%] flex-none flex text-white mt-[20px] md-[48px]">
                    {/* Pair 1 */}
                    <div className="flex items-center space-x-2 mr-[18px] h-[24px]">
                        <CodingAgentIcon className="w-6 h-6" />
                        <span>Coding agent</span>
                    </div>

                    {/* Pair 2 */}
                    <div className="flex items-center space-x-2 mr-[18px] h-[24px]">
                        <SmarterAssistanceIcon className="w-6 h-6" />
                        <span>Smarter assistance</span>
                    </div>

                    {/* Pair 3 */}
                    <div className="flex items-center space-x-2 h-[24px]">
                        <FreeTierIcon className="w-6 h-6" />
                        <span>Free tier</span>
                    </div>
                </div>

                {/* Залишок простору */}
                <div className="basis-[40%]">
                    {/* … */}
                </div>
            </div>

        </section>
    );
}
