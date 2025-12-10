import React from 'react';

interface CommitteeDetailsProps {
    committeeName: string;
    detailText: string;
    image?: string;
    isFirst?: boolean;
}

const CommitteeDetails: React.FC<CommitteeDetailsProps> = ({ committeeName, detailText, image, isFirst = false }) => {
    return (
        <section className="min-h-screen flex items-center justify-center py-12 border-b border-gray-100 last:border-0 snap-start">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-between">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                            {committeeName}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                            {detailText}
                        </p>
                    </div>

                    {/* Image */}
                    {image && (
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src={image}
                                    alt={committeeName}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CommitteeDetails;

