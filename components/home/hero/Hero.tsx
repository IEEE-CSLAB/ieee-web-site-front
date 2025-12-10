"use client";

import React, { useRef, useEffect, useState } from 'react';
import HeroSocials from './HeroSocials';
import HeroHeading from './HeroHeading';
import ImportantEventBox from './ImportantEventBox';

const Hero = () => {
    const forwardVideoRef = useRef<HTMLVideoElement>(null);
    const reverseVideoRef = useRef<HTMLVideoElement>(null);
    const [isPlayingReverse, setIsPlayingReverse] = useState(false);
    const [useClientSideReverse, setUseClientSideReverse] = useState<boolean | null>(null);
    const reverseIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Reverse video dosyasının var olup olmadığını kontrol et
    useEffect(() => {
        const reverseVideo = reverseVideoRef.current;
        if (!reverseVideo) {
            setUseClientSideReverse(true);
            return;
        }

        let timeoutId: NodeJS.Timeout;
        let isResolved = false;

        const handleReverseError = () => {
            if (isResolved) return;
            isResolved = true;
            setUseClientSideReverse(true);
        };

        const handleReverseLoaded = () => {
            if (isResolved) return;
            isResolved = true;
            clearTimeout(timeoutId);
            setUseClientSideReverse(false);
        };

        reverseVideo.addEventListener('error', handleReverseError);
        reverseVideo.addEventListener('loadeddata', handleReverseLoaded);
        
        // Reverse videoyu yüklemeyi dene
        reverseVideo.load();

        // 2 saniye içinde yüklenmezse client-side reverse kullan
        timeoutId = setTimeout(() => {
            if (!isResolved) {
                isResolved = true;
                setUseClientSideReverse(true);
            }
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
            reverseVideo.removeEventListener('error', handleReverseError);
            reverseVideo.removeEventListener('loadeddata', handleReverseLoaded);
        };
    }, []);

    // Video oynatma mantığı
    useEffect(() => {
        const forwardVideo = forwardVideoRef.current;
        const reverseVideo = reverseVideoRef.current;
        
        if (!forwardVideo || useClientSideReverse === null) return;

        // Dosya tabanlı reverse (iki video elementi)
        const handleForwardEnded = () => {
            if (useClientSideReverse || !reverseVideo) return;
            
            forwardVideo.style.opacity = '0';
            reverseVideo.style.opacity = '1';
            setIsPlayingReverse(true);
            reverseVideo.currentTime = 0;
            reverseVideo.play();
        };

        const handleReverseEnded = () => {
            if (useClientSideReverse || !reverseVideo) return;
            
            reverseVideo.style.opacity = '0';
            forwardVideo.style.opacity = '1';
            setIsPlayingReverse(false);
            forwardVideo.currentTime = 0;
            forwardVideo.play();
        };

        // Client-side reverse (tek video elementi)
        const handleClientSideTimeUpdate = () => {
            if (!useClientSideReverse || !forwardVideo.duration) return;

            const currentTime = forwardVideo.currentTime;
            const duration = forwardVideo.duration;

            // Video sona geldiğinde geriye oynat
            if (currentTime >= duration - 0.1 && !isPlayingReverse) {
                setIsPlayingReverse(true);
                forwardVideo.pause();
                
                // Geriye doğru oynatma için interval
                reverseIntervalRef.current = setInterval(() => {
                    if (!forwardVideo.duration) return;
                    
                    const newTime = forwardVideo.currentTime - 0.033; // ~30 FPS
                    
                    if (newTime > 0) {
                        forwardVideo.currentTime = newTime;
                    } else {
                        // Başa geldi, normal oynatmaya dön
                        forwardVideo.currentTime = 0;
                        setIsPlayingReverse(false);
                        if (reverseIntervalRef.current) {
                            clearInterval(reverseIntervalRef.current);
                            reverseIntervalRef.current = null;
                        }
                        forwardVideo.play();
                    }
                }, 33); // ~30 FPS
            }
        };

        if (!useClientSideReverse) {
            forwardVideo.addEventListener('ended', handleForwardEnded);
            if (reverseVideo) {
                reverseVideo.addEventListener('ended', handleReverseEnded);
            }
        } else {
            forwardVideo.addEventListener('timeupdate', handleClientSideTimeUpdate);
        }

        // İlk video yüklendiğinde başlat
        const handleForwardLoaded = () => {
            forwardVideo.play();
        };

        if (forwardVideo.readyState >= 2) {
            handleForwardLoaded();
        } else {
            forwardVideo.addEventListener('loadedmetadata', handleForwardLoaded);
        }

        return () => {
            forwardVideo.removeEventListener('ended', handleForwardEnded);
            forwardVideo.removeEventListener('timeupdate', handleClientSideTimeUpdate);
            forwardVideo.removeEventListener('loadedmetadata', handleForwardLoaded);
            if (reverseVideo) {
                reverseVideo.removeEventListener('ended', handleReverseEnded);
            }
            if (reverseIntervalRef.current) {
                clearInterval(reverseIntervalRef.current);
                reverseIntervalRef.current = null;
            }
        };
    }, [useClientSideReverse, isPlayingReverse]);

    return (
        <section className="w-full h-screen bg-white p-6 md:p-2">
            <div className="relative w-full h-full overflow-hidden rounded-[1rem] bg-gray-900 shadow-2xl">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    {/* Normal Video */}
                    <video
                        ref={forwardVideoRef}
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                        style={{ filter: 'brightness(0.85)', opacity: isPlayingReverse ? 0 : 1 }}
                    >
                        <source src="/hero-video.mov" type="video/quicktime" />
                        <source src="/hero-video.mp4" type="video/mp4" />
                        <source src="/hero-video.webm" type="video/webm" />
                    </video>
                    {/* Reverse Video - Sadece dosya tabanlı reverse kullanılıyorsa göster */}
                    {!useClientSideReverse && (
                        <video
                            ref={reverseVideoRef}
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                            style={{ filter: 'brightness(0.85)', opacity: isPlayingReverse ? 1 : 0 }}
                        >
                            <source src="/hero-video-reverse.mov" type="video/quicktime" />
                            <source src="/hero-video-reverse.mp4" type="video/mp4" />
                            <source src="/hero-video-reverse.webm" type="video/webm" />
                        </video>
                    )}
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>

                {/* Components */}
                <HeroSocials />
                <HeroHeading />
                <ImportantEventBox />
            </div>
        </section>
    );
};

export default Hero;
