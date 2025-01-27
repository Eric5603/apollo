"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-white bg-opacity-5 backdrop-blur-lg rounded-xl border border-white border-opacity-10 hover:border-opacity-30 transition-all"
    >
      <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 -top-48 -left-48 animate-float" />
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 -bottom-48 -right-48 animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 py-24 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-purple-400 font-medium uppercase tracking-widest text-sm">
                Next-Gen Construction Management
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
                Build the Future
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Without the Headache
                </span>
              </h1>
              <p className="text-gray-300 text-lg mt-6 max-w-xl leading-relaxed">
                AI-powered platform that streamlines construction workflows, predicts risks, 
                and keeps your projects on track with real-time insights.
              </p>
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-purple-500/30 transition-shadow"
              >
                Start Free Trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-gray-600 text-white rounded-xl font-semibold hover:border-purple-400 transition-colors"
              >
                Watch Demo
              </motion.a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-12">
              <div className="border-l-2 border-purple-400 pl-4">
                <div className="text-3xl font-bold text-white">250k+</div>
                <div className="text-gray-400 text-sm">Projects Managed</div>
              </div>
              <div className="border-l-2 border-blue-400 pl-4">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-gray-400 text-sm">On-Time Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/dashboard-3d.png"
                alt="Platform interface"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-500 rounded-xl blur-2xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-30 animate-pulse-delayed" />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">
          <FeatureCard
            title="AI Risk Predictions"
            description="Machine learning models forecast potential delays and cost overruns"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <FeatureCard
            title="Real-time Collaboration"
            description="Multi-user environment with version control and comments"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
          <FeatureCard
            title="Auto-Documentation"
            description="Automated generation of compliance reports and project docs"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Animated Chat Bubble */}
      <div className="fixed bottom-8 right-8 animate-bounce">
        <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Need help?</p>
            <p className="text-xs text-gray-500">Chat with our AI assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
}