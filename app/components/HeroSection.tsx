"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);

  const isNumeric = (val: string) => !isNaN(Number(val.replace('+', '')));
  const parseValue = (val: string) => parseInt(val.replace('+', '')) || 0;

  useEffect(() => {
    if (inView && isNumeric(value)) {
      const target = parseValue(value);
      const duration = Math.min(2000, target * 20);

      let start = 0;
      const increment = target / (duration / 50);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {isNumeric(value) ? `${Math.min(count, parseValue(value)).toLocaleString()}+` : value}
    </span>
  );
};

export default function ModernConstructionHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-white relative overflow-hidden isolate"
    >
      {/* Enhanced Dotted Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg 
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern 
            id="dot-pattern" 
            width="24" 
            height="24" 
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="1" className="fill-gray-800" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 md:px-8 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 w-full items-center py-16">
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 relative"
          >
            {/* Live Status Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-fit mb-14 relative group overflow-hidden rounded-full bg-blue-600 px-4 py-1.5 shadow-lg cursor-pointer border-2 border-gray-200"
            >
              <div className="flex items-center gap-2">
                <div className="relative flex h-3 w-3">
                  <motion.span
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
                  />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                </div>
                <span className="text-white font-medium text-sm tracking-wider">
                  LIVE CONSTRUCTION UPDATES
                </span>
              </div>
            </motion.div>

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

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { value: "98%", label: "Safety Record" },
                { value: "250+", label: "Projects Completed" },
                { value: "ISO9001", label: "Certified Quality" },
                { value: "24/7", label: "Site Monitoring" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-xl font-bold text-blue-600 mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/get-a-quote"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center gap-2 transition-colors"
                >
                  Get a Quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <Link
                  href="/solutions"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center gap-2 transition-colors"
                >
                  View our Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

              
            </div>
          </motion.div>

          {/* Right Video Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg"
            style={{ scale }}
          >
            {/* Video Container */}
            <div className="absolute inset-0 bg-gray-100/10 backdrop-blur-sm">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="/images/construction-poster.jpg"
              >
                <source src="https://videos.pexels.com/video-files/5567711/5567711-hd_1920_1080_30fps.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

            {/* Live Status Indicator */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md border-2 border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Live Progress</p>
                  <p className="text-xs text-gray-600">Active Site Feed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}