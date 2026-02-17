import React from 'react';

export function Hero() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
          <span className="text-blue-300 text-sm font-semibold">🎉 Join 10,000+ Happy Customers</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
          The Future of <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Project Management</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
          Streamline your workflow, boost team productivity, and ship faster than ever before. Everything you need in one beautiful platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105">
            Start Free Trial →
          </button>
          <button className="px-8 py-4 border-2 border-slate-600 rounded-lg font-bold text-lg hover:border-slate-400 transition">
            Watch Demo
          </button>
        </div>

        <p className="text-slate-400 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  );
}
