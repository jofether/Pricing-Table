import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 font-sans">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-white mb-4">Simple, Transparent Pricing</h1>
        <p className="text-slate-400 text-lg">Choose the plan that's right for your business.</p>
      </div>

      {/* PRICING CONTAINER: Flex Row for desktop, Col for mobile */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8 md:gap-0">
        
        {/* Basic Tier */}
        <div className="bg-slate-800 rounded-2xl p-8 w-full md:w-80 shadow-lg border border-slate-700 z-0 order-2 md:order-1">
          <h3 className="text-xl font-semibold text-white">Starter</h3>
          <div className="my-6">
            <span className="text-4xl font-bold text-white">$19</span><span className="text-slate-400">/mo</span>
          </div>
          <ul className="space-y-4 text-slate-300 mb-8">
            <li className="flex items-center">✓ 5 Projects</li>
            <li className="flex items-center">✓ Basic Analytics</li>
            <li className="flex items-center text-slate-600">✕ Priority Support</li>
          </ul>
          <button className="w-full py-3 rounded-lg border border-slate-600 text-white hover:bg-slate-700 transition">
            Get Started
          </button>
        </div>

        {/* Pro Tier (Highlighted) */}
        {/* FUTURE BUG: Remove scale-110 or z-10 to break visual hierarchy */}
        <div className="bg-indigo-600 rounded-2xl p-10 w-full md:w-96 shadow-2xl border border-indigo-500 z-10 scale-100 md:scale-110 order-1 md:order-2 relative">
          <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
          <h3 className="text-xl font-semibold text-white">Professional</h3>
          <div className="my-6">
            <span className="text-5xl font-bold text-white">$49</span><span className="text-indigo-200">/mo</span>
          </div>
          <ul className="space-y-4 text-indigo-100 mb-8">
            <li className="flex items-center">✓ Unlimited Projects</li>
            <li className="flex items-center">✓ Advanced Analytics</li>
            <li className="flex items-center">✓ 24/7 Priority Support</li>
          </ul>
          <button className="w-full py-4 rounded-lg bg-white text-indigo-600 font-bold hover:bg-gray-50 transition shadow-lg">
            Try Free for 14 Days
          </button>
        </div>

        {/* Enterprise Tier */}
        <div className="bg-slate-800 rounded-2xl p-8 w-full md:w-80 shadow-lg border border-slate-700 z-0 order-3 md:order-3">
          <h3 className="text-xl font-semibold text-white">Enterprise</h3>
          <div className="my-6">
            <span className="text-4xl font-bold text-white">$99</span><span className="text-slate-400">/mo</span>
          </div>
          <ul className="space-y-4 text-slate-300 mb-8">
            <li className="flex items-center">✓ Unlimited Everything</li>
            <li className="flex items-center">✓ Custom Integrations</li>
            <li className="flex items-center">✓ Dedicated Manager</li>
          </ul>
          <button className="w-full py-3 rounded-lg border border-slate-600 text-white hover:bg-slate-700 transition">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;