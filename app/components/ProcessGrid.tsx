import Image from 'next/image';
import { FC } from 'react';

const ProcessHero: FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Consultation & Planning',
      description: 'Initial assessment and feasibility studies with budget planning',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      step: 2,
      title: 'Design Development',
      description: 'Architectural 3D modeling and engineering approvals',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      step: 3,
      title: 'Construction Phase',
      description: 'Quality-controlled execution with daily progress monitoring',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      step: 4,
      title: 'Final Handover',
      description: 'Quality assurance checks and warranty documentation',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-sm text-blue-600 font-semibold mb-4">OUR PROCESS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Building Excellence Through Proven Methodology
            </h2>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.step} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      {step.icon}
                    </div>
                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-500">
                      0{step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/process/construction-process.jpg" 
              alt="Construction process" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;