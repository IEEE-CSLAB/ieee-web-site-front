import React from 'react';

const HeroSocials = () => {
    const socials = ['Instagram', 'LinkedIn'];

    return (
        <div className="absolute top-8 md:top-60 right-8 z-20 flex flex-col gap-3 md:gap-4 items-end">
            {socials.map((social) => (
                <a
                    key={social}
                    href="#"
                    className="px-4 md:px-5 lg:px-6 py-2.5 rounded-full text-xs md:text-sm font-medium text-gray-800 
                     bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg
                     whitespace-nowrap"
                >
                    {social}
                </a>
            ))}
        </div>
    );
};

export default HeroSocials;
