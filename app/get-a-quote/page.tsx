'use client'
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ftnozlnzjctklpmtbmix.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0bm96bG56amN0a2xwbXRibWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3MTE1MTMsImV4cCI6MjA1MzI4NzUxM30.x8udPBoquY0Ia4QN-GhhMDUdy7eoakhApenMG-xw4yo';
const supabaseClient = createClient(supabaseUrl, supabaseKey);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function GetAQuote() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [modal, setModal] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabaseClient
      .from('entries')
      .insert([formData]);

    if (error) {
      setModal({ success: false, message: 'There was an error submitting the form. Please try again.' });
    } else {
      setModal({ success: true, message: 'Form submitted successfully!' });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center py-32">
      {/* Contact Form Section */}
      <section className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="mt-2 text-gray-600">Let&apos;s build something remarkable together</p>
          </div>

          {/* Name Field */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative">
              <input
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="text"
                placeholder="John Anderson"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <div className="relative">
              <input
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="email"
                placeholder="john@company.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Subject Field */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Project Type</label>
            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="">Select project type</option>
                <option value="quote">Request a Quote</option>
                <option value="project">New Project</option>
                <option value="job">Career Opportunity</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Project Details</label>
            <textarea
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Describe your project..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm hover:shadow-md"
          >
            Send Message
            <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </form>
      </section>

      {/* Modal Dialog */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm text-center space-y-4 animate-scale-in border-2 border-gray-200">
            <div className={`mx-auto flex items-center justify-center w-12 h-12 rounded-full ${modal.success ? 'bg-green-100' : 'bg-red-100'}`}>
              {modal.success ? (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <h2 className={`text-xl font-semibold ${modal.success ? 'text-green-800' : 'text-red-800'}`}>
              {modal.success ? 'Success!' : 'Error'}
            </h2>
            <p className="text-gray-600">{modal.message}</p>
            <button
              onClick={() => setModal(null)}
              className="w-full mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}