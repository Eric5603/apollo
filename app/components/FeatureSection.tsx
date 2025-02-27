'use client';

import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

const FeatureSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      image: '/images/Features/Features1.jpg',
      description: 'Sustainable living spaces blending modern architecture with eco-friendly innovation',
      category: 'Residential'
    },
    {
      id: 2,
      title: 'Commercial Office Tower',
      image: '/images/Features/Features5.jpg',
      description: 'State-of-the-art corporate hub featuring smart building technology',
      category: 'Commercial'
    },
    {
      id: 3,
      title: 'Industrial Logistics Hub',
      image: '/images/Features/Features3.jpg',
      description: 'Advanced warehouse facility with automated inventory systems',
      category: 'Industrial'
    },
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Architectural Excellence
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneering designs that combine functionality with aesthetic innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-out border-2 border-gray-200 hover:border-blue-200"
            >
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center center' }}
                />
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-semibold">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
