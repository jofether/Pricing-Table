import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      company: "TechStart Inc.",
      text: "This platform has transformed how we manage our projects. The ROI was visible within the first month! Our team productivity increased by 40%.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Product Manager",
      company: "InnovateLabs",
      text: "The support team is exceptional. Every question answered within hours. Highly recommend to any growing team!",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder & CEO",
      company: "CreativeFlow",
      text: "Best investment we made this year. Scalable, intuitive, and worth every penny. Couldn't imagine working without it now.",
      avatar: "👩‍🔬",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Engineering Lead",
      company: "TechVentures",
      text: "Seamless integration with our existing tools. The onboarding was painless and our team was productive from day one.",
      avatar: "👨‍🔧",
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Teams Worldwide</h2>
        <p className="text-slate-400 text-lg">See what our customers have to say about SaaS Pro</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition hover:shadow-xl">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed text-lg">"{testimonial.text}"</p>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
              <div className="text-4xl">{testimonial.avatar}</div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-slate-400 text-sm">{testimonial.role}</p>
                <p className="text-slate-500 text-xs">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
