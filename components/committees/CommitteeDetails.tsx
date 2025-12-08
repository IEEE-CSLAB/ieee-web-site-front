import React from 'react';

interface CommitteeDetailsProps {
    committeeName: string;
    detailText: string;
    image?: string;
    isFirst?: boolean;
}

const CommitteeDetails: React.FC<CommitteeDetailsProps> = ({ committeeName, detailText, image, isFirst = false }) => {
    return (
        <div className={`pt-8 pb-8 ${!isFirst ? 'border-t border-gray-50' : ''}`}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Text Content */}
                <div className="flex-1 max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">{committeeName}</h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">{detailText}</p>
                </div>
                
                {/* Image */}
                {image && (
                    <div className="w-full md:w-80 flex-shrink-0">
                        <div className="relative aspect-video rounded-xl overflow-hidden">
                            <img 
                                src={image} 
                                alt={committeeName}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommitteeDetails;

