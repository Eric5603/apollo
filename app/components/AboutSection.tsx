// app/about/page.tsx
import { ReactElement } from 'react';

const AboutPage = (): ReactElement => {
  return (
    <div className="min-h-screen bg-slate-50">
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
                  &ldquo;Building not just structures, but sustainable futures&rdquo;
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
    </div>
  );
};

export default AboutPage;