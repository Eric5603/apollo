// app/about/page.tsx
import { ReactElement } from 'react';

interface HeroSection {
  title: string;
  content: string;
  image: string;
  reverse?: boolean;
  stats?: Array<{ value: string; label: string }>;
}

const AboutSection = (): ReactElement => {
  const sections: HeroSection[] = [
    // ... (unchanged data array)
  ];

  return (
    <div className="bg-white">
      {/* Video Hero - Enhanced spatial efficiency */}
      <section className="relative h-[40vh] md:h-[35vh] rounded-xl overflow-hidden mx-4 md:mx-6 my-6 shadow-lg">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover scale-105"
          >
            <source src="https://videos.pexels.com/video-files/4271760/4271760-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative h-full flex items-center justify-center md:justify-start">
          <div className="max-w-2xl px-4 sm:px-6 lg:px-8 py-4 bg-white/95 backdrop-blur-md rounded-xl shadow-md mx-4 transition-all hover:bg-white/100">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 leading-tight">
              Transform Your Cityscape
              <span className="text-blue-600 block mt-1 text-2xl sm:text-3xl">Tomorrow&apos;s Urban Vision</span>
            </h1>
            <p className="text-base text-gray-700 mb-2">
              Pioneering sustainable solutions for smarter, greener cities
            </p>
            <button className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm hover:bg-blue-700 transition-colors">
              Explore Our Vision →
            </button>
          </div>
        </div>
      </section>

      {/* Alternating Sections - Optimized information density */}
      {sections.map((section, index) => (
        <section key={index} className={`py-14 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${section.reverse ? 'flex-row-reverse' : ''}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content - Improved typographic hierarchy */}
              <div className={`space-y-4 ${section.reverse ? 'md:order-2' : ''}`}>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-snug">
                  {section.title}
                </h2>
                <p className="text-base text-gray-700 leading-relaxed max-w-xl">
                  {section.content}
                </p>
                {section.stats && (
                  <div className="grid grid-cols-3 gap-3 mt-8">
                    {section.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-white p-3 rounded-lg shadow-sm border-2 border-gray-200">
                        <div className="text-xl font-bold text-blue-600 mb-1">{stat.value}</div>
                        <div className="text-xs font-semibold text-gray-600 tracking-wide uppercase">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image - Refined aspect ratios */}
              <div className={`relative h-[360px] rounded-xl overflow-hidden shadow-lg ${section.reverse ? 'md:order-1' : ''}`}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Mission Statement - Enhanced data visualization */}
      <section className="py-14 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Foundational Principles
          </h2>
          
          <blockquote className="text-lg leading-normal font-serif italic text-gray-700 max-w-2xl mx-auto mb-10 relative">
            <span className="absolute -left-5 top-0 text-3xl text-blue-600">“</span>
            <p className="relative">
              True innovation in construction harmonizes human ambition with ecological stewardship. 
              We create resilient spaces that elevate communities while actively regenerating 
              the environments they inhabit.
            </p>
            <span className="absolute -right-5 bottom-0 text-3xl text-blue-600">”</span>
          </blockquote>

          <div className="mt-10 border-t border-gray-200 pt-10">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Safety as Culture", 
                  icon: "🛡️",
                  text: "Beyond compliance: embedded protective systems" 
                },
                { 
                  title: "Circular Materials", 
                  icon: "♻️",
                  text: "97% recycled/resourced content average" 
                },
                { 
                  title: "Microscale Precision", 
                  icon: "📏",
                  text: "Laser-guided quality assurance systems" 
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col items-center gap-3 transition-all hover:-translate-y-1">
                    <div className="w-6 h-6 bg-blue-600/10 rounded-lg flex items-center justify-center text-base transition-colors group-hover:bg-blue-600/20">
                      <span className="text-blue-600">{item.icon}</span>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-xs font-medium">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;