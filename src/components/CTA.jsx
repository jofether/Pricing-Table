import React from 'react';

export function CTA() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto text-center">
      <div className="relative rounded-3xl p-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-80"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-overlay opacity-10 filter blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
          <p className="text-xl text-blue-90 mb-8">Join thousands of teams already using SaaS Pro to achieve more. Start your journey today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-xl hover:shadow-2xl transition transform hover:scale-105">
              Start Your Free Trial Today →
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
