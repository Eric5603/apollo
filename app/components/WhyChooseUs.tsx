import { FC } from 'react';

const WhyChooseUsHero: FC = () => {
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Safety First',
      description: 'We prioritize safety above all else, adhering to strict protocols and industry standards to ensure every site remains accident-free.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      title: 'Quality Craftsmanship',
      description: 'Decades of experience and skilled tradespeople guarantee superior construction quality using premium materials and proven techniques.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Timely Delivery',
      description: 'We honor deadlines through meticulous planning and efficient project management, ensuring your project stays on schedule and budget.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-sm text-blue-600 font-semibold mb-4">OUR CORE PRINCIPLES</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Why Partner With Us?
            </h2>
            
            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-6 group p-6 hover:bg-gray-50 rounded-xl transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6" 
              alt="Construction team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-blue-800/20" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60">
              <blockquote className="text-white text-lg italic">
                "True craftsmanship lies in the perfect balance of safety, quality, and precision timing"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsHero;