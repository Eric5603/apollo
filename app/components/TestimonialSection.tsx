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
      image: "images/testimonials/Stephen.jpg",
      projectImage: "/images/testimonials/michael-chen.jpg"
    },
    {
      quote: "From groundbreaking to ribbon-cutting, the team maintained perfect communication. Our hospital project came in 15% under budget.",
      name: "Jonathan Mwangi",
      role: "Director, HealthCorp International",
      image: "images/testimonials/jonathan.jpg",
      projectImage: "/images/testimonials/sarah-williamson.jpg"
    },
    {
      quote: "The only contractors we trust with high-rise projects. Their safety record is impeccable and quality unmatched.",
      name: "Sarah Akinyi",
      role: "VP Construction, Skyline Properties",
      image: "images/testimonials/sarah.jpg",
      projectImage: "/images/testimonials/james-oconnor.jpg"
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