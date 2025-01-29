"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

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

            {/* CTA Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/new-project" className="px-6 py-4 bg-blue-600 text-white rounded-lg font-bold flex items-center gap-3 hover:bg-blue-700 transition-colors text-base shadow-lg hover:shadow-blue-200">
                Start New Project
              </Link>
              <Link href="/innovations" className="px-6 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-colors text-base shadow-sm hover:shadow-gray-200">
                View Innovations
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
