"use client";

import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 py-5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Build Launch Iterate</div>
          <div className="flex gap-8 items-center">
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
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
