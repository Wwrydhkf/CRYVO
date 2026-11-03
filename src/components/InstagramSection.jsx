import React from 'react';
import { ArrowUpRight, Play, Heart, MessageCircle, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { INSTAGRAM_POSTS } from '../data/initialData';

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-24 relative z-10 overflow-hidden">
      {/* Background ambient gold splash */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-gold-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 mb-12 border border-gold-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              {/* Instagram Avatar with animated gradient border */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-xl shadow-pink-500/20 group cursor-pointer">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black p-0.5 overflow-hidden">
                  <img
                    src="/cryvo-logo.png"
                    alt="CRYVO Media Instagram"
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full border-2 border-black">
                  <CheckCircle2 className="w-4 h-4 fill-blue-500 text-white" />
                </div>
              </div>

              {/* Profile Details */}
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel">
                    @cryvo.media
                  </h3>
                  <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-gold-300 border border-gold-500/30">
                    Official Handle
                  </span>
                </div>
                <p className="text-gray-300 text-sm mt-1 max-w-md">
                  Viral Marketing Breakdown • Cinematic Visuals • Brand Building Insights & Daily Growth Tactics.
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 mt-4 text-xs sm:text-sm font-semibold">
                  <div>
                    <span className="text-white font-extrabold text-base">450+ </span>
                    <span className="text-gray-400">Reels</span>
                  </div>
                  <div>
                    <span className="text-white font-extrabold text-base">85.4K </span>
                    <span className="text-gray-400">Followers</span>
                  </div>
                  <div>
                    <span className="text-white font-extrabold text-base">9.4% </span>
                    <span className="text-gold-400 font-bold">Engagement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                href="https://instagram.com/cryvo.media"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow @cryvo.media</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com/cryvo.media"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 transition-all"
              >
                <span>Send DM</span>
              </a>
            </div>
          </div>
        </div>

        {/* Curated Reels & Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="glass-panel rounded-2xl overflow-hidden group glass-card-hover border border-white/10 hover:border-gold-500/40 flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-dark-800">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/70 backdrop-blur-md text-gold-300 border border-gold-500/30 flex items-center gap-1">
                    <Play className="w-3 h-3 fill-gold-300" />
                    {post.type}
                  </span>
                  <span className="text-[10px] text-gray-300 bg-black/60 px-2 py-0.5 rounded-full">
                    {post.views} views
                  </span>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-black flex items-center justify-center shadow-xl shadow-gold-500/50 scale-75 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 fill-black ml-0.5" />
                  </div>
                </div>

                {/* Bottom stats inside image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1 font-semibold">
                    <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                    {post.likes}
                  </span>
                  <span className="text-[11px] text-gray-300">{post.date}</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-gold-400 font-mono font-semibold">@cryvo.media</span>
                  <a
                    href="https://instagram.com/cryvo.media"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white flex items-center gap-1 font-medium"
                  >
                    View on IG <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
