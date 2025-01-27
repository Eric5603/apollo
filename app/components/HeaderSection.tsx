"use client";

import React, { useState } from "react";
import Link from "next/link";

const HeaderSection: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">Articulate</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6 text-sm font-medium text-gray-700">
            <Link href="/projects" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="/solutions" className="hover:text-blue-600 transition-colors">
              Solutions
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/careers" className="hover:text-blue-600 transition-colors">
              Careers
            </Link>
            <Link
              href="/get-a-quote"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-gray-700 focus:outline-none focus:ring md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="absolute top-0 left-0 z-40 h-screen w-64 bg-white p-4 shadow-lg">
            <button
              className="mb-4 rounded-md p-2 text-gray-700 focus:outline-none focus:ring"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="space-y-4">
              <Link href="/Solutions" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>
                Solutions
              </Link>
              <Link href="/projects" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>
                Projects
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>
                About Us
              </Link>
              <Link href="/careers" className="block text-gray-700 hover:text-blue-600" onClick={closeMenu}>
                Careers
              </Link>
              <Link
                href="/get-a-quote"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center"
                onClick={closeMenu}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;