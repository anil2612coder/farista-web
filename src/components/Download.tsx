"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

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
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function Download() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="download" className="relative pt-12 pb-24 sm:pt-12 sm:pb-20 md:pb-28 lg:pb-32 xl:pt-12 xl:pb-28 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-900/30 via-[#0a0a0a] to-amber-900/30" />

            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-amber-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: 1,
                        ease: "easeInOut",
                    }}
                />

                {/* Floating Elements */}
                <motion.div
                    className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 border border-emerald-500/20 rounded-2xl rotate-12 hidden sm:block"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [12, 15, 12],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-12 h-12 sm:w-16 sm:h-16 border border-amber-500/20 rounded-full hidden sm:block"
                    animate={{
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: 0.5,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-20 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/10 rounded-lg rotate-45 hidden sm:block"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [45, 50, 45],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: 1,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full glass mb-6 sm:mb-8"
                    >
                        <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                        </motion.span>
                        <span className="text-xs sm:text-sm md:text-base text-emerald-100 font-inter">Download Now</span>
                    </motion.div>


                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-center font-outfit"
                    >
                        <span className="text-white block">Start Your Spiritual</span>
                        <span className="gradient-text block">Journey Today</span>
                    </motion.h2>


                    <motion.p
                        variants={itemVariants}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300  mx-auto mb-8 sm:mb-10 md:mb-12 px-4 font-inter leading-relaxed text-center relative top-3"
                    >
                        Download Farishta FM for free and unlock a world of spiritual content. Available on Android devices.
                    </motion.p>


                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col relative top-10 sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center mb-8 sm:mb-10 md:mb-12 px-4"
                    >

                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="https://play.google.com/store/apps/details?id=com.farishta.app&pcampaignid=web_share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 bg-white text-black rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/20 font-inter"
                            >
                                <FaGooglePlay className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                                <div className="text-left">
                                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-inter">GET IT ON</div>
                                    <div className="text-base sm:text-lg md:text-xl font-semibold font-outfit">Google Play</div>
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>


                    <motion.div
                        variants={itemVariants}
                        className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl glass mb-8 sm:mb-10 md:mb-12 relative top-12"
                    >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden">
                            <Image
                                src="/qr.png"
                                alt="Scan to download Farishta FM app"
                                width={112}
                                height={112}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                            />
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="text-white font-semibold mb-1 text-sm sm:text-base md:text-lg font-outfit">Scan to Download</div>
                            <div className="text-gray-400 text-xs sm:text-sm md:text-base font-inter">Point your camera at the QR code<br />to download the app</div>
                        </div>
                    </motion.div>


                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-2 relative top-20"
                    >
                        {[
                            "🎵 10,000+ hours of content",
                            "📴 Offline mode",
                            "🔔 Daily reminders",
                            "🌙 Dark mode",
                            "🆓 Free to use",
                        ].map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-emerald-500/30 transition-all text-xs sm:text-sm md:text-base font-inter cursor-pointer"
                            >
                                {feature}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
