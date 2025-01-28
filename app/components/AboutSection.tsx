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
    // ... (keep section data the same)
  ];

  return (
    <div className="bg-white">
      {/* Video Hero */}
      <section className="relative h-[50vh] md:h-[55vh] rounded-xl overflow-hidden mx-auto max-w-7xl px-4 md:px-6 my-14 shadow-lg">
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
          <div className="max-w-2xl px-6 py-5 bg-white/95 backdrop-blur-md rounded-xl shadow-md mx-4 transition-all hover:bg-white/100 border-2 border-gray-200">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Transform Your Cityscape
              <span className="text-blue-600 block mt-2 text-3xl md:text-4xl">Tomorrow&apos;s Urban Vision</span>
            </h1>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Pioneering sustainable solutions for smarter, greener cities
            </p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm md:text-base">
              Explore Our Vision →
            </button>
          </div>
        </div>
      </section>

      {/* Alternating Hero Sections */}
      {sections.map((section, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className={`grid md:grid-cols-2 gap-10 items-center ${section.reverse ? 'md:direction-rtl' : ''}`}>
              {/* Content */}
              <div className="space-y-6 md:pr-10 lg:pr-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.15]">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                  {section.content}
                </p>
                {section.stats && (
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {section.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-white p-4 rounded-lg shadow-sm border-2 border-gray-200 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                        <div className="text-xs font-semibold text-gray-600 tracking-wide uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="relative h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Foundational Principles
            </h2>
            
            <blockquote className="relative text-xl leading-relaxed font-serif italic text-gray-700 max-w-3xl mx-auto">
              <span className="absolute -left-5 top-0 text-4xl text-blue-600">“</span>
              <p className="px-6">
                True innovation in construction harmonizes human ambition with ecological stewardship. 
                We create resilient spaces that elevate communities while actively regenerating 
                the environments they inhabit.
              </p>
              <span className="absolute -right-5 bottom-0 text-4xl text-blue-600">”</span>
            </blockquote>
          </div>

          <div className="mt-12 pt-12 border-t-2 border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
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
                <div key={index} className="group px-4 py-5">
                  <div className="flex flex-col items-center gap-4 transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center text-2xl transition-colors group-hover:bg-blue-600/20 border-2 border-gray-200">
                      <span className="text-blue-600">{item.icon}</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm font-medium leading-tight max-w-xs mx-auto">
                        {item.text}
                      </p>
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