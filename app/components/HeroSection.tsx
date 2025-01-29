"use client";

import { useRef } from "react";
import Link from "next/link";

export default function ModernConstructionHero() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-white relative overflow-hidden isolate"
    >
      {/* Enhanced Dotted Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg 
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern 
            id="dot-pattern" 
            width="20" 
            height="20" 
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" className="fill-gray-800" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 md:px-8 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 w-full items-center py-16">
          {/* Left Content Column */}
          <div className="space-y-6 relative">
            {/* Live Status Badge */}
            <div className="w-fit mb-14 relative group overflow-hidden rounded-full bg-blue-600 px-4 py-1.5 shadow-lg border-2 border-gray-200">
              <div className="flex items-center gap-2">
                <div className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                </div>
                <span className="text-white font-medium text-sm tracking-wider">
                  LIVE CONSTRUCTION UPDATES
                </span>
              </div>
            </div>

            {/* Headings */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Building Tomorrow
                <span className="block mt-4 text-blue-600 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </h1>
              <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
                Revolutionizing urban development through cutting-edge engineering 
                and sustainable construction practices. Where innovation meets 
                structural integrity.
              </p>
            </div>

            {/* CTA Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/new-project" className="px-6 py-4 bg-blue-600 text-white rounded-lg font-bold flex items-center gap-3 hover:bg-blue-700 transition-colors text-base shadow-lg hover:shadow-blue-200">
                Start New Project
              </Link>
              <Link href="/innovations" className="px-6 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-colors text-base shadow-sm hover:shadow-gray-200">
                View Innovations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
