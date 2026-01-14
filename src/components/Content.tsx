"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaPlay, FaHeart, FaHeadphones, FaArrowRight } from "react-icons/fa";

const categories = [
    {
        title: "Quran Recitations",
        description: "Beautiful recitations from renowned Qaris",
        count: "114 Surahs",
        image: "🕌",
        gradient: "from-emerald-600/30 to-teal-600/30",
        borderColor: "border-emerald-500/30",
        delay: 0,
    },
    {
        title: "Islamic Lectures",
        description: "Learn from world-renowned scholars",
        count: "5000+ Hours",
        image: "📚",
        gradient: "from-teal-600/30 to-cyan-600/30",
        borderColor: "border-teal-500/30",
        delay: 0.1,
    },
    {
        title: "Nasheeds",
        description: "Soul-stirring Islamic songs",
        count: "2000+ Tracks",
        image: "🎵",
        gradient: "from-amber-600/30 to-yellow-600/30",
        borderColor: "border-amber-500/30",
        delay: 0.2,
    },
    {
        title: "Duas & Adhkar",
        description: "Daily supplications and remembrance",
        count: "500+ Duas",
        image: "🤲",
        gradient: "from-emerald-500/30 to-teal-500/30",
        borderColor: "border-emerald-500/30",
        delay: 0.3,
    },
];

const featuredContent = [
    { title: "Surah Al-Rahman", artist: "Mishary Rashid", duration: "12:45", plays: "2.5M" },
    { title: "The Power of Dua", artist: "Mufti Menk", duration: "45:20", plays: "1.8M" },
    { title: "Tala' Al-Badru", artist: "Maher Zain", duration: "4:32", plays: "3.2M" },
    { title: "Morning Adhkar", artist: "Various Artists", duration: "15:00", plays: "982K" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
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

export default function Content() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="content" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#050505] overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0 opacity-20 sm:opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(5, 150, 105, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(217, 119, 6, 0.15) 0%, transparent 50%)`
                    }}
                    animate={{
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center l mx-auto mb-10 sm:mb-12 md:mb-16"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass mb-4 sm:mb-5 md:mb-6"
                    >
                        <FaHeadphones className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
                        <span className="text-xs sm:text-sm md:text-base text-teal-100 font-inter">Content Library</span>
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 font-outfit text-center"
                    >
                        <span className="text-white block">Explore Our Vast</span>
                        <span className="gradient-text block">Content Library</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-sm sm:text-base md:text-lg relative top-2 text-gray-300 px-2 sm:px-4 font-inter leading-relaxed text-center"
                    >
                        Thousands of hours of carefully curated spiritual content,
                        from Quran recitations to inspiring lectures and beautiful nasheeds.
                    </motion.p>
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 relative top-4 sm:top-6 sm:gap-4 md:gap-5 lg:gap-6 mb-10 sm:mb-12 md:mb-16"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            custom={index}
                            whileHover={{ y: -5, scale: 1.03 }}
                            className={`group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.gradient} border ${category.borderColor} cursor-pointer transition-all duration-300 hover:border-opacity-60 text-center`}
                        >
                            <motion.div
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 flex justify-center"
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 2 + index * 0.3,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                    ease: "easeInOut",
                                }}
                            >
                                {category.image}
                            </motion.div>
                            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg relative top-2 font-semibold text-white mb-1 sm:mb-2 font-outfit text-center">
                                {category.title}
                            </h3>
                            <p className="text-gray-300 text-[10px]  relative top-2 sm:text-xs md:text-sm mb-2 sm:mb-3 line-clamp-2 font-inter text-center">
                                {category.description}
                            </p>
                            <div className="flex items-center justify-center gap-2 relative top-4">
                                <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 font-inter text-center">
                                    {category.count}
                                </span>
                               
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Featured Content */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center relative top-10"
                >
                    {/* Left - Visual */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 w-full max-w-md lg:max-w-none flex justify-center"
                    >
                        <div className="relative">
                            {/* Album Art Grid */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-10 max-w-sm sm:max-w-md mx-auto">
                                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                                    <motion.div
                                        className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl shadow-xl shadow-emerald-500/30"
                                        animate={{
                                            y: [0, -15, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        🕋
                                    </motion.div>
                                    <motion.div
                                        className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl shadow-xl shadow-teal-500/30 relative top-5"
                                        animate={{
                                            y: [0, -15, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: 1,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        📖
                                    </motion.div>
                                </div>
                                <div className="space-y-3 sm:space-y-4 md:space-y-5 pt-6 sm:pt-8 md:pt-10">
                                    <motion.div
                                        className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-600 to-yellow-700 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl shadow-xl shadow-amber-500/30"
                                        animate={{
                                            y: [0, -15, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: 0.5,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        🌙
                                    </motion.div>
                                    <motion.div
                                        className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl shadow-xl shadow-emerald-500/30 relative top-5"
                                        animate={{
                                            y: [0, -15, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: 1.5,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        ✨
                                    </motion.div>
                                </div>
                            </div>

                         
                        </div>
                    </motion.div>

                    {/* Right - Track List */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 w-full"
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6 text-center lg:text-left font-outfit">
                            Trending This Week
                        </h3>

                        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 relative top-5">
                            {featuredContent.map((track, index) => (
                                <motion.div
                                    key={track.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ x: 5, scale: 1.02 }}
                                    className="group flex items-center gap-2 sm:gap-4 md:gap-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-emerald-500/30 "
                                >
                                    {/* Track Number */}
                                    <motion.div
                                        className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-gray-500 group-hover:hidden text-xs sm:text-sm font-inter"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </motion.div>
                                    <motion.div
                                        className="w-6 h-6 sm:w-8 sm:h-8 hidden items-center justify-center text-emerald-400 group-hover:flex"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <FaPlay className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </motion.div>

                                    {/* Track Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="text-white font-medium truncate text-sm sm:text-base font-inter">
                                            {track.title}
                                        </div>
                                        <div className="text-gray-400 text-xs sm:text-sm truncate font-inter">
                                            {track.artist}
                                        </div>
                                    </div>

                                    {/* Plays */}
                                    <div className="text-gray-400 text-xs sm:text-sm hidden sm:block font-inter">
                                        {track.plays} plays
                                    </div>

                                    {/* Duration */}
                                    <div className="text-gray-400 text-xs sm:text-sm font-inter">
                                        {track.duration}
                                    </div>

                                    {/* Actions */}
                                    <motion.div
                                        className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-emerald-400 transition-colors">
                                            <FaHeart className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </button>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* <motion.button
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-4 sm:mt-6 w-full py-3 sm:py-4 rounded-xl border border-emerald-500/30 text-gray-300 hover:text-white hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2 font-inter"
                        >
                            <span className="text-sm sm:text-base">View All Content</span>
                            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.button> */}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
