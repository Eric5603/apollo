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

const TestimonialSection: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      quote: "Their attention to detail transformed our commercial complex into a landmark. Every deadline was met with military precision.",
      name: "Stephen Kariuki",
      role: "CEO, Urban Developments LLC",
      image: "/images/testimonials/stephen.jpg",
      projectImage: "/images/testimonials/michael-chen.jpg"
    },
    {
      quote: "From groundbreaking to ribbon-cutting, the team maintained perfect communication. Our hospital project came in 15% under budget.",
      name: "Jonathan Mwangi",
      role: "Director, HealthCorp International",
      image: "/images/testimonials/jonathan.jpg",
      projectImage: "/images/testimonials/sarah-williamson.jpg"
    },
    {
      quote: "The only contractors we trust with high-rise projects. Their safety record is impeccable and quality unmatched.",
      name: "Sarah Akinyi",
      role: "VP Construction, Skyline Properties",
      image: "/images/testimonials/sarah.jpg",
      projectImage: "/images/testimonials/james-oconnor.jpg"
    },
  ];

  const stats: StatItem[] = [
    { 
      title: "Projects Completed", 
      value: "1,250+", 
      description: "Across 12 countries",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    { 
      title: "Safety Milestone", 
      value: "50K+", 
      description: "Incident-free hours",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    { 
      title: "Industry Experience", 
      value: "5+", 
      description: "Years of excellence",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Building Trust Through Excellence
          </h2>
          <p className="text-base text-gray-600">
            Join thousands of satisfied clients who&apos;ve transformed their visions into enduring structures
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 lg:grid-cols-3 mb-14">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-gray-200"
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
                <blockquote className="text-base text-gray-600 mb-6">
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
        <div className="grid gap-8 lg:grid-cols-3 mt-14">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-gray-100">
                  {stat.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;