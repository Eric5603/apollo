import React from 'react';
import Image from 'next/image';

interface TestimonialItem {
  title: string;
  author: string;
  postDate: string;
  memberSince: string;
  content: string;
  ps?: string;
  likes: number;
  comments: number;
  profileImage: string;
}

const SocialTestimonial: React.FC = () => {
  const testimonial: TestimonialItem = {
    title: "First $5k Sale: AI DM Setter",
    author: "Liam Skaff",
    postDate: "Jul 19",
    memberSince: "Member since February 9, 2024",
    content: "Hey legends! About two weeks ago, I made my first ever sale for the AI DM Setter I've been building for the past eight months. I sold it to an online fitness coach whom I cold outreached to months ago on Instagram.",
    ps: "P.S. Liam Ottley with his case study and Isaiah Zimmermanvere t..",
    likes: 58,
    comments: 24,
    profileImage: "/images/testimonials/liam-skaff.jpg"
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-gray-900">{testimonial.title}</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
          </svg>
        </button>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-6">
        <Image
          className="h-12 w-12 rounded-full"
          src={testimonial.profileImage}
          alt={`${testimonial.author}'s profile`}
          width={48}
          height={48}
        />
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
            <span className="text-gray-500 text-sm">•</span>
            <p className="text-gray-500 text-sm">{testimonial.postDate}</p>
          </div>
          <p className="text-gray-500 text-sm">{testimonial.memberSince}</p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 mb-6">
        <p className="text-gray-800 leading-relaxed">
          {testimonial.content}
        </p>
        {testimonial.ps && (
          <p className="text-gray-600 italic">{testimonial.ps}</p>
        )}
      </div>

      {/* Engagement Metrics */}
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <span>{testimonial.likes} likes</span>
        <span>•</span>
        <span>{testimonial.comments} comments</span>
      </div>
    </div>
  );
};

export default SocialTestimonial;