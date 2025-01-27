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
      image: '/project1.jpg',
      description: 'Sustainable living spaces blending modern architecture with eco-friendly innovation',
      category: 'Residential'
    },
    {
      id: 2,
      title: 'Commercial Office Tower',
      image: '/project2.jpg',
      description: 'State-of-the-art corporate hub featuring smart building technology',
      category: 'Commercial'
    },
    {
      id: 3,
      title: 'Industrial Logistics Hub',
      image: '/project3.jpg',
      description: 'Advanced warehouse facility with automated inventory systems',
      category: 'Industrial'
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Signature Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover landmark constructions that redefine modern engineering excellence
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40" />
                <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                  {project.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-colors shadow-sm"
          >
            View All Projects
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;