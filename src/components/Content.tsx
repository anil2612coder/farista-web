"use client";

const categories = [
    {
        title: "Quran Recitations",
        description: "Beautiful recitations from renowned Qaris",
        count: "114 Surahs",
        image: "🕌",
        color: "from-purple-600/20 to-purple-800/20",
        borderColor: "border-purple-500/20",
    },
    {
        title: "Islamic Lectures",
        description: "Learn from world-renowned scholars",
        count: "5000+ Hours",
        image: "📚",
        color: "from-cyan-600/20 to-cyan-800/20",
        borderColor: "border-cyan-500/20",
    },
    {
        title: "Nasheeds",
        description: "Soul-stirring Islamic songs",
        count: "2000+ Tracks",
        image: "🎵",
        color: "from-amber-600/20 to-amber-800/20",
        borderColor: "border-amber-500/20",
    },
    {
        title: "Duas & Adhkar",
        description: "Daily supplications and remembrance",
        count: "500+ Duas",
        image: "🤲",
        color: "from-emerald-600/20 to-emerald-800/20",
        borderColor: "border-emerald-500/20",
    },
];

const featuredContent = [
    { title: "Surah Al-Rahman", artist: "Mishary Rashid", duration: "12:45", plays: "2.5M" },
    { title: "The Power of Dua", artist: "Mufti Menk", duration: "45:20", plays: "1.8M" },
    { title: "Tala' Al-Badru", artist: "Maher Zain", duration: "4:32", plays: "3.2M" },
    { title: "Morning Adhkar", artist: "Various Artists", duration: "15:00", plays: "982K" },
];

export default function Content() {
    return (
        <section id="content" className="relative py-24 lg:py-32 bg-[#050505]">
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                        <span className="text-sm text-cyan-400">🎧 Content Library</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-white">Explore Our Vast</span>
                        <br />
                        <span className="gradient-text">Content Library</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Thousands of hours of carefully curated spiritual content,
                        from Quran recitations to inspiring lectures and beautiful nasheeds.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {categories.map((category, index) => (
                        <div
                            key={category.title}
                            className={`group relative p-6 rounded-2xl bg-gradient-to-br ${category.color} border ${category.borderColor} card-hover cursor-pointer`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-5xl mb-4">{category.image}</div>
                            <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                            <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">{category.count}</span>
                                <svg className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Content */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left - Visual */}
                    <div className="flex-1">
                        <div className="relative">
                            {/* Album Art Grid */}
                            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                                <div className="space-y-4">
                                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-7xl shadow-xl shadow-purple-500/20 animate-float">
                                        🕋
                                    </div>
                                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center text-5xl shadow-xl shadow-cyan-500/20 animate-float" style={{ animationDelay: "1s" }}>
                                        📖
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-5xl shadow-xl shadow-amber-500/20 animate-float" style={{ animationDelay: "0.5s" }}>
                                        🌙
                                    </div>
                                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-7xl shadow-xl shadow-emerald-500/20 animate-float" style={{ animationDelay: "1.5s" }}>
                                        ✨
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 glass rounded-full">
                                <div className="flex items-center gap-3">
                                    <div className="audio-wave flex items-end h-4">
                                        <span className="!w-1 !h-2" />
                                        <span className="!w-1 !h-4" />
                                        <span className="!w-1 !h-2" />
                                        <span className="!w-1 !h-3" />
                                        <span className="!w-1 !h-2" />
                                    </div>
                                    <span className="text-sm text-white">Now Playing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Track List */}
                    <div className="flex-1 w-full">
                        <h3 className="text-2xl font-bold text-white mb-6">Trending This Week</h3>

                        <div className="space-y-3">
                            {featuredContent.map((track, index) => (
                                <div
                                    key={track.title}
                                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-purple-500/20"
                                >
                                    {/* Track Number */}
                                    <div className="w-8 h-8 flex items-center justify-center text-gray-500 group-hover:hidden">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div className="w-8 h-8 hidden items-center justify-center text-purple-400 group-hover:flex">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>

                                    {/* Track Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="text-white font-medium truncate">{track.title}</div>
                                        <div className="text-gray-500 text-sm truncate">{track.artist}</div>
                                    </div>

                                    {/* Plays */}
                                    <div className="text-gray-500 text-sm hidden sm:block">
                                        {track.plays} plays
                                    </div>

                                    {/* Duration */}
                                    <div className="text-gray-500 text-sm">
                                        {track.duration}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 w-full py-4 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 transition-all flex items-center justify-center gap-2">
                            <span>View All Content</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
