"use client";

import dynamic from "next/dynamic";
import React from "react";

const LocationsGlobe = dynamic(() => import("./LocationsGlobe"), {
    ssr: false,
    loading: () => <div className="w-full h-screen bg-white" />,
});

export default function LocationsWrapper() {
    return <LocationsGlobe />;
}
