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
      description: 'Masterful Execution from Vision to Reality. Experience end-to-end construction leadership that transforms concepts into landmark structures. Our general contracting expertise orchestrates every phase with military precision—seamless scheduling, rigorous quality assurance, and fiscal mastery—ensuring your project transcends expectations.',
      image: '/images/Solutions/Solutions1.png',
      alt: 'Construction site management team',
      features: [
        'Project scheduling & coordination',
        'Quality control management',
        'Cost estimation & budgeting',
        'Subcontractor management'
      ]
    },
    {
      title: 'Structural Drawings',
      description: 'Where Ingenuity Meets Integrity. Bridging imagination and engineering, our structural drawings epitomize innovation fused with exactitude. As your single-source authority, we deploy cutting-edge design integration and value-driven strategies to accelerate timelines without compromising brilliance.',
      image: '/images/Solutions/Solutions2.png',
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
      description: 'Honoring Heritage, Elevating Modernity. Breathe new life into architectural treasures with our sensitive restoration ethos. We marry historical preservation with 21st-century innovation—structural fortification, energy-efficient retrofitting, and adaptive reuse—to create spaces where timeless elegance coexists with contemporary functionality.',
      image: '/images/Solutions/Solutions3.jpg',
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
      description: 'Engineering Progress, Building Communities. Shape the future of cities with infrastructure designed to endure. From critical road networks to sustainable utility ecosystems, we lay the groundwork for societal advancement. Our earthwork mastery and precision engineering ensure projects stand as testaments to both form and function.',
      image: '/images/Solutions/Solutions4.jpg',
      alt: 'Bridge construction project',
      features: [
        'Site development',
        'Roads & bridges',
        'Utility systems',
        'Earthwork & grading'
      ]
    },
    {
      title: 'Architectural Designs',
      description: 'Sustainable Vision, Responsible Execution. Pioneering eco-conscious architecture that marries aesthetics with planetary stewardship. Our LEED-certified designs leverage energy-smart systems, renewable materials, and waste-neutral practices to create spaces that inspire while nurturing the environment.',
      image: '/images/Solutions/Solutions5.jpg',
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
      description: 'The Science of Seamless Delivery. Command your project’s success with our strategic oversight. We optimize risks, costs, and timelines through data-driven governance, transforming complexity into clarity. From stakeholder alignment to resource orchestration, we turn ambitious visions into flawlessly executed realities.',
      image: '/images/Solutions/Solutions6.jpg',
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
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;