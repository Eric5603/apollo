import React from 'react';
import Image from 'next/image';
  
interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  image: string;
  projectImage: string;
}

interface StatItem {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const Testimonial: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      quote: "Their attention to detail transformed our commercial complex into a landmark. Every deadline was met with military precision.",
      name: "Stephen Kariuki",
      role: "CEO, Urban Developments LLC",
      image: "image/testimonials/Stephen.jpg",
      projectImage: "/images/testimonials/michael-chen.jpg"
    },
    {
      quote: "From groundbreaking to ribbon-cutting, the team maintained perfect communication. Our hospital project came in 15% under budget.",
      name: "Sarah Williamson",
      role: "Director, HealthCorp International",
      image: "image/testimonials/sarah-williamson.jpg",
      projectImage: "/images/testimonials/sarah-williamson.jpg"
    },
    {
      quote: "The only contractors we trust with high-rise projects. Their safety record is impeccable and quality unmatched.",
      name: "James O'Connor",
      role: "VP Construction, Skyline Properties",
      image: "image/testimonials/james-oconnor.jpg",
      projectImage: "/images/testimonials/james-oconnor.jpg"
    },
  ];

  const stats: StatItem[] = [
    { 
      title: "Projects Completed", 
      value: "850+", 
      description: "Across 12 countries",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    { 
      title: "Safety Milestone", 
      value: "50K+", 
      description: "Incident-free hours",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    { 
      title: "Industry Experience", 
      value: "25+", 
      description: "Years of excellence",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Building Trust Through Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied clients who&apos;ve transformed their visions into enduring structures
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  className="w-full h-full object-cover"
                  src={testimonial.projectImage}
                  alt="Construction project"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40" />
              </div>
              
              <div className="p-6">
                <blockquote className="text-lg text-gray-600 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <Image
                    className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
                    src={testimonial.image}
                    alt={`Avatar of ${testimonial.name}`}
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid gap-8 md:grid-cols-3 bg-slate-50 rounded-2xl p-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg text-blue-600">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.title}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-20 relative">
          <div className="absolute inset-x-0 top-1/2 w-full h-1 bg-gradient-to-r from-blue-600/20 via-slate-300/20 to-orange-500/20" aria-hidden="true" />
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-2xl font-bold text-gray-900">
              Proven Results
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;