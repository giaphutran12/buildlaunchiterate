"use client";

import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 glass-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold luxury-text-gradient">
            Build Launch Iterate
          </div>
          <div className="flex gap-8 items-center">
            <a
              href="#services"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Process
            </a>
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
