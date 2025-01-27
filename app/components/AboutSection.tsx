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
    {
      title: "Building Tomorrow's Landmarks",
      content: "Pioneering construction excellence since 2003, we combine cutting-edge technology with timeless craftsmanship to create structures that define skylines.",
      image: "/images/about/hero.jpg",
      stats: [
        { value: '20+', label: 'Years Experience' },
        { value: '500+', label: 'Projects Completed' },
        { value: '99%', label: 'Client Satisfaction' }
      ]
    },
    {
      title: "Our Mission",
      content: "To revolutionize urban development through sustainable innovation while maintaining the highest standards of safety and quality. We're committed to building communities, not just structures.",
      image: "/images/about/our-mission.jpg",
      reverse: true
      
    },
    {
      title: "Engineering Legacy",
      content: "From visionary concepts to meticulous execution, our journey reflects our dedication to transforming architectural dreams into enduring realities.",
      image: "/images/about/engineering-legacy.jpg",
      stats: [
        { value: '2003', label: 'Founded in Chicago' },
        { value: '1M+', label: 'Square Feet Built' },
        { value: '150+', label: 'Professional Team' }
      ]
    }
  ];

  return (
    <div className="justify-center items-center bg-white">
      {/* Video Hero */}
      <section className="relative h-[60vh] md:h-[50vh] rounded-3xl overflow-hidden mx-4 md:mx-8 my-12 shadow-xl">
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
          <div className="max-w-2xl px-6 sm:px-8 lg:px-12 py-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg mx-4 transition-all hover:bg-white/100">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              Transform Your Cityscape
              <span className="text-blue-600 block mt-2">Tomorrow&apos;s Urban Vision</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Pioneering sustainable solutions for smarter, greener cities
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Explore Our Vision →
            </button>
          </div>
        </div>
      </section>

      {/* Alternating Hero Sections */}
      {sections.map((section, index) => (
        <section key={index} className={`py-28 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 ${section.reverse ? 'flex-row-reverse' : ''}`}>
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Content */}
              <div className={`space-y-8 ${section.reverse ? 'md:order-2' : ''}`}>
                <h2 className="text-5xl font-bold text-gray-900 tracking-tighter leading-[1.15]">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                  {section.content}
                </p>
                {section.stats && (
                  <div className="grid grid-cols-3 gap-5 mt-12">
                    {section.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100/80">
                        <div className="text-3xl font-bold text-blue-600 mb-1.5">{stat.value}</div>
                        <div className="text-sm font-semibold text-gray-600 tracking-wide">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl ${section.reverse ? 'md:order-1' : ''}`}>
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
      <section className="py-28 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-4xl font-bold mb-12 tracking-tight">
            Foundational Principles
          </h2>
          
          <blockquote className="text-2xl leading-snug font-serif italic text-gray-700 max-w-3xl mx-auto mb-16 relative">
            <span className="absolute -left-8 top-0 text-5xl text-blue-600">“</span>
            <p className="relative">
              True innovation in construction harmonizes human ambition with ecological stewardship. 
              We create resilient spaces that elevate communities while actively regenerating 
              the environments they inhabit.
            </p>
            <span className="absolute -right-8 bottom-0 text-5xl text-blue-600">”</span>
          </blockquote>

          <div className="mt-16 border-t border-gray-200 pt-16">
            <div className="grid md:grid-cols-3 gap-12">
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
                  <div className="flex flex-col items-center gap-6 transition-all hover:-translate-y-1.5">
                    <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-2xl transition-colors group-hover:bg-blue-600/20">
                      <span className="text-blue-600">{item.icon}</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm font-medium">{item.text}</p>
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