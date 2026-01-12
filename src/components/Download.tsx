"use client";

import Link from "next/link";

export default function Download() {
    return (
        <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-[#0a0a0a] to-cyan-900/50" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 border border-purple-500/20 rounded-2xl rotate-12 animate-float" />
                <div className="absolute bottom-20 right-10 w-16 h-16 border border-cyan-500/20 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
                <div className="absolute top-1/2 right-20 w-12 h-12 bg-purple-500/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: "1s" }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                        <span className="text-sm text-emerald-400">📱 Download Now</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Start Your Spiritual</span>
                        <br />
                        <span className="gradient-text">Journey Today</span>
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        Download Farishta FM for free and unlock a world of spiritual content.
                        Available on iOS and Android devices.
                    </p>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        {/* App Store Button */}
                        <Link
                            href="https://apps.apple.com/app/farishta-fm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-2xl hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/10"
                        >
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs text-gray-600">Download on the</div>
                                <div className="text-xl font-semibold">App Store</div>
                            </div>
                        </Link>

                        {/* Play Store Button */}
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.farishta.fm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-2xl hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/10"
                        >
                            <svg className="w-10 h-10" viewBox="0 0 24 24">
                                <path fill="#EA4335" d="M3.609 1.814 13.792 12 3.609 22.186a2.37 2.37 0 0 1-.609-1.59V3.404c0-.595.217-1.14.609-1.59z" />
                                <path fill="#FBBC04" d="M16.296 8.775 13.792 12l2.504 3.225 3.457-1.99a1.856 1.856 0 0 0 0-3.47l-3.457-1.99z" />
                                <path fill="#4285F4" d="m3.609 1.814 10.183 10.186 2.504-3.225L5.85.394A2.2 2.2 0 0 0 3.609 1.814z" />
                                <path fill="#34A853" d="M13.792 12 3.609 22.186A2.2 2.2 0 0 0 5.85 23.606l10.446-6.38L13.792 12z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs text-gray-600">GET IT ON</div>
                                <div className="text-xl font-semibold">Google Play</div>
                            </div>
                        </Link>
                    </div>

                    {/* QR Code Section */}
                    <div className="inline-flex items-center gap-6 p-6 rounded-2xl glass">
                        <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center">
                            {/* QR Code Placeholder */}
                            <div className="w-20 h-20 grid grid-cols-5 gap-0.5">
                                {[...Array(25)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-full h-full ${Math.random() > 0.4 ? 'bg-black' : 'bg-white'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="text-white font-semibold mb-1">Scan to Download</div>
                            <div className="text-gray-400 text-sm">Point your camera at the QR code<br />to download the app</div>
                        </div>
                    </div>

                    {/* Features Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {[
                            "🎵 10,000+ hours of content",
                            "📴 Offline mode",
                            "🔔 Daily reminders",
                            "🌙 Dark mode",
                            "🆓 Free to use",
                        ].map((feature) => (
                            <div key={feature} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
