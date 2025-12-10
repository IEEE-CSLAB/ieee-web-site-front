"use client";

import Navbar from "./Navbar";

export default function NavbarWrapper() {
    return (
        <div className="absolute top-8 left-8 md:left-0 md:right-0 md:mx-auto z-50 w-fit">
            <Navbar />
        </div>
    );
}

