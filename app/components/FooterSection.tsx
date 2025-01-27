import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const contactInfo = [
    { icon: MapPin, value: "123 Construction Lane, Metro City, MC 12345" },
    { icon: Phone, value: "+1 (555) 123-4567" },
    { icon: Mail, value: "hello@buildmaster.com" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Articulate<span className="text-indigo-600">Construction</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Pioneering construction excellence since 2012. 
                Certified professionals committed to transforming 
                visions into enduring structures.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2.5 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex flex-col space-y-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Quick Links
              </h3>
              <nav className="grid grid-cols-1 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 text-base -ml-2.5 p-2.5 rounded-lg hover:bg-indigo-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex flex-col space-y-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 p-2.5 bg-indigo-50 rounded-lg">
                      <info.icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="text-gray-500 text-base leading-relaxed">
                      {info.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-gray-500 text-center">
              &copy; {currentYear} Articulate Construction. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              Licensed and Insured • ROC #123456
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;