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
      className="min-h-screen bg-slate-50 relative overflow-hidden isolate"
    >
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
            {/* Headings */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Building Tomorrow
                <span className="block mt-4 text-blue-600 text-3xl md:text-4xl font-extrabold">
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

            {/* CTA Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/get-a-quote"
                className="px-6 py-4 bg-blue-600 text-white rounded-lg font-bold flex items-center gap-3 hover:bg-blue-700 transition-colors text-base shadow-lg hover:shadow-blue-200"
              >
                Request a Quote
              </Link>
              
              <Link
                href="/solutions"
                className="px-6 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-colors text-base shadow-sm hover:shadow-gray-200"
              >
                View Services 
              </Link>
            </div>
          </motion.div>

          {/* Right Video Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg"
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
                <source src="/images/Hero/construction.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
