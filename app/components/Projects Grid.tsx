import React from 'react';
import Image from 'next/image';

interface ConstructionProject {
  title: string;
  location: string;
  type: string;
  image: string;
  alt: string;
  size: string;
  completion: string;
  rating: number;
}

const ProjectsGrid = () => {
  const projects: ConstructionProject[] = [
    {
      title: 'Downtown Commercial Complex',
      location: 'Machakos County',
      type: 'Commercial Development',
      image: '/images/projects/Project1.jpg',
      alt: 'Commercial complex',
      size: '850,000 sq.ft',
      completion: '2024',
      rating: 5
    },
    {
      title: 'Concrete Project',
      location: 'Kajiado County',
      type: 'Residential Development',
      image: '/images/projects/Project2.jpg',
      alt: 'concrete project',
      size: '120 Acres',
      completion: '2023',
      rating: 4
    },
    {
      title: 'Bridge Construction',
      location: 'Kisumu',
      type: 'Infrastructure',
      image: '/images/projects/Project3.jpg',
      alt: 'Modern suspension bridge under construction',
      size: '2.1 Miles',
      completion: '2022',
      rating: 4
    },
    {
      title: 'Renovation Project',
      location: 'Nairobi',
      type: 'Restoration',
      image: '/images/projects/Project4.jpg',
      alt: 'Renovation project',
      size: '150,000 sq.ft',
      completion: '2021',
      rating: 5
    },
    {
      title: 'Industrial Park Development',
      location: 'Mombasa County',
      type: 'Industrial',
      image: '/images/projects/Project5.jpg',
      alt: 'Industrial complex',
      size: '80 Acres',
      completion: '2020',
      rating: 4
    },
    {
      title: 'Residential Development',
      location: 'Kiambu County',
      type: 'Public Works',
      image: '/images/projects/Project6.jpg',
      alt: 'Residential development',
      size: '50,000 sq.ft',
      completion: '2020',
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto flex flex-col items-center gap-4 text-center mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              OUR PORTFOLIO
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Building <span className="text-blue-600">Landmark</span> Projects
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mt-2">
              Discover our legacy of engineering excellence through transformative construction achievements
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative flex flex-col rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200"
              >
                <div className="relative h-56 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <div className="flex items-center mt-1 text-gray-600">
                      <svg 
                        className="w-4 h-4 mr-1.5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm border-t border-gray-100 pt-3">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-500 uppercase">Size</p>
                      <p className="font-medium text-gray-900">{project.size}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-500 uppercase">Completed</p>
                      <p className="font-medium text-gray-900">{project.completion}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${project.rating >= star ? 'text-orange-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {project.rating}/5
                    </span>
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

export default ProjectsGrid;