"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center animated-gradient overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left animate-slide-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-sm text-gray-300">Now Available on iOS & Android</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                            <span className="text-white">Your Daily Dose of</span>
                            <br />
                            <span className="gradient-text">Spiritual Peace</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-8 mx-auto lg:mx-0">
                            Stream Quran recitations, Islamic lectures, nasheeds, and inspiring
                            stories. Your personal companion for spiritual growth and inner peace.
                        </p>

                        {/* Audio Wave */}
                        <div className="flex justify-center lg:justify-start items-center gap-4 mb-8">
                            <div className="audio-wave flex items-end h-8">
                                <span style={{ height: '15px' }} />
                                <span style={{ height: '25px' }} />
                                <span style={{ height: '10px' }} />
                                <span style={{ height: '30px' }} />
                                <span style={{ height: '20px' }} />
                                <span style={{ height: '15px' }} />
                                <span style={{ height: '25px' }} />
                            </div>
                            <span className="text-gray-400 text-sm">10,000+ hours of content</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="#download"
                                className="btn-shine group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/30 transition-all hover:scale-105"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                Download Free
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="#features"
                                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                Learn More
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 mt-12 justify-center lg:justify-start">
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">500K+</div>
                                <div className="text-gray-500 text-sm">Downloads</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">4.9</div>
                                <div className="text-gray-500 text-sm">App Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">50+</div>
                                <div className="text-gray-500 text-sm">Countries</div>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockup - Using actual app screenshot */}
                    <div className="flex-1 relative">
                        <div className="relative w-80 sm:w-96 mx-auto animate-float">
                            {/* Glow Effect */}
                            <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-[3rem] blur-3xl" />

                            {/* App Screenshot */}
                            <div className="relative">
                                <Image
                                    src="/farishta_fm_app.png"
                                    alt="Farishta FM App - Your Spiritual Audio Companion"
                                    width={400}
                                    height={800}
                                    className="relative z-10 drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
