"use client";

import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-fit p-3 rounded-xl mb-6 mx-auto shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center tracking-tight">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-center max-w-xs mx-auto text-sm">
        {description}
      </p>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const services = [
    {
      title: "Premium Home Construction",
      description: "Tailored residential solutions from concept to completion",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Commercial Excellence",
      description: "Transformative spaces that elevate business potential",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Visionary Design",
      description: "Architectural mastery transforming aspirations",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Urban Infrastructure",
      description: "Building foundations for smart cities",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  const CtaButton: React.FC<{
    href: string;
    label: string;
    variant: "primary" | "secondary";
    icon: "arrow-right" | "portfolio";
  }> = ({ href, label, variant, icon }) => {
    const iconPaths = {
      "arrow-right": "M17 8l4 4m0 0l-4 4m4-4H3",
      "portfolio": "M19 14l-7 7m0 0l-7-7m7 7V3",
    };

    return (
      <a
        href={href}
        className={`
          px-8 py-4 rounded-xl font-semibold transition-all transform
          text-center flex items-center justify-center
          ${
            variant === "primary"
              ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-100 hover:from-blue-700 hover:to-blue-600 hover:scale-[1.02]"
              : "border-2 border-gray-200 text-gray-700 hover:border-blue-200 hover:bg-blue-50 hover:scale-[1.01]"
          }
        `}
        aria-label={label}
      >
        {label}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[icon]} />
        </svg>
      </a>
    );
  };

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 lg:pr-16">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">
                INNOVATIVE CONSTRUCTION SOLUTIONS
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Redefining Modern
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Architecture
                </span>
              </h1>
              <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl text-lg">
                Harnessing cutting-edge technology and sustainable practices to deliver 
                exceptional building experiences that stand the test of time.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <CtaButton
                href="/get-a-quote"
                label="Start Your Project"
                variant="primary"
                icon="arrow-right"
              />
              <CtaButton
                href="/projects"
                label="Explore Portfolio"
                variant="secondary"
                icon="portfolio"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-white bg-gray-100 transform rotate-1">
              <Image
                src="/Images/Hero.jpg"
                alt="Modern construction site with cranes and architectural plans"
                width={640}
                height={427}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 tracking-wide">PROVEN EXPERTISE</p>
                  <p className="text-2xl font-bold text-gray-900">25+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;