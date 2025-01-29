"use client";

import React, { useState } from "react";
import Link from "next/link";


const HeaderSection: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Simple Clean Logo */}
          <Link href="/" className="text-xl font-bold text-slate-900">
           Articulate  <span className="text-blue-600 space-x-2">Constructions</span>
          </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center flex-1 justify-center">
            <div className="flex gap-8 text-sm font-medium text-slate-600">
              <Link
                href="/projects"
                className="hover:text-blue-600 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/solutions"
                className="hover:text-blue-600 transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="hover:text-blue-600 transition-colors"
              >
                Careers
              </Link>
            </div>
          </nav>

          {/* CTA Button - Right Aligned */}
          <div className="hidden md:block">
            <Link
              href="/get-a-quote"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center gap-2 transition-colors"
            >
              Get a Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Simple Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-slate-100">
          <div className="px-4 py-6 space-y-6">
            <Link
              href="/projects"
              className="block text-slate-600 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/solutions"
              className="block text-slate-600 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="block text-slate-600 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/careers"
              className="block text-slate-600 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/get-a-quote"
              className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;