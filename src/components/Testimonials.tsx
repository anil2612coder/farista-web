"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState<1 | -1>(1);

    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-120px" });

    const safeIndex = useMemo(() => {
        const len = testimonials.length || 1;
        return ((activeIndex % len) + len) % len;
    }, [activeIndex]);

    useEffect(() => {
        if (isPaused) return;
        const interval = window.setInterval(() => {
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => window.clearInterval(interval);
    }, [isPaused]);

    const goTo = (next: number) => {
        setDirection(next > safeIndex ? 1 : -1);
        setActiveIndex(next);
    };

    const next = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setActiveIndex((prevIdx) => (prevIdx - 1 + testimonials.length) % testimonials.length);
    };

    const slideVariants = {
        enter: (dir: 1 | -1) => ({
            opacity: 0,
            x: dir === 1 ? 40 : -40,
            y: 10,
        }),
        center: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: "spring" as const, stiffness: 140, damping: 18 },
        },
        exit: (dir: 1 | -1) => ({
            opacity: 0,
            x: dir === 1 ? -40 : 40,
            y: -10,
            transition: { duration: 0.2 },
        }),
    };

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#0a0a0a] overflow-hidden"
        >
          
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-24 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-24 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-amber-600/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center  mx-auto mb-10 sm:mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass mb-4 sm:mb-6">
                        <HiChatBubbleLeftRight className="w-4 h-4 text-amber-400" />
                        <span className="text-xs sm:text-sm text-amber-100 font-inter">Testimonials</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 font-outfit">
                        <span className="text-white block">Loved by Muslims</span>
                        <span className="gradient-text block">Worldwide</span>
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg px-2 sm:px-4 font-inter leading-relaxed relative top-4">
                        Join hundreds of thousands of users who have made Farishta FM a part of their daily spiritual routine.
                    </p>
                </motion.div>

               
                <div className="relative top-8 mx-auto">
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                       
                        <div className="relative">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={testimonials[safeIndex]?.id ?? safeIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl glass border border-white/10"
                                >
                                    
                                    <div className="flex items-start justify-between gap-4 mb-4 sm:mb-6">
                                        <div className="flex items-center gap-2">
                                            <RiDoubleQuotesL className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400/50" />
                                            <div className="flex items-center gap-1">
                                                {Array.from({ length: testimonials[safeIndex].rating }).map((_, i) => (
                                                    <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                                                ))}
                                            </div>
                                        </div>

                                         
                                        <div className="hidden sm:flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={prev}
                                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex items-center justify-center"
                                                aria-label="Previous testimonial"
                                            >
                                                <FiChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={next}
                                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex items-center justify-center"
                                                aria-label="Next testimonial"
                                            >
                                                <FiChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                   
                                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8 font-inter">
                                        “{testimonials[safeIndex].text}”
                                    </p>

                                   
                                    <div className="flex items-center justify-between gap-4 relative top-3">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-linear-to-br from-emerald-600 to-amber-600 flex items-center justify-center text-xl sm:text-2xl">
                                                {testimonials[safeIndex].avatar}
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold text-sm sm:text-base font-outfit">
                                                    {testimonials[safeIndex].name}
                                                </div>
                                                <div className="text-gray-400 text-xs sm:text-sm font-inter">
                                                    {testimonials[safeIndex].location}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm:hidden flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={prev}
                                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex items-center justify-center"
                                                aria-label="Previous testimonial"
                                            >
                                                <FiChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={next}
                                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex items-center justify-center"
                                                aria-label="Next testimonial"
                                            >
                                                <FiChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                   
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goTo(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === activeIndex
                                    ? "w-8 bg-linear-to-r from-emerald-500 to-amber-500"
                                    : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

              
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 relative top-4"
                >
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
                </motion.div>
            </div>
            </div>
        </section>
    );
}
