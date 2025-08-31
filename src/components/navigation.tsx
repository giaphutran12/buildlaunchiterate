"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-lg sm:text-xl font-bold text-gray-900">
              Build Launch Iterate
              <Image
                src="/logo.svg"
                alt="Build Launch Iterate Logo"
                width={120}
                height={90}
                className="h-8 w-auto sm:h-12"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#services"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Process
            </a>
            <Button asChild>
              <a href="#call-to-action">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-end">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-800 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-200 mt-4">
            <a
              href="#services"
              className="block text-gray-600 hover:text-purple-600 transition-colors py-2 text-lg"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a
              href="#process"
              className="block text-gray-600 hover:text-purple-600 transition-colors py-2 text-lg"
              onClick={closeMobileMenu}
            >
              Process
            </a>
            <Button asChild className="w-full">
              <a href="#call-to-action" onClick={closeMobileMenu}>
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
