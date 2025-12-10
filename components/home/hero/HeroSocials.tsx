import React from 'react';

const HeroSocials = () => {
    const socials = ['Instagram', 'Twitter', 'Facebook'];

    return (
        <div className="absolute top-8 right-8 z-20 flex flex-row gap-2 md:gap-4 items-center max-w-[calc(100%-4rem)] overflow-hidden">
            {socials.map((social) => (
                <a
                    key={social}
                    href="#"
                    className="px-3 md:px-4 lg:px-6 py-2 rounded-full text-xs md:text-sm font-medium text-gray-800 
                     bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg
                     whitespace-nowrap flex-shrink-0"
                >
                    {social}
                </a>
            ))}
        </div>
    );
};

export default HeroSocials;
