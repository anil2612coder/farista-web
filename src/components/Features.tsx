"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import {
    FaBookQuran,
    FaMicrophone,
    FaMusic,
    FaHeart,
    FaDownload,
    FaClock,
    FaArrowRight
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi";

const features = [
    {
        icon: FaBookQuran,
        title: "Complete Quran",
        description: "Access the complete Quran with recitations from world-renowned Qaris in beautiful audio quality.",
        gradient: "from-emerald-600 to-teal-500",
        delay: 0,
    },
    {
        icon: FaMicrophone,
        title: "Islamic Lectures",
        description: "Learn from renowned scholars with thousands of hours of educational content on various topics.",
        gradient: "from-teal-600 to-cyan-500",
        delay: 0.1,
    },
    {
        icon: FaMusic,
        title: "Nasheeds & Duas",
        description: "Beautiful nasheeds and powerful duas to elevate your spiritual experience and daily worship.",
        gradient: "from-amber-600 to-yellow-500",
        delay: 0.2,
    },
    {
        icon: FaHeart,
        title: "Personalized For You",
        description: "AI-powered recommendations based on your preferences, listening history, and spiritual goals.",
        gradient: "from-emerald-500 to-teal-400",
        delay: 0.3,
    },
    {
        icon: FaDownload,
        title: "Offline Mode",
        description: "Download your favorite content and listen anywhere, anytime - even without internet connection.",
        gradient: "from-teal-600 to-emerald-500",
        delay: 0.4,
    },
    {
        icon: FaClock,
        title: "Daily Reminders",
        description: "Set personalized reminders for prayers, Quran reading, and daily spiritual practices.",
        gradient: "from-amber-500 to-emerald-500",
        delay: 0.5,
    },
];

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
    hidden: { opacity: 0, y: 30 },
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

export default function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="features" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#0a0a0a] overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald-600/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-amber-600/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: 1,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10  justify-center">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center  mx-auto mb-10 sm:mb-12 md:mb-16"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass mb-4 sm:mb-5 md:mb-6"
                    >
                        <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                        </motion.span>
                        <span className="text-xs sm:text-sm md:text-base text-amber-100 font-inter">Features</span>
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 font-outfit text-center"
                    >
                        <span className="text-white block">Everything You Need for</span>
                        <span className="gradient-text block">Spiritual Growth</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-sm relative top-4 sm:text-base md:text-lg text-gray-300 px-2 sm:px-4 font-inter leading-relaxed text-center"
                    >
                        Farishta FM brings together the best spiritual content in one beautiful app,
                        designed to make your journey towards peace effortless.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 relative  top-12"
                >
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                custom={index}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* Gradient Border Effect */}
                                <motion.div
                                    className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                                    animate={{
                                        opacity: [0, 0.3, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.3,
                                        ease: "easeInOut",
                                    }}
                                />

                                <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl bg-[#111] border border-white/5 h-full backdrop-blur-sm text-center">
                                    {/* Icon */}
                                    <motion.div
                                        className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 sm:mb-5 md:mb-6 text-white shadow-lg mx-auto`}
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 font-outfit text-center relative top-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 relative top-4 leading-relaxed text-sm sm:text-base mb-4 sm:mb-5 font-inter text-center">
                                        {feature.description}
                                    </p>


                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
