import React from 'react';
import { IconArrowRight, IconFlask, IconMicroscope, IconCircleCheck, IconHexagon, IconAward } from '@tabler/icons-react';
import { Heading, Paragraph, Subheading } from '../ui/Typography';
import Button from '../ui/Button';
import Link from 'next/link';



const Doctors: React.FC = () => {
  const secondaryBoard = [
    {
      id: 'marcus-webb',
      name: 'Dr. Marcus Webb',
      role: 'Neurological Research',
      institution: 'Johns Hopkins Medicine',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
      focus: 'Synaptic Plasticity'
    },
    {
      id: 'sarah-chen',
      name: 'Dr. Sarah Chen',
      role: 'Systemic Immunology',
      institution: 'Stanford School of Medicine',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
      focus: 'Microbiome Axis'
    },
    {
      id: 'julian-vance',
      name: 'Dr. Julian Vance',
      role: 'Endocrinology Lead',
      institution: 'Mayo Clinic Faculty',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
      focus: 'Hormonal Baseline'
    }
  ];

  return (
    <section id="about" className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Academic Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-4 mb-8">
              <IconFlask className="text-blue-600" size={20} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">The Medical Board</span>
            </div>
            <Heading className="text-slate-950 !text-5xl lg:!text-8xl leading-[0.95] tracking-tighter">
              Precision minds. <br />
              <span className="text-blue-600 italic">Clinical rigor.</span>
            </Heading>
          </div>
          <div className="lg:max-w-sm lg:pb-2">
            <Paragraph className="mb-10 text-lg font-medium leading-relaxed">
              Our board is comprised of tenured researchers and surgeons from the world&apos;s leading medical institutions, curated for cross-disciplinary excellence.
            </Paragraph>
            <Link href="/faculty-directory">
              <button

                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-950 hover:text-blue-600 transition-all group"
              >
                Faculty Directory <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Director Spotlight - Refined & Flattened */}
        <div className="relative mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-slate-50/40 rounded-[2.5rem] overflow-hidden border border-slate-100">

            <div
              className="lg:col-span-6 relative h-[500px] lg:h-auto group cursor-pointer overflow-hidden border-r border-slate-100"

            >
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1200"
                alt="Dr. Alisa Thorne"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]"
              />
              <div className="absolute top-8 left-8">
                <div className="glass-panel px-5 py-2.5 rounded-xl border-white/60 shadow-sm">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-950">Medical Director • MD, PHD</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-10 lg:p-16 flex flex-col justify-center bg-white relative">
              <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
                <IconHexagon size={100} stroke={1} className="text-blue-600" />
              </div>

              <div className="inline-flex items-center gap-2 mb-4">
                <IconAward className="text-blue-600" size={16} />
                <span className="text-[9px] font-black uppercase tracking-widest text-blue-600">Chief of Regenerative Surgery</span>
              </div>
              <Subheading className="!text-3xl lg:!text-4xl font-black text-slate-950 tracking-tighter mb-2 italic">Dr. Alisa Thorne</Subheading>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10">Harvard Medical Faculty • 15Y Excellence</p>

              <Paragraph className="text-xl text-slate-500 mb-10 italic leading-relaxed font-medium">
                &quot;We operate as a biological design studio, engineering recovery protocols previously thought impossible through molecular diagnostics.&quot;
              </Paragraph>

              <div className="grid grid-cols-2 gap-8 mb-12 pt-8 border-t border-slate-50">
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600">Primary Domain</span>
                  <p className="text-xs font-bold text-slate-950">mRNA Engineering</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600">Credential</span>
                  <p className="text-xs font-bold text-slate-950">Board Certified 2024</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/doctor-detail/alisa-thorne">
                  <Button size="md" className="px-10">
                    Clinical Profile
                  </Button>
                </Link>
                <div className="flex items-center gap-2.5 px-6 border border-slate-100 rounded-xl text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  Verified Faculty
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {secondaryBoard.map((member) => (
            <Link key={member.id} href={`/doctor-detail/${member.id}`}>
              <div
                key={member.id}

                className="group cursor-pointer bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-blue-100 transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-8 bg-slate-50 relative border border-slate-50">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute bottom-5 right-5 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 border border-slate-100 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <IconMicroscope size={20} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <IconCircleCheck className="text-blue-600" size={14} />
                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.3em]">{member.focus}</span>
                  </div>
                  <div>
                    <Subheading className="!text-2xl font-black tracking-tight italic mb-1 group-hover:text-blue-600 transition-colors">{member.name}</Subheading>
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">{member.role}</p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{member.institution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;