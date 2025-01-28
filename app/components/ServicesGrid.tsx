import React from 'react';
import Image from 'next/image';

interface ConstructionService {
  title: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

const ServicesGrid = () => {
  const services: ConstructionService[] = [
    {
      title: 'General Contracting',
      description: 'Full-service construction management from concept to completion',
      image: '/images/Solutions/Solutions1.jpg',
      alt: 'Construction site management team',
      features: [
        'Project scheduling & coordination',
        'Quality control management',
        'Cost estimation & budgeting',
        'Subcontractor management'
      ]
    },
    {
      title: 'Design-Build',
      description: 'Seamless integration of design and construction expertise',
      image: '/images/services/design-build.jpg',
      alt: 'Architect reviewing blueprints',
      features: [
        'Single-source responsibility',
        'Integrated project delivery',
        'Value engineering',
        'Fast-track scheduling'
      ]
    },
    {
      title: 'Renovation & Restoration',
      description: 'Preserving heritage while implementing modern solutions',
      image: '/images/services/renovation.jpg',
      alt: 'Historic building restoration',
      features: [
        'Historical preservation',
        'Structural reinforcement',
        'Energy retrofitting',
        'Adaptive reuse'
      ]
    },
    {
      title: 'Civil Infrastructure',
      description: 'Building the foundations for community growth',
      image: '/images/services/infrastructure.jpg',
      alt: 'Bridge construction project',
      features: [
        'Site development',
        'Roads & bridges',
        'Utility systems',
        'Earthwork & grading'
      ]
    },
    {
      title: 'Sustainable Construction',
      description: 'Eco-friendly building solutions for a greener future',
      image: '/images/services/sustainable.jpg',
      alt: 'LEED certified building',
      features: [
        'LEED certification',
        'Energy-efficient systems',
        'Green materials',
        'Waste management'
      ]
    },
    {
      title: 'Project Management',
      description: 'Expert oversight for complex construction projects',
      image: '/images/services/project-management.jpg',
      alt: 'Team reviewing construction plans',
      features: [
        'Risk management',
        'Cost control',
        'Schedule optimization',
        'Stakeholder coordination'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col items-center gap-4 text-center mb-14">
            <span className="inline-block text-blue-600 font-semibold uppercase tracking-wider text-sm">
              Professional Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Building Tomorrow&apos;s Infrastructure
            </h2>
            <p className="text-base text-gray-600 max-w-3xl">
              Comprehensive construction solutions powered by innovation and decades of expertise
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative flex flex-col rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200"
              >
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <Image 
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <svg 
                            className="w-4 h-4 text-blue-600" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-14 text-center">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm">
              Explore All Capabilities
              <svg 
                className="ml-2 -mr-1 w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;