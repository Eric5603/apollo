import React from 'react';
import Image from 'next/image';

interface ReviewItem {
  comment: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

interface StatItem {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const ReviewSection: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      comment: "Their attention to detail transformed our commercial complex into a landmark. Every deadline was met with military precision.",
      author: "Stephen Kariuki",
      role: "CEO, Urban Developments LLC",
      avatar: "/images/testimonials/stephen.jpg",
      rating: 5
    },
    {
      comment: "From groundbreaking to ribbon-cutting, the team maintained perfect communication. Our hospital project came in 15% under budget.",
      author: "Jonathan Mwangi",
      role: "Director, HealthCorp International",
      avatar: "/images/testimonials/jonathan.jpg",
      rating: 5
    },
    {
      comment: "The only contractors we trust with high-rise projects. Their safety record is impeccable and quality unmatched.",
      author: "Sarah Akinyi",
      role: "VP Construction, Skyline Properties",
      avatar: "/images/testimonials/sarah.jpg",
      rating: 5
    },
  ];

  const stats: StatItem[] = [
    { 
      title: "Projects Completed", 
      value: "250+", 
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

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-gray-600">
            Read genuine reviews from partners who've collaborated with us
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 lg:grid-cols-3 mb-14">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <Image
                  className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
                  src={review.avatar}
                  alt={`Avatar of ${review.author}`}
                  width={48}
                  height={48}
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              <blockquote className="text-gray-600 relative pl-4 border-l-2 border-blue-200">
                <span className="absolute left-0 top-0 text-2xl text-gray-400 -translate-y-1">“</span>
                {review.comment}
              </blockquote>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid gap-8 lg:grid-cols-3 mt-14">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200"
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

export default ReviewSection;