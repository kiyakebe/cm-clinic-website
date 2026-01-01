import React from 'react';
import { IconArrowRight, IconShieldCheck } from '@tabler/icons-react';
import Button from '../ui/Button';
import { Display, Paragraph } from '../ui/Typography';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-40 pb-24 overflow-hidden bg-white">
      {/* Structural Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -skew-x-6 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-4 mb-12">
              <div className="h-px w-10 bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">The Healis Methodology</span>
            </div>

            <Display className="mb-12 max-w-3xl leading-[0.95] tracking-tighter">
              Advanced clinical <br />
              <span className="text-blue-600 italic">care engineered</span> <br />
              for longevity.
            </Display>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <Paragraph className="text-lg text-slate-500 font-medium leading-relaxed">
                We bridge the gap between medical expertise and biological data. Our specialists provide precise interventions to optimize your healthspan through molecular diagnostics.
              </Paragraph>

              <div className="flex items-center gap-5 py-2">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?u=doc${i}`}
                      className="w-14 h-14 rounded-full border-4 border-white shadow-xl"
                      alt="Clinical Specialist"
                    />
                  ))}
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Board Faculty</p>
                  <p className="text-slate-950 text-xs font-black tracking-tight">Tenured Experts</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <Link href={"/booking"}>
                <Button size="xl">
                  Start Consultation
                  <IconArrowRight size={20} />
                </Button>
              </Link>

              <div className="flex items-center gap-3 px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100">
                <IconShieldCheck className="text-blue-600" size={18} />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">HIPAA & GDPR Secure</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-50 rounded-[3rem] translate-x-6 translate-y-6" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white aspect-[5/6] bg-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                  alt="Clinical Interior"
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[2.5s] hover:grayscale-0 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-panel p-10 rounded-3xl shadow-2xl max-w-[280px] border border-white/60">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Active Intake</span>
                </div>
                <p className="text-base font-bold text-slate-950 leading-snug tracking-tight">Enrolling new patient profiles for precision longevity cohorts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;