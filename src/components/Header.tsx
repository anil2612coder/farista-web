"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, Variants } from "framer-motion";
import { HiMenu, HiX, HiDownload } from "react-icons/hi";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Content", href: "#content" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Download", href: "#download" },
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
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const mobileMenuVariants: Variants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    };

    const mobileItemVariants: Variants = {
        closed: {
            opacity: 0,
            x: -20,
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
            },
        },
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "glass py-2 sm:py-3 shadow-lg shadow-purple-500/10"
                    : "bg-transparent py-3 sm:py-4 md:py-4"
                }`}
        >
            <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
            >
                {/* Logo */}
                <motion.div variants={itemVariants}>
                    <Link
                        href="/"
                        className="flex items-center gap-2 sm:gap-3 group relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <Image
                                src="/farishta_logo.png"
                                alt="Farishta FM Logo"
                                width={56}
                                height={56}
                                className="object-cover relative z-10"
                                priority
                            />
                        </motion.div>
                        <motion.span
                            className="text-xl sm:text-2xl md:text-3xl font-bold"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="gradient-text font-outfit">Farishta</span>
                            <span className="text-white/90 font-outfit"> FM</span>
                        </motion.span>
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <motion.div
                    variants={itemVariants}
                    className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10"
                >
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            variants={itemVariants}
                            custom={index}
                        >
                            <Link
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors relative group font-inter text-sm lg:text-base font-medium"
                            >
                                <motion.span
                                    className="block"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    {link.name}
                                </motion.span>
                                <motion.span
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    variants={itemVariants}
                    className="hidden md:block"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.farishta.app&pcampaignid=web_share"
                            target="_blank"
                            className="btn-shine relative px-5 py-2.5 lg:px-6 lg:py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all font-inter text-sm lg:text-base flex items-center gap-2"
                        >
                            <HiDownload className="w-4 h-4 lg:w-5 lg:h-5" />
                            <span>Get the App</span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    variants={itemVariants}
                    className="md:hidden text-white p-2.5 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FiX className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FiMenu className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden absolute top-full left-0 right-0 glass overflow-hidden"
                    >
                        <motion.div
                            className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4"
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    variants={mobileItemVariants}
                                    custom={index}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors py-3 sm:py-3.5 text-base sm:text-lg font-inter font-medium block"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <motion.span
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2"
                                        >
                                            {link.name}
                                        </motion.span>
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                variants={mobileItemVariants}
                                className="mt-2"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        href="https://play.google.com/store/apps/details?id=com.farishta.app&pcampaignid=web_share"
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full text-center text-base sm:text-lg font-inter"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <HiDownload className="w-5 h-5" />
                                        <span>Get the App</span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
