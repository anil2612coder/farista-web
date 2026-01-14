"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { HiDownload, HiPlay } from "react-icons/hi";
import { FaGooglePlay } from "react-icons/fa";
import { IoArrowDown } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";

// Typewriter Effect Hook
function useTypewriter(text: string, speed: number = 50) {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        setDisplayedText("");
        setIsTyping(true);

        const typingInterval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                setIsTyping(false);
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [text, speed]);

    return { displayedText, isTyping };
}

export default function Hero() {
    const welcomeText = "Welcome to Farishta FM 🌙";
    const descriptionText = "Your peaceful space for Islamic stories, audiobooks, and soulful reflections. Discover timeless wisdom, inner calm, and faith-strengthening stories inspired by the Holy Quran and the lives of the Prophets (peace be upon them). Whether you're driving, resting, or before sleep — let every story bring you closer to Allah and fill your heart with serenity.";

    const { displayedText: welcomeDisplayed, isTyping: isWelcomeTyping } = useTypewriter(welcomeText, 80);
    const [showDescription, setShowDescription] = useState(false);
    const { displayedText: descDisplayed, isTyping: isDescTyping } = useTypewriter(descriptionText, 30);

    useEffect(() => {
        if (!isWelcomeTyping) {
            const timer = setTimeout(() => setShowDescription(true), 500);
            return () => clearTimeout(timer);
        }
    }, [isWelcomeTyping]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    // Hanging/Pendulum motion for phone
    const hangingVariants: Variants = {
        animate: {
            rotate: [-8, 8, -8],
            y: [0, 20, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                rotate: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            },
        },
    };

    const orbVariants: Variants = {
        animate: {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const stats = [
        { value: "50K+", label: "Downloads", delay: 0 },
        { value: "4.9", label: "App Rating", delay: 0.1 },
        { value: "50+", label: "Countries", delay: 0.2 },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center animated-gradient overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs with Animation - Islamic Colors */}
                <motion.div
                    variants={orbVariants}
                    animate="animate"
                    className="absolute top-1/4 -left-16 sm:-left-24 md:-left-32 lg:-left-40 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] bg-emerald-600/25 rounded-full blur-3xl"
                    style={{ backgroundColor: 'rgba(5, 150, 105, 0.25)' }}
                />
                <motion.div
                    variants={orbVariants}
                    animate="animate"
                    style={{ transitionDelay: "1s", backgroundColor: 'rgba(217, 119, 6, 0.25)' }}
                    className="absolute bottom-1/4 -right-16 sm:-right-24 md:-right-32 lg:-right-40 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] rounded-full blur-3xl"
                />
                <motion.div
                    variants={orbVariants}
                    animate="animate"
                    style={{ transitionDelay: "2s", backgroundColor: 'rgba(30, 58, 138, 0.15)' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl"
                />

                {/* Animated Grid Pattern - Islamic Green */}
                <motion.div
                    className="absolute inset-0 opacity-8 sm:opacity-12 md:opacity-15"
                    style={{
                        backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(5, 150, 105, 0.08) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "40px 40px"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-2 sm:px-2 md:px-2 lg:px-3 xl:px-4 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative z-10"
            >
                <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-10 md:gap-10 lg:gap-12 xl:gap-16">
                    {/* Text Content */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 text-center lg:text-left w-full lg:w-auto"
                    >
                        {/* Badge with Moon Icon */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2  py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full glass mb-4 sm:mb-5 md:mb-6"
                        >
                            <motion.span
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <BsMoonStars className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-400" />
                            </motion.span>
                            <span className="text-xs sm:text-sm md:text-base text-amber-100 font-inter">
                                Now Available on Android
                            </span>
                        </motion.div>

                        {/* Welcome Text with Typewriter Effect */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-16 font-outfit min-h-[1.2em]"
                        >
                            <span className="text-white block">
                                {welcomeDisplayed}
                                {isWelcomeTyping && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block ml-1"
                                    >
                                        |
                                    </motion.span>
                                )}
                            </span>
                        </motion.h1>


                        <AnimatePresence>
                            {showDescription && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-6 sm:mb-7 md:mb-8 lg:mb-10"
                                >
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-3xl mx-auto lg:mx-0 font-inter leading-relaxed min-h-[120px] sm:min-h-[140px] md:min-h-[160px]">
                                        {descDisplayed}
                                        {isDescTyping && (
                                            <motion.span
                                                animate={{ opacity: [1, 0] }}
                                                transition={{ duration: 0.8, repeat: Infinity }}
                                                className="inline-block ml-1"
                                            >
                                                |
                                            </motion.span>
                                        )}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>


                        <AnimatePresence>
                            {!isDescTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col relative top-4 lg:top-8 sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start mb-6 sm:mb-8 md:mb-10"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href="https://play.google.com/store/apps/details?id=com.farishta.app&pcampaignid=web_share"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-shine group flex items-center justify-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-emerald-500/40 transition-all text-sm sm:text-base md:text-lg font-inter"
                                        >
                                            <FaGooglePlay className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                            <span>Download </span>
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <HiDownload className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href="#features"
                                            className="flex items-center justify-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-emerald-500/30 text-white font-semibold rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all text-sm sm:text-base md:text-lg font-inter"
                                        >
                                            <HiPlay className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                            <span>Learn More</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>


                        <AnimatePresence>
                            {!isDescTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-wrap gap-4 relative top-6 lg:top-12 sm:gap-6 md:gap-8 lg:gap-10 justify-center lg:justify-start"
                                >
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.7 + index * 0.1,
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 15,
                                            }}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className="text-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px] lg:min-w-[100px]"
                                        >
                                            <motion.div
                                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold gradient-text font-outfit"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.9 + index * 0.1 }}
                                            >
                                                {stat.value}
                                            </motion.div>
                                            <div className="text-gray-400 text-xs sm:text-sm md:text-base mt-1 font-inter">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Phone Mockup with Hanging Motion */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 relative w-full lg:w-auto flex justify-center lg:justify-end mt-4 sm:mt-6 md:mt-8 lg:mt-0"
                    >
                        {/* Hanging String/Chain */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full z-0">
                            <motion.div
                                className="w-0.5 sm:w-1 bg-gradient-to-t from-transparent via-amber-500/40 to-emerald-500/50"
                                style={{ height: '60px' }}
                                animate={{
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>

                        <motion.div
                            variants={hangingVariants}
                            animate="animate"
                            className="relative w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-[400px] mx-auto origin-top"
                            style={{
                                transformOrigin: "top center",
                            }}
                        >
                            {/* Enhanced Glow Effect - Islamic Colors */}
                            <motion.div
                                className="absolute -inset-3 sm:-inset-4 md:-inset-6 lg:-inset-8 rounded-[3rem] blur-3xl"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.4), rgba(217, 119, 6, 0.4), rgba(30, 58, 138, 0.3))',
                                }}
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.4, 0.6, 0.4],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* App Screenshot */}
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src="/farishta_fm_app.png"
                                    alt="Farishta FM App - Your Spiritual Audio Companion"
                                    width={400}
                                    height={800}
                                    className="relative z-10 drop-shadow-2xl w-full h-auto rounded-[2rem] sm:rounded-[2.5rem]"
                                    priority
                                />
                            </motion.div>

                            {/* Floating Particles - Islamic Colors */}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                                    style={{
                                        backgroundColor: i % 2 === 0 ? 'rgba(5, 150, 105, 0.4)' : 'rgba(217, 119, 6, 0.4)',
                                        top: `${15 + i * 20}%`,
                                        left: i % 2 === 0 ? "-8%" : "108%",
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 3 + i * 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>


        </section>
    );
}

