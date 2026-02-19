import React, { useState } from 'react';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const priceMultiplier = billingCycle === 'annual' ? 10 : 1;
  const savingsText = billingCycle === 'annual' ? 'Save 17%' : '';

  const pricingPlans = [
    {
      name: "Starter",
      price: 19 * priceMultiplier,
      description: "Perfect for getting started",
      features: [
        "5 Active Projects",
        "Basic Analytics Dashboard",
        "Community Support",
        "1 Team Member",
        "10GB Storage",
        "API Access",
        "Email Notifications",
      ],
      cta: "Get Started Free",
      highlighted: false,
    },
    {
      name: "Professional",
      price: 49 * priceMultiplier,
      description: "For growing teams",
      features: [
        "Unlimited Projects",
        "Advanced Analytics & Reports",
        "Priority Email Support",
        "Up to 10 Team Members",
        "1TB Storage",
        "API Access + Webhooks",
        "Custom Integrations",
        "SSO & Advanced Security",
        "Custom Domain Support",
        "White Label Options",
      ],
      cta: "Try Free for 14 Days",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: 99 * priceMultiplier,
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Unlimited Team Members",
        "24/7 Dedicated Support",
        "Unlimited Storage",
        "Custom Development",
        "SLA Guarantee",
        "Advanced Compliance",
        "Dedicated Account Manager",
        "Priority Onboarding",
        "Custom Training",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="px-6 py-20 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 text-lg mb-8">Choose the perfect plan for your needs. Always flexible to scale.</p>
          
          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-6 mb-12 p-20">
            <span className={billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-slate-700"
            >
              <span
                className={`${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                } inline-block h-6 w-6 transform rounded-full bg-white transition`}
              />
            </button>
            <span className={billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}>
              Annual {savingsText && <span className="text-green-400 ml-2">{savingsText}</span>}
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 transition transform hover:scale-105 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-purple-700 border-2 border-blue-400 shadow-2xl shadow-blue-500/30 md:scale-105'
                  : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-full">
                    ⭐ MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className={plan.highlighted ? 'text-blue-100' : 'text-slate-400'}>/month</span>
                {billingCycle === 'annual' && <p className="text-sm text-slate-400 mt-2">Billed annually</p>}
              </div>

              <button className={`w-full py-3 rounded-xl font-bold mb-8 transition ${
                plan.highlighted
                  ? 'bg-white text-purple-600 hover:bg-slate-100 shadow-lg'
                  : 'border-2 border-slate-600 text-white hover:border-slate-400'
              }`}>
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <span className="text-lg text-green-400 flex-shrink-0 mt-0.5">✅</span>
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-slate-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
