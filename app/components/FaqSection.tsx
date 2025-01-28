
  
 "use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const faqData = [
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
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Project Insights
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Clear answers to common construction questions
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="group"
            >
              <div className="border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <button
                  onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 text-left pr-6">
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: activeId === faq.id ? 45 : 0 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <div className="w-7 h-7 rounded-full bg-blue-600/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M12 6V18M6 12H18"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: 1,
                        height: 'auto',
                        transition: { duration: 0.3 }
                      }}
                      exit={{ 
                        opacity: 0,
                        height: 0,
                        transition: { duration: 0.2 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-1 bg-white border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;