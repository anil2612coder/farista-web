"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Content", href: "#content" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Download", href: "#download" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/farishtafm", icon: FaFacebookF },
  { name: "Twitter", href: "https://twitter.com/farishtafm", icon: FaXTwitter },
  { name: "Instagram", href: "https://instagram.com/farishtafm", icon: FaInstagram },
  { name: "YouTube", href: "https://youtube.com/@farishtafm", icon: FaYoutube },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-white/10 bg-[#050608]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-amber-500/5" />
        {/* Glow Orbs */}
        <motion.div
          className="absolute -top-32 left-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-500/10 blur-3xl"
          animate={{ opacity: [0.06, 0.18, 0.06], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 right-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-amber-500/10 blur-3xl"
          animate={{ opacity: [0.06, 0.18, 0.06], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        />

        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-10 py-12 sm:py-14 lg:grid-cols-4 lg:gap-12 lg:py-16"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
                <Image
                  src="/farishta_logo.png"
                  alt="Farishta FM Logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="leading-tight">
                <div className="text-xl font-bold tracking-tight sm:text-2xl">
                  <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                    Farishta
                  </span>
                  <span className="text-white/90"> FM</span>
                </div>
                <div className="text-xs text-white/40 sm:text-sm">
                  Spiritual Audio Companion
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-300 sm:text-base relative top-4">
              Your spiritual audio companion. Stream Quran, lectures, nasheeds,
              and more — anytime, anywhere.
            </p>

            {/* Social */}
            <div className="mt-6 flex flex-wrap gap-3 relative top-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-white"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white sm:text-base">
              Explore
            </h3>

            {/* 2 columns on mobile */}
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-400 transition hover:text-white hover:underline hover:decoration-emerald-500/70 hover:underline-offset-4 sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-sm font-semibold text-white sm:text-base">
              Download the App
            </h3>

            <p className="mt-4 text-xs text-gray-400 sm:text-sm">
              Get Farishta FM on Google Play.
            </p>

            <Link
              href="https://play.google.com/store/apps/details?id=com.farishta.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-600 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/10 transition hover:brightness-110 active:scale-[0.98]"
            >
              Get it on Google Play
            </Link>

            <div className="mt-4 text-[11px] text-white/40">
              Available for Android devices.
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center text-xs text-gray-500 sm:flex-row sm:text-sm"
        >
          <div>© {new Date().getFullYear()} Farishta FM. All rights reserved.</div>
          <div className="text-white/40">Made with 💜 for the Ummah</div>
        </motion.div>
      </div>
    </footer>
  );
}
