import React from 'react';

const HeroSocials = () => {
    const socials = ['Instagram', 'Twitter', 'Facebook'];

    return (
        <div className="absolute top-8 right-8 z-20 flex flex-row gap-4 items-center">
            {socials.map((social) => (
                <a
                    key={social}
                    href="#"
                    className="px-6 py-2 rounded-full text-sm font-medium text-gray-800 
                     bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg
                     min-w-[120px] text-center"
                >
                    {social}
                </a>
            ))}
        </div>
    );
};

export default HeroSocials;
