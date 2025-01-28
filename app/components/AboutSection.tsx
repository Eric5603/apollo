// app/about/page.tsx
import { ReactElement } from 'react';

const AboutPage = (): ReactElement => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-16 border-b-2 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Building Excellence Since 2003
            </h1>
            <p className="text-base text-slate-600 max-w-3xl mx-auto">
              Pioneering innovative construction solutions while maintaining timeless craftsmanship
            </p>
          </div>
          
          <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden border-2 border-slate-200 shadow-md">
            <video 
              autoPlay 
              muted 
              loop 
              className="w-full h-full object-cover"
            >
              <source src="/construction-site.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white border-b-2 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Our Foundation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏗️',
                title: "Structural Integrity",
                description: "Uncompromising safety standards and material quality"
              },
              {
                icon: '🌱',
                title: "Sustainable Practice",
                description: "Eco-conscious building methods and materials"
              },
              {
                icon: '🤝',
                title: "Community Focus",
                description: "Enhancing neighborhoods through thoughtful development"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-slate-50 rounded-lg border-2 border-slate-200 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 bg-white rounded-md border-2 border-slate-200 flex items-center justify-center text-2xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-lg border-2 border-slate-200 p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  Our Mission
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  To revolutionize urban development through innovative engineering while preserving 
                  community values and environmental sustainability.
                </p>
                <div className="pl-4 border-l-4 border-blue-500">
                  <p className="text-slate-600 text-sm italic">
                    "Building not just structures, but sustainable futures"
                  </p>
                </div>
              </div>
              <div className="aspect-square bg-slate-200 rounded-md overflow-hidden border-2 border-slate-200">
                <img
                  src="/construction-team.jpg"
                  alt="Construction team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Leadership Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "John Carter",
                role: "CEO & Founder",
                photo: "/john-carter.jpg"
              },
              {
                name: "Sarah Wilson",
                role: "Chief Engineer",
                photo: "/sarah-wilson.jpg"
              },
              {
                name: "Michael Chen",
                role: "Operations Director",
                photo: "/michael-chen.jpg"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-blue-500 transition-colors"
              >
                <div className="aspect-square bg-slate-200 rounded-md overflow-hidden border-2 border-slate-200 mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-slate-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;