
"use client"
import React from 'react';
import { Heading, Paragraph, Display, Subheading } from '@/components/ui/Typography';
import { IconDna, IconBrain, IconHeartRateMonitor, IconMicroscope, IconDeviceCctv, IconDatabase, IconServer, IconArrowRight, IconAtom2, IconHexagon } from '@tabler/icons-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface ExpertiseProps {
    navigate?: (page: string, id?: string) => void;
}

const Expertise: React.FC<ExpertiseProps> = ({ navigate }) => {
    const domains = [
        {
            id: 'genomics',
            title: "Genomic Mapping",
            icon: <IconDna size={32} stroke={1.2} />,
            desc: "Full-spectrum mapping to identify longevity markers and latent hereditary risks. We analyze structural variants and epigenetic methylation patterns.",
            image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
            status: "Active Research"
        },
        {
            id: 'neurology',
            title: "Neurological Vitality",
            icon: <IconBrain size={32} stroke={1.2} />,
            desc: "Advanced cognitive assessments using fMRI and neuro-protective protocols for brain longevity, focusing on maintaining synaptic plasticity.",
            image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
            status: "Faculty Lead"
        },
        {
            id: 'metabolic',
            title: "Metabolic Precision",
            icon: <IconHeartRateMonitor size={32} stroke={1.2} />,
            desc: "Real-time hormone and glucose monitoring paired with bespoke nutritional intervention, addressing the metabolism as a dynamic system.",
            image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
            status: "Certified Hub"
        },
        {
            id: 'regeneration',
            title: "Cellular Regeneration",
            icon: <IconMicroscope size={32} stroke={1.2} />,
            desc: "Regenerative post-operative protocols utilizing advanced tissue-science to accelerate healing and reduce biological stress after surgery.",
            image: "https://images.unsplash.com/photo-1579154235602-3c2c299e0831?auto=format&fit=crop&q=80&w=800",
            status: "Clinical Phase III"
        }
    ];

    const techStack = [
        { title: "Next-Gen Sequencing", icon: <IconDatabase size={24} />, desc: "Illumina Novaseq technology for ultra-high throughput genomic data sets." },
        { title: "Bio-Telemetry", icon: <IconDeviceCctv size={24} />, desc: "Medical-grade wearable integration for 24/7 autonomic nervous system tracking." },
        { title: "AI Diagnostics", icon: <IconServer size={24} />, desc: "Proprietary algorithmic pattern matching for early disease detection." }
    ];

    return (
        <div className="bg-white">
            {/* Header - Editorial Style */}
            <section className="pt-48 pb-32 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="inline-flex items-center gap-4 mb-10">
                        <div className="h-px w-10 bg-blue-600" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">Specialist Infrastructure</span>
                    </div>
                    <Display className="mb-12 lg:!text-8xl lg:leading-[1]">
                        Clinical <br />
                        <span className="text-blue-600 italic">Domains.</span>
                    </Display>
                    <Paragraph className="max-w-3xl text-xl font-medium text-slate-500 leading-relaxed">
                        Our specialties are not silos; they are interconnected systems. We provide a holistic biological assessment supported by deep-domain clinical experts and advanced diagnostic hardware.
                    </Paragraph>
                </div>
            </section>

            {/* Infrastructure Refined Light Block */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-24 text-slate-900 relative overflow-hidden border border-slate-100 shadow-sm">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-[0.01] -skew-x-12 translate-x-1/4" />
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
                            <div className="lg:col-span-5">
                                <div className="flex items-center gap-3 mb-8">
                                    <IconAtom2 className="text-blue-600 animate-pulse" size={24} />
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-600">Core Intelligence Hub</span>
                                </div>
                                <Subheading className="text-slate-950 !text-3xl lg:!text-5xl mb-8 font-black italic tracking-tighter leading-[1.1]">
                                    Intelligence <br />at the molecular <br />baseline.
                                </Subheading>
                                <Paragraph className="text-slate-500 text-base leading-relaxed mb-10 font-medium">
                                    We invest significantly in diagnostic R&D, ensuring our patients always have access to the leading edge of medical technology before it becomes mainstream.
                                </Paragraph>
                                <Button onClick={() => navigate?.('equipment')} variant="outline" className="px-10 shadow-none border-slate-200">
                                    Equipment Arsenal
                                </Button>
                            </div>
                            <div className="lg:col-span-7">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {techStack.map((tech, i) => (
                                        <div key={i} className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-blue-100 shadow-sm transition-all duration-500 group">
                                            <div className="text-blue-600 mb-8 group-hover:scale-110 transition-transform">{tech.icon}</div>
                                            <p className="font-black text-slate-950 mb-3 text-[10px] uppercase tracking-widest leading-tight">{tech.title}</p>
                                            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{tech.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Domains Grid */}
            <section className="py-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {domains.map((d) => (
                            <Link
                                href={`/service-detail/${d.id}`}
                                key={d.id}
                                className="group bg-white p-10 lg:p-14 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <div className="text-blue-600 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                                        {d.icon}
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <IconHexagon className="text-slate-100 mb-2" size={20} />
                                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">Section 0{domains.indexOf(d) + 1}</span>
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <div className="inline-block px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[8px] font-black uppercase tracking-widest text-slate-400 mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                                        {d.status}
                                    </div>
                                    <Heading className="!text-3xl lg:!text-4xl mb-6 font-black tracking-tight group-hover:text-blue-600 transition-colors">{d.title}</Heading>
                                    <Paragraph className="text-base text-slate-500 font-medium leading-relaxed max-w-lg">
                                        {d.desc}
                                    </Paragraph>
                                </div>

                                <div className="mt-auto relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100 border border-slate-50 group-hover:shadow-lg transition-all duration-500">
                                    <img src={d.image} alt={d.title} className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl shadow-slate-900/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <IconArrowRight size={20} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory Note */}
            <section className="py-24 bg-[#FCFCFA] border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <IconMicroscope size={48} className="text-blue-100 mx-auto mb-8" stroke={1} />
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-6">Medical Advisory</p>
                    <Paragraph className="text-lg text-slate-500 font-medium italic">
                        &quot;We treat every clinical domain as a biological ecosystem. Our methodology is rooted in the belief that systemic health can only be achieved through multi-disciplinary precision.&quot;
                    </Paragraph>
                    <div className="mt-10 h-px w-16 bg-slate-200 mx-auto" />
                </div>
            </section>
        </div>
    );
};

export default Expertise;
