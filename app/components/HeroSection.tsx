"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="w-12 h-12 mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-600 font-medium uppercase tracking-widest text-sm">
                BUILDING EXCELLENCE SINCE 1998
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight">
                Precision Construction
                <br />
                <span className="text-blue-600">Built to Last</span>
              </h1>
              <p className="text-gray-600 text-lg mt-6 max-w-xl leading-relaxed">
                Full-service construction firm specializing in commercial, residential, 
                and industrial projects. Licensed, bonded, and insured for your peace of mind.
              </p>
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-400 transition-colors"
              >
                View Projects
              </motion.a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-12">
              <div className="border-l-2 border-blue-400 pl-4">
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="border-l-2 border-blue-400 pl-4">
                <div className="text-3xl font-bold text-gray-900">1,250+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Construction Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/construction-team.jpg"
                alt="Construction team working"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>
            
            {/* Safety Badge */}
            <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">OSHA Certified</p>
                  <p className="text-xs text-gray-600">Safety First Always</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          <ServiceCard
            title="Residential Construction"
            description="Custom homes & renovations built to your exact specifications"
            icon={
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
          />
          <ServiceCard
            title="Commercial Builds"
            description="Office spaces, retail, and mixed-use developments"
            icon={
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
          />
          <ServiceCard
            title="Design & Build"
            description="Complete architectural and construction services"
            icon={
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          />
          <ServiceCard
            title="Infrastructure"
            description="Roads, utilities, and public works construction"
            icon={
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}