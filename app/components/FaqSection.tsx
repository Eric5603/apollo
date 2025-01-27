"use client";

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 'faq1',
      question: "What's included in your construction project timeline?",
      answer: "Our comprehensive timeline includes site preparation, foundation work, structural construction, interior finishing, and final inspections. Each phase is meticulously planned with regular client updates and quality checks."
    },
    {
      id: 'faq2',
      question: "How do you handle permits and regulations?",
      answer: "Our team manages all necessary permits and ensures full compliance with local building codes. We coordinate with municipal authorities and handle all paperwork, keeping you informed at every step."
    },
    {
      id: 'faq3',
      question: "What materials do you typically work with?",
      answer: "We use premium, sustainable materials including engineered lumber, high-efficiency insulation, and low-VOC finishes. All materials meet or exceed industry standards for safety and durability."
    },
    {
      id: 'faq4',
      question: "Can we make changes during construction?",
      answer: "While we recommend finalizing plans beforehand, we accommodate changes through our formal change order process. Our project managers will provide cost and timeline implications before proceeding."
    },
    {
      id: 'faq5',
      question: "How do you ensure worksite safety?",
      answer: "Safety is paramount. We conduct daily inspections, provide OSHA-compliant training, and maintain rigorous safety protocols. Our sites feature secure perimeters and real-time monitoring systems."
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Building Solutions
            <span className="text-blue-600 ml-2">Explained</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about our construction process, 
            materials, and project management approach.
          </p>
        </div>

        <div className="grid gap-4 max-w-3xl mx-auto">
          {faqData.map((faq) => (
            <div 
              key={faq.id}
              className="border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg 
                  className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openId === faq.id ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? Our construction experts are ready to help.
          </p>
          <a
            href="/get-a-quote"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            Schedule Consultation
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;