'use client'
import React, { useState } from 'react';

interface JobOpening {
  title: string;
  description: string;
  type: string;
  salary?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  
  const jobOpenings: JobOpening[] = [
    {
      title: 'Senior Software Engineer',
      description: 'Architect cloud-based solutions for smart construction management systems',
      type: 'Full-time · Remote',
      salary: '$140k - $180k',
      responsibilities: [
        'Develop and maintain core platform architecture',
        'Lead technical design discussions',
        'Implement CI/CD pipelines',
        'Mentor junior engineers'
      ],
      requirements: [
        '5+ years software development experience',
        'Expertise in TypeScript/Node.js',
        'Experience with AWS infrastructure',
        'Knowledge of IoT systems'
      ],
      benefits: [
        'Stock options',
        'Signing bonus',
        'Flexible hours'
      ]
    },
    {
      title: 'Product Lead - IoT Solutions',
      description: 'Drive innovation in our connected job site technology portfolio',
      type: 'Full-time · Hybrid',
      salary: '$160k - $210k',
      responsibilities: [
        'Define product vision and roadmap',
        'Collaborate with engineering and design teams',
        'Conduct market research and analysis',
        'Manage product lifecycle from concept to launch'
      ],
      requirements: [
        '7+ years product management experience',
        'Proven track record in IoT products',
        'Strong technical background',
        'Excellent communication skills'
      ],
      benefits: [
        'Performance bonuses',
        'Leadership training',
        'Conference budget'
      ]
    },
  ];

  const benefits: Benefit[] = [
    { 
      title: 'Professional Growth',
      description: '$5K annual training budget + conference sponsorship',
      icon: '📈'
    },
    { 
      title: 'Comprehensive Health',
      description: 'Premium medical, dental, vision, and mental wellness coverage',
      icon: '❤️'
    },
    { 
      title: 'Wealth Building',
      description: '401(k) with 6% match and financial planning services',
      icon: '💰'
    },
    { 
      title: 'Flexible Workplace',
      description: 'Fully remote options + 4 weeks mandatory PTO',
      icon: '🌍'
    },
    { 
      title: 'Team Experiences',
      description: 'Quarterly global retreats & innovation offsites',
      icon: '🤝'
    },
    { 
      title: 'Cutting-Edge Tools',
      description: 'Latest hardware + $2K annual tech stipend',
      icon: '💻'
    },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Application submitted!');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-20 px-5 sm:px-8 lg:px-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="mb-8">
            <span className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              We're Hiring Innovators
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Shape the Future of <br className="hidden md:block"/> 
            <span className="text-blue-600">Construction Technology</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Pioneer next-generation building solutions while accelerating your career growth 
            with industry-leading mentorship and resources.
          </p>
        </div>

        {/* Perks Grid */}
        <section className="mb-24">
          <div className="bg-white border border-gray-100 py-16 px-10 rounded-2xl shadow-sm">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Build Your Career Here?</h2>
              <p className="text-gray-600 text-lg">
                We invest in exceptional talent with industry-leading compensation 
                and growth opportunities
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-100 transition-all">
                  <div className="text-3xl mb-6 text-blue-600">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transformative Roles
            </h2>
            <p className="text-gray-600 text-lg">
              Current opportunities to lead innovation in construction technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-100 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="mb-3">
                      <span className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                        Featured Role
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="mt-3 space-y-1.5">
                      <p className="text-gray-600 flex items-center gap-2">
                        <span className="bg-gray-50 px-2 py-1 rounded-md text-sm">{job.type}</span>
                        {job.salary && (
                          <span className="text-green-700 font-medium">{job.salary}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed">{job.description}</p>
                <button 
                  onClick={() => setSelectedJob(index)}
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg 
                    font-medium hover:bg-blue-700 transition-colors"
                >
                  View Position Details →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Position Details Modal */}
        {selectedJob !== null && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {jobOpenings[selectedJob].title}
                  </h3>
                  <button 
                    onClick={() => setSelectedJob(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Description</h4>
                    <p className="text-gray-600">{jobOpenings[selectedJob].description}</p>
                  </div>

                  {jobOpenings[selectedJob].responsibilities && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        {jobOpenings[selectedJob].responsibilities?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {jobOpenings[selectedJob].requirements && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        {jobOpenings[selectedJob].requirements?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {jobOpenings[selectedJob].benefits && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Role Benefits</h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        {jobOpenings[selectedJob].benefits?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-8">
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg 
                        font-medium hover:bg-blue-700 transition-colors"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Application Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center bg-white rounded-2xl p-12 border border-gray-100">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Exceptional Talent Always Welcome</h2>
                <p className="text-gray-600 leading-relaxed">
                  Don't see your perfect role? We're always interested in connecting with 
                  outstanding professionals pushing the boundaries of construction technology.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-800 font-medium mb-3">Full Name</label>
                    <input
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                      type="text"
                      placeholder="Alexandra Chen"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-3">Email</label>
                    <input
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                      type="email"
                      placeholder="alexandra@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-800 font-medium mb-3">Upload Resume</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center transition-all hover:border-blue-500">
                    <input
                      type="file"
                      className="hidden"
                      id="resume"
                      required
                    />
                    <label htmlFor="resume" className="cursor-pointer text-gray-600">
                      <div className="mb-3 text-2xl">📎</div>
                      <p>Drag & drop files or <span className="text-blue-600">browse</span></p>
                      <p className="text-sm mt-2 text-gray-500">PDF, DOCX up to 5MB</p>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg 
                    font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
            <div className="bg-gray-50 h-full rounded-xl p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="text-4xl mb-6 text-blue-600">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900">What We Look For</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-blue-600">•</span> Innovative problem solvers
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-blue-600">•</span> Technical excellence
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-blue-600">•</span> Passion for sustainability
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-blue-600">•</span> Collaborative mindset
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;