"use client";

import { useState, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        name: "Ahmed Rahman",
        location: "Dubai, UAE",
        avatar: "👨‍💼",
        rating: 5,
        text: "Farishta FM has transformed my daily commute into a spiritual journey. The quality of Quran recitations is exceptional, and the personalized recommendations always match my mood.",
    },
    {
        id: 2,
        name: "Fatima Khan",
        location: "London, UK",
        avatar: "👩‍🦱",
        rating: 5,
        text: "As a working mom, I love how easy it is to listen to Islamic lectures while doing chores. The offline mode is a lifesaver when traveling. Highly recommend to every Muslim family!",
    },
    {
        id: 3,
        name: "Omar Al-Farsi",
        location: "Riyadh, Saudi Arabia",
        avatar: "👨",
        rating: 5,
        text: "The variety of content is amazing - from Quran tafseer to nasheeds for my kids. It's become an essential part of our household. JazakAllah to the Farishta team!",
    },
    {
        id: 4,
        name: "Aisha Begum",
        location: "Karachi, Pakistan",
        avatar: "👩‍💻",
        rating: 5,
        text: "Beautiful app with a lovely interface. I especially appreciate the morning and evening adhkar reminders. It helps me stay connected to my deen throughout the day.",
    },
    {
        id: 5,
        name: "Yusuf Ibrahim",
        location: "Toronto, Canada",
        avatar: "👨‍🎓",
        rating: 5,
        text: "I've tried many Islamic apps but Farishta FM stands out. The curated playlists for different moods and occasions are thoughtfully designed. A must-have app!",
    },
    {
        id: 6,
        name: "Maryam Hassan",
        location: "Sydney, Australia",
        avatar: "👩‍🔬",
        rating: 5,
        text: "The lecture series on Islamic history helped me reconnect with my faith. The app is intuitive, beautiful, and most importantly, authentic in its content.",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="relative py-16 sm:py-20 lg:py-28 bg-[#0a0a0a] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-purple-600/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 sm:mb-6">
                        <span className="text-sm text-amber-400">💬 Testimonials</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-white">Loved by Muslims</span>
                        <br />
                        <span className="gradient-text">Worldwide</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg px-4">
                        Join hundreds of thousands of users who have made Farishta FM
                        a part of their daily spiritual routine.
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Main Testimonial */}
                    <div className="relative">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`transition-all duration-500 ${index === activeIndex
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 absolute top-0 left-0 right-0 translate-y-8 pointer-events-none"
                                    }`}
                            >
                                <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl glass gradient-border">
                                    {/* Quote Icon */}
                                    <div className="mb-4 sm:mb-6">
                                        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-500/30" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4 sm:mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                                        &quot;{testimonial.text}&quot;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-xl sm:text-2xl">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                                            <div className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === activeIndex
                                    ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-500"
                                    : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
                    <div className="text-center min-w-[80px]">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">500K+</div>
                        <div className="text-gray-500 text-xs sm:text-sm">Happy Users</div>
                    </div>
                    <div className="hidden sm:block w-px h-10 sm:h-12 bg-gray-800" />
                    <div className="text-center min-w-[80px]">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">4.9★</div>
                        <div className="text-gray-500 text-xs sm:text-sm">App Store Rating</div>
                    </div>
                    <div className="hidden sm:block w-px h-10 sm:h-12 bg-gray-800" />
                    <div className="text-center min-w-[80px]">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">50+</div>
                        <div className="text-gray-500 text-xs sm:text-sm">Countries</div>
                    </div>
                    <div className="hidden sm:block w-px h-10 sm:h-12 bg-gray-800" />
                    <div className="text-center min-w-[80px]">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">10K+</div>
                        <div className="text-gray-500 text-xs sm:text-sm">Hours of Content</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
