"use client"
import React, { useState } from 'react';
import { IconPlus, IconMinus, IconMessages } from '@tabler/icons-react';
import { Heading, Paragraph, Subheading } from '../ui/Typography';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do you offer virtual initial consultations?',
      answer: 'Yes, our specialists offer secure telehealth assessments for first-time assessments, allowing you to discuss your profile from the comfort of home.',
    },
    {
      question: 'How does the membership model work?',
      answer: 'While we accept traditional insurance for many protocols, we offer a dedicated membership tier for 24/7 concierge access and longevity tracking.',
    },
    {
      question: 'Can I transfer my medical records securely?',
      answer: 'Our onboarding team handles the entire data transfer process, ensuring your medical history is integrated into our precision platform.',
    },
    {
      question: 'What happens in an emergency after hours?',
      answer: 'Members have access to a dedicated 24/7 hotline. For non-members, we provide on-call physician guidance for urgent assessments.',
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Clarifications</span>
            </div>
            <Heading className="mb-8">Queries about <br />our <span className="text-blue-600">clinical care</span></Heading>
            <Paragraph className="text-slate-500 mb-10 max-w-sm">
              Transparency is key to a trusting relationship. If you don&apos;t find what you need, our team is available.
            </Paragraph>
            <div className="flex items-center gap-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600">
                <IconMessages size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Need specific answers?</p>
                <p className="text-xs text-blue-600 cursor-pointer font-bold hover:underline">Speak with a specialist now</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-slate-100">
            {faqs.map((faq, index) => (
              <div key={index} className="py-8 first:pt-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <Subheading className={`!text-xl transition-colors duration-300 ${openIndex === index ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-500'}`}>
                    {faq.question}
                  </Subheading>
                  <span className={`transition-all duration-300 ${openIndex === index ? 'text-blue-600' : 'text-slate-300'}`}>
                    {openIndex === index ? <IconMinus size={20} /> : <IconPlus size={20} />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-6 animate-fadeIn">
                    <Paragraph className="text-slate-500 text-base max-w-2xl">
                      {faq.answer}
                    </Paragraph>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
