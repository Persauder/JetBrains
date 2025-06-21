// src/components/VantaWaves.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

declare global {
    interface Window { VANTA: any; }
}

export default function VantaWaves() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        // Проверяем, что скрипт действительно загрузился:
        if (typeof window.VANTA?.WAVES !== 'function') {
            console.error('❌ VANTA.WAVES is not available on window:', window.VANTA);
            return;
        }

        // Запускаем анимацию
        const effect = window.VANTA.WAVES({
            el: ref.current,
            THREE,
            color: 0xffffff,
            shininess: 100.0,
            waveHeight: 50.0,
            waveSpeed: 1.2,
            zoom: 1.0,
            backgroundAlpha: 0.0,
        });

        return () => {
            // Очищаем WebGL-контекст
            effect?.destroy();
        };
    }, []);

    return <div ref={ref} className="absolute inset-0" />;
}
