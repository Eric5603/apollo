import React from 'react';
import Link from 'next/link';

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 px-8 py-16 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300">
          
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg 
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 50L50 0L100 50L50 100L0 50Z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
              <path d="M25 50L50 25L75 50L50 75L25 50Z" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Build Your Vision with <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Modern Excellence
              </span>
            </h2>
            
            {/* Description */}
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
              From groundbreaking to ribbon-cutting, we combine innovative engineering with 
              timeless craftsmanship to create structures that inspire communities.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative flex items-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold text-white py-4 px-8 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                Start Your Project
                <svg
                  className="group-hover:translate-x-1 transition-transform duration-300 w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/projects"
                className="text-gray-600 hover:text-blue-600 font-medium flex items-center gap-2 transition-colors duration-200 px-6 py-3 rounded-lg hover:bg-gray-50"
              >
                Explore Our Portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 opacity-80">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="h-6 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium">25+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;