import React from 'react';

export function Features() {
  const features = [
    { icon: '⚡', title: "Lightning Fast", description: "Optimized performance for maximum speed and reliability. 99.99% uptime guarantee." },
    { icon: '🛡️', title: "Enterprise Security", description: "Bank-level encryption and data protection. SOC 2 Type II compliant." },
    { icon: '🌍', title: "Global Scale", description: "Access from anywhere with intelligent caching and CDN delivery." },
    { icon: '📈', title: "Real-time Analytics", description: "Track every metric that matters to your business with instant insights." },
    { icon: '👥', title: "Team Collaboration", description: "Work together seamlessly with real-time updates and smart notifications." },
    { icon: '🚀', title: "API First", description: "Powerful RESTful and GraphQL APIs for seamless integrations." },
  ];

  return (
    <section id="features" className="px-6 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features Built for Teams</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to collaborate, track progress, and deliver amazing results</p>
      </div>

      {/* [BUG - Layout] Grid direction reversed, columns break visually */}
      {/* [FIX] Change flex-col-reverse back to grid md:grid-cols-2 lg:grid-cols-3 */}
      <div className="flex flex-col-reverse gap-8">
        {features.map((feature, idx) => {
          return (
            <div key={idx} className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700 hover:border-slate-600 transition group">
              <div className="mb-4 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
