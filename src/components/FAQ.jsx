import React, { useState } from 'react';

export function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle. No penalties or hidden fees."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency for enterprise customers. Monthly and annual billing options available."
    },
    {
      question: "Is there a free trial?",
      answer: "Absolutely! All plans come with a 14-day free trial. No credit card required to get started. Full access to all features during trial."
    },
    {
      question: "How do I export my data?",
      answer: "Your data is always yours. Export it anytime in CSV, JSON, or PDF formats with a single click. API access also available for automated exports."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee if you're not completely satisfied with our service. No questions asked."
    },
    {
      question: "What if I exceed my usage limits?",
      answer: "We notify you when approaching limits. You can easily upgrade without losing any data or productivity. No surprise charges."
    },
    {
      question: "Is my data secure?",
      answer: "Yes! We use AES-256 encryption, regular security audits, and comply with GDPR, HIPAA, and SOC 2 Type II standards."
    },
    {
      question: "Do you offer technical support?",
      answer: "All plans include support. Starter has community support, Professional has priority email support, and Enterprise includes 24/7 dedicated support with a dedicated account manager."
    }
  ];

  return (
    <section id="faq" className="px-6 py-20 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-lg">Answers to common questions about our platform</p>
        </div>

        <div className="space-y-4 flex flex-row">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition">
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between bg-slate-800/50 hover:bg-slate-800/80 transition text-left"
              >
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <span className={`text-xl transition ${
                  openFAQ === idx ? 'rotate-180 inline-block' : ''
                }`}>⬇️</span>
              </button>
              {openFAQ === idx && (
                <div className="p-6 bg-slate-900/50 border-t border-slate-700 text-slate-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
