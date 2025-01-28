import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/solutions", label: "Solutions" },
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
  ];

  const contactInfo = [
    { icon: MapPin, value: "Kiambu Town, Kenya" },
    { icon: Phone, value: "+254 772 464437" },
    { icon: Mail, value: "throughbuilders@gmail.com" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="flex flex-col space-y-4">

                 {/* Simple Clean Logo */}
                    <Link href="/" className="text-xl font-bold text-slate-900">
                      <Image src="/Logo/logo.png" alt="Logo" width={50} height={50} />
                    </Link>


              <p className="text-gray-500 text-base leading-relaxed">
                Pioneering construction excellence since 2012. 
                Certified professionals committed to transforming 
                visions into enduring structures.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors duration-200 border-2 border-gray-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-gray-600 hover:text-indigo-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wider">
                Quick Links
              </h3>
              <nav className="grid grid-cols-1 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 text-base -ml-2 p-2 rounded-lg hover:bg-indigo-50 border-2 border-gray-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wider">
                Get in Touch
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 p-2 bg-indigo-50 rounded-lg border-2 border-gray-200">
                      <info.icon className="h-4 w-4 text-indigo-600" />
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
        <div className="mt-14 pt-6 border-t border-gray-100">
          <div className="flex flex-col items-center space-y-1">
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
