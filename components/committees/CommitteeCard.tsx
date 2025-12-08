import React from 'react';

interface CommitteeCardProps {
    name: string;
    description: string;
    members: number;
    projects: number;
    image: string;
    badge?: string;
    className?: string;
    accentColor?: string;
    onMoreClick?: () => void;
}

const CommitteeCard: React.FC<CommitteeCardProps> = ({
    name,
    description,
    members,
    projects,
    image,
    badge,
    className = '',
    accentColor = 'primary',
    onMoreClick
}) => {
    return (
        <div className={`group relative rounded-2xl overflow-hidden aspect-[4/5] ${className}`}>
            {/* Full Image Background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ 
                    backgroundImage: `url(${image})`,
                    backgroundPosition: '50% 50%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            
            {/* Smooth Gradient Overlay - Üstten şeffaf, alttan koyu */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Badge - Top Left */}
            {badge && (
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800">
                        {badge}
                    </span>
                </div>
            )}
            
            {/* Button - Top Right */}
            <div className="absolute top-4 right-4 z-10">
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onMoreClick?.();
                    }}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors group-hover:scale-110 transition-transform shadow-md"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                    </svg>
                </button>
            </div>
            
            {/* Bottom Content - Gradient overlay üzerinde, en altta */}
            <div className="absolute bottom-0 left-0 right-0 pb-6 px-6 z-10">
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                    {name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-white/90 line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CommitteeCard;

