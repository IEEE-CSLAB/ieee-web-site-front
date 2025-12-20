"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef } from "react";

const LocationsGlobe = dynamic(() => import("./LocationsGlobe"), {
    ssr: false,
    loading: () => <div className="w-full h-[600px] bg-white flex items-center justify-center text-gray-400">Harita Yükleniyor...</div>,
});

export default function LocationsWrapper() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "200px", // Start loading 200px before it comes into view
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="min-h-[600px]">
            {isVisible && <LocationsGlobe />}
        </div>
    );
}
