import React from 'react';
import { Display, Heading, Paragraph, Subheading } from '@/components/ui/Typography';
import { IconInfinity, IconMicroscope, IconHeartHandshake, IconScale, IconUsers, IconCertificate, IconArrowRight, IconShieldCheck, IconQuotes } from '@tabler/icons-react';
import Button from '@/components/ui/Button';

const Philosophy: React.FC = () => {
    const pillars = [
        {
            title: "Biological Sovereignty",
            desc: "Every patient owns their diagnostic data. We act as curators and advisors, ensuring you retain full autonomy over your physiological journey.",
            icon: <IconUsers size={28} stroke={1.5} />
        },
        {
            title: "Data Integrity",
            desc: "Medicine without data is just an opinion. We rely exclusively on peer-reviewed diagnostics and real-time biological telemetry.",
            icon: <IconCertificate size={28} stroke={1.5} />
        },
        {
            title: "Ethical Foresight",
            desc: "We apply the Precautionary Principle to all interventions, ensuring systemic safety is never sacrificed for the sake of speed.",
            icon: <IconScale size={28} stroke={1.5} />
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section - Editorial Style */}
            <section className="pt-48 pb-24 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="inline-flex items-center gap-4 mb-10">
                        <div className="h-px w-10 bg-blue-600" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">The Healis Manifesto</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        <div className="lg:col-span-8">
                            <Display className="mb-10 lg:!text-8xl">
                                Clinical science <br />
                                meets <span className="text-blue-600 italic">human</span> <br />
                                persistence.
                            </Display>
                            <Paragraph className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                                We define wellness not as the mere absence of disease, but as the active optimization of biological systems for peak multi-decade performance.
                            </Paragraph>
                        </div>
                        <div className="lg:col-span-4 lg:pt-6">
                            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                                <IconQuotes size={32} className="text-blue-200 mb-8" />
                                <p className="text-slate-950 font-bold text-xl italic leading-snug mb-8 relative z-10">
                                    &quot;Healing is a matter of time, but it is also a matter of opportunity.&quot;
                                </p>
                                <div className="h-px w-12 bg-blue-600 mb-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Hippocrates, 460 BC</span>
                                <div className="absolute -bottom-10 -right-10 text-slate-200 opacity-20 group-hover:rotate-12 transition-transform duration-700">
                                    <IconHeartHandshake size={120} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Pillars - Precise Grid */}
            <section className="py-40 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col p-12 bg-white rounded-[2rem] border-2 border-blue-100 shadow-xl shadow-blue-500/5 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000" />
                            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-12 border border-blue-100 relative z-10">
                                <IconInfinity size={32} stroke={1.5} />
                            </div>
                            <Subheading className="text-slate-950 !text-2xl mb-6 font-black italic tracking-tight relative z-10">Longevity <br />Architecture</Subheading>
                            <Paragraph className="text-slate-500 text-base leading-relaxed relative z-10">
                                We prioritize long-term system integrity over short-term relief, focusing on the future of your health decades from now.
                            </Paragraph>
                        </div>

                        <div className="flex flex-col p-12 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 mb-12 border border-slate-100">
                                <IconMicroscope size={32} stroke={1.5} />
                            </div>
                            <Subheading className="text-slate-950 !text-2xl mb-6 font-black italic tracking-tight">Evidence <br />Consistency</Subheading>
                            <Paragraph className="text-slate-500 text-base leading-relaxed">
                                Every protocol is backed by multi-stage clinical research and verified biological markers. We do not practice anecdotal medicine.
                            </Paragraph>
                        </div>

                        <div className="flex flex-col p-12 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 mb-12 border border-slate-100">
                                <IconHeartHandshake size={32} stroke={1.5} />
                            </div>
                            <Subheading className="text-slate-950 !text-2xl mb-6 font-black italic tracking-tight">Empathetic <br />Precision</Subheading>
                            <Paragraph className="text-slate-500 text-base leading-relaxed">
                                Precision medicine requires a deep understanding of each patient&apos;s unique journey, biological values, and lifestyle constraints.
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Values - Image & Content Balance */}
            <section className="py-40 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-50 rounded-3xl translate-x-6 translate-y-6 transition-transform duration-700" />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-square bg-slate-50">
                                <img
                                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1200"
                                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                    alt="Clinical Ethics"
                                />
                                <div className="absolute bottom-10 left-10 glass-panel px-7 py-5 rounded-2xl border border-white/60 shadow-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                                            <IconShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-950 block mb-0.5">Clinical Standards</span>
                                            <span className="text-xs font-bold text-slate-500">Verified Protocol Hub 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:pl-10">
                            <div className="inline-flex items-center gap-3 mb-8">
                                <div className="h-px w-8 bg-blue-600" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Our Core Pillars</span>
                            </div>
                            <Heading className="mb-10 leading-[1.1] !text-5xl lg:!text-6xl">
                                Ethical <br />
                                <span className="text-blue-600 italic">Innovation.</span>
                            </Heading>
                            <Paragraph className="text-xl mb-14 text-slate-500 font-medium leading-relaxed">
                                Innovation in medicine must be tempered by a profound sense of responsibility. We operate at the leading edge without compromising on patient safety.
                            </Paragraph>

                            <div className="space-y-10">
                                {pillars.map((point, idx) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <div className="shrink-0 w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                                            {point.icon}
                                        </div>
                                        <div className="pt-2 border-b border-slate-50 pb-10 flex-1">
                                            <p className="font-black text-slate-950 mb-3 uppercase tracking-widest text-[11px]">{point.title}</p>
                                            <Paragraph className="text-sm leading-relaxed text-slate-500 font-medium">{point.desc}</Paragraph>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section - Refined Light Treatment */}
            <section className="py-48 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <IconQuotes size={64} className="text-blue-200 mx-auto mb-12 opacity-50" />
                    <p className="text-3xl md:text-5xl font-black text-slate-900 italic tracking-tighter leading-[1.15] mb-12">
                        &quot;The aim of medicine is to prevent disease and prolong life; the ideal of medicine is to eliminate the need of a physician.&quot;
                    </p>
                    <div className="inline-flex flex-col items-center gap-3">
                        <div className="h-px w-12 bg-blue-600" />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-600">William J. Mayo</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Mayo Clinic Founder</span>
                    </div>
                </div>
            </section>

            {/* Final Call to Action - Unified Light Surface */}
            <section className="py-40 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="bg-[#F8FAFC] rounded-[3rem] p-16 md:p-24 border border-slate-100 shadow-sm relative overflow-hidden text-center lg:text-left">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 opacity-[0.015] -skew-x-12 translate-x-1/4 pointer-events-none" />
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                            <div className="lg:col-span-8">
                                <Heading className="text-slate-950 !text-5xl lg:!text-7xl mb-10 leading-none tracking-tighter">
                                    Begin your <br />
                                    <span className="text-blue-600 italic">longevity</span> <br />
                                    journey today.
                                </Heading>
                                <Paragraph className="text-slate-500 text-lg mb-0 max-w-lg mx-auto lg:mx-0 font-medium">
                                    Our selective intake process ensures every patient receives the depth of data and attention required for precision success.
                                </Paragraph>
                            </div>
                            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-5 justify-center lg:justify-end">
                                <Button size="lg" className="w-full">
                                    Request Intake
                                    <IconArrowRight size={18} className="ml-3" />
                                </Button>
                                <Button variant="outline" size="lg" className="w-full">
                                    Clinical Overview
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Philosophy;