"use client"

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi";

const footerLinks = {
    product: [
        { name: "Features", href: "#features" },
        { name: "Content Library", href: "#content" },
        { name: "Download", href: "#download" },
        { name: "Premium", href: "#premium" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ],
    support: [
        { name: "Help Center", href: "/help" },
        { name: "FAQs", href: "/faqs" },
        { name: "Community", href: "/community" },
        { name: "Feedback", href: "/feedback" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
};

const socialLinks = [
    {
        name: "Facebook",
        href: "https://facebook.com/farishtafm",
        icon: FaFacebookF,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/farishtafm",
        icon: FaXTwitter,
    },
    {
        name: "Instagram",
        href: "https://instagram.com/farishtafm",
        icon: FaInstagram,
    },
    {
        name: "YouTube",
        href: "https://youtube.com/@farishtafm",
        icon: FaYoutube,
    },
];

export default function Footer() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <footer ref={ref} className="relative bg-[#050505] border-t border-white/5 overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute -top-24 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl"
                    animate={{ opacity: [0.06, 0.14, 0.06], scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-24 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-amber-600/10 rounded-full blur-3xl"
                    animate={{ opacity: [0.06, 0.14, 0.06], scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 relative z-10">
                {/* Main Footer Content */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12"
                >
                    {/* Brand Column */}
                    <div className="col-span-2 mb-4 sm:mb-0">
                        <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl">
                                <Image
                                    src="/farishta_logo.png"
                                    alt="Farishta FM Logo"
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-lg sm:text-xl font-bold">
                                <span className="gradient-text">Farishta</span>
                                <span className="text-white/90"> FM</span>
                            </span>
                        </Link>
                        <p className="text-gray-300 mb-4 sm:mb-6 max-w-xs text-sm sm:text-base font-inter leading-relaxed">
                            Your spiritual audio companion. Stream Quran, lectures, nasheeds, and more.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 sm:gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base font-outfit">Product</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white hover:underline underline-offset-4 decoration-emerald-500/60 transition-colors text-xs sm:text-sm font-inter"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base font-outfit">Company</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white hover:underline underline-offset-4 decoration-emerald-500/60 transition-colors text-xs sm:text-sm font-inter"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base font-outfit">Support</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white hover:underline underline-offset-4 decoration-emerald-500/60 transition-colors text-xs sm:text-sm font-inter"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base font-outfit">Legal</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white hover:underline underline-offset-4 decoration-emerald-500/60 transition-colors text-xs sm:text-sm font-inter"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="py-6 sm:py-8 border-t border-b border-white/5 mb-6 sm:mb-8"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base font-outfit">Subscribe to our newsletter</h3>
                            <p className="text-gray-400 text-xs sm:text-sm font-inter">Stay updated with new content and features</p>
                        </div>
                        <form className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-56 lg:w-64 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm font-inter"
                            />
                            <button
                                type="submit"
                                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-linear-to-r from-emerald-600 to-amber-600 text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 transition-all text-sm font-outfit flex items-center justify-center gap-2"
                            >
                                <HiSparkles className="w-4 h-4" />
                                Subscribe
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm font-inter"
                >
                    <div className="text-center md:text-left">
                        © {new Date().getFullYear()} Farishta FM. All rights reserved.
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <span>Made with 💜 for the Ummah</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
