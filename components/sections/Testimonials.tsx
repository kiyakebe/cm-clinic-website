"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { IconChevronLeft, IconChevronRight, IconQuote, IconActivity, IconCircleCheck } from '@tabler/icons-react';
import { Heading, Subheading } from '../ui/Typography';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: '01',
      name: 'Evelyn Harper',
      role: 'Longevity Member',
      outcome: 'Biological Age -8.2 Years',
      treatment: 'Epigenetic Protocol',
      quote: "The Healis team architected a new biological baseline for my life. I haven't felt this cognitive clarity since my late twenties.",
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
      metrics: ['92% Deep Sleep Increase', 'RHR: 52bpm Sustained']
    },
    {
      id: '02',
      name: 'Marcus Sterling',
      role: 'Executive Client',
      outcome: 'Metabolic Optimization',
      treatment: 'Neuro-Somatic Reset',
      quote: "In high-pressure environments, resilience is everything. The precision protocols transformed my stress response into focused energy.",
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
      metrics: ['Cortisol Levels Stabilized', '22% Gain in Lean Mass']
    }
  ];

  const next = useCallback(() => setActiveIndex((prev) => (prev + 1) % testimonials.length), [testimonials.length]);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[activeIndex];

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="h-px w-6 bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">The Patient Journey</span>
            </div>

            <div key={current.id} className="animate-fadeIn">
              <div className="flex items-center gap-4 mb-10">
                <IconQuote className="text-blue-100" size={56} stroke={1.5} />
              </div>

              <Heading className="mb-10 !text-3xl md:!text-4xl leading-snug font-medium text-slate-800 italic pr-8">
                &quot;{current.quote}&quot;
              </Heading>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {current.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <IconActivity size={16} className="text-blue-600" />
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">{metric}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-10">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600 block mb-1">Clinical Outcome</span>
                  <span className="text-2xl font-black text-slate-950 tracking-tighter italic">{current.outcome}</span>
                </div>

                <div className="flex gap-3">
                  <button onClick={prev} className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                    <IconChevronLeft size={20} />
                  </button>
                  <button onClick={next} className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                    <IconChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-slate-50 relative group bg-slate-100">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <IconCircleCheck className="text-blue-400" size={16} />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-100">Verified Protocol Graduate</span>
                  </div>
                  <Subheading className="text-white !text-2xl mb-0.5 font-bold tracking-tight">{current.name}</Subheading>
                  <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest">{current.role}</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 glass-panel p-6 rounded-2xl shadow-xl max-w-[200px] border border-white">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Primary Intervention</p>
                <p className="text-sm font-bold text-slate-900 leading-tight italic">{current.treatment}</p>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-10 bg-blue-600' : 'w-3 bg-slate-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
