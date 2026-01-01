
import React from 'react';
import { IconCircleNumber1, IconCircleNumber2, IconCircleNumber3, IconChevronRight, IconArrowRight } from '@tabler/icons-react';
import { Heading, Paragraph, Subheading } from '../ui/Typography';
import Link from 'next/link';

const Services: React.FC = () => {
  const specializedAreas = [
    {
      id: 'longevity',
      title: 'Preventative Longevity',
      description: 'Advanced screening and metabolic tracking to intercept health issues before they manifest.',
      tags: ['Screening', 'Genomics'],
      icon: <IconCircleNumber1 className="text-blue-600/20" size={56} stroke={1} />
    },
    {
      id: 'digital-care',
      title: 'Digital-First Care',
      description: 'Seamless integration of wearable data with clinical expertise for 24/7 health monitoring.',
      tags: ['Telemedicine', 'Live Data'],
      icon: <IconCircleNumber2 className="text-blue-600/20" size={56} stroke={1} />
    },
    {
      id: 'holistic-recovery',
      title: 'Holistic Recovery',
      description: 'Bridging specialized surgical recovery with nutritional and mental health support.',
      tags: ['Post-Op', 'Recovery'],
      icon: <IconCircleNumber3 className="text-blue-600/20" size={56} stroke={1} />
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#FCFCFA] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

          <div className="lg:w-[35%] lg:sticky lg:top-40 h-fit">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Expertise Domains</span>
            </div>
            <Heading className="mb-10 leading-[1.1]">
              A smarter <br />
              approach to <br />
              your <span className="text-blue-600 italic">wellbeing</span>
            </Heading>
            <Paragraph className="mb-12 text-lg text-slate-500 leading-relaxed">
              We&apos;ve discarded the assembly-line medical model. Our services are interconnected, focusing on longitudinal health outcomes.
            </Paragraph>
            <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-sm font-bold text-slate-900 mb-2">Patient Portal</p>
              <p className="text-xs text-slate-400 mb-8 leading-relaxed">Our clinical triage team is available via secure encrypted chat 24/7 for existing members.</p>
              <Link href={"/booking"}> <button className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest hover:translate-x-1 transition-transform">
                Clinical Access <IconArrowRight size={14} />
              </button></Link>
            </div>
          </div>

          <div className="lg:w-[65%] space-y-6">
            {specializedAreas.map((item) => (
              <Link key={item.id}
                href={`/service-detail/${item.id}`} className="group relative flex flex-col md:flex-row gap-10 p-10 lg:p-14 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-500 cursor-pointer overflow-hidden">

                <div className="shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3.5 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[9px] uppercase font-bold text-slate-400 tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Subheading className="mb-4 !text-2xl">{item.title}</Subheading>
                  <Paragraph className="text-slate-500 text-base leading-relaxed max-w-lg">
                    {item.description}
                  </Paragraph>
                </div>
                <div className="md:self-center">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <IconChevronRight size={20} />
                  </div>
                </div>

              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
