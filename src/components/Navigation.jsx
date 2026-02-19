import React from 'react';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-5 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-lg">
            ✨
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SaaS Pro</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition">Testimonials</a>
          <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
