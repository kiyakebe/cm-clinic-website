"use client"

import React from 'react';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Methodology from '@/components/sections/Methodology';
import Doctors from '@/components/sections/Doctors';
import Testimonials from '@/components/sections/Testimonials';
import Location from '@/components/sections/Location';
import FAQ from '@/components/sections/FAQ';
import Button from '@/components/ui/Button';
import { Paragraph, Heading } from '@/components/ui/Typography';
import { IconArrowRight, IconCircleDashed, IconShieldCheck } from '@tabler/icons-react';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <>
            <Hero />

            {/* Philosophy Interstitial */}
            <section className="py-48 bg-white text-center overflow-hidden border-t border-slate-100/50">
                <div className="max-w-6xl mx-auto px-6 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
                        <span className="text-[25vw] font-black tracking-tighter uppercase text-slate-950">Philosophy</span>
                    </div>
                    <p className="text-4xl md:text-6xl font-bold text-slate-950 leading-[1.15] relative z-10 tracking-tighter max-w-5xl mx-auto italic">
                        &quot;Healing is a <span className="text-blue-600">matter of time</span>, <br />
                        but it is also a <br />
                        <span className="text-slate-950 not-italic font-black border-b-8 border-blue-600/5 px-2">matter of opportunity</span>.&quot;
                    </p>
                    <div className="mt-20 inline-flex flex-col items-center gap-3 relative z-10">
                        <div className="h-px w-12 bg-blue-600" />
                        <span className="font-black text-[10px] uppercase tracking-[0.6em] text-slate-400">Hippocrates, 460 BC</span>
                    </div>
                </div>
            </section>

            <Services />
            <Stats />
            <Methodology />

            {/* Executive Intake Section - Refined Light Treatment */}
            <section className="py-48 bg-white overflow-hidden relative border-y border-slate-50">
                <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-28 items-center">
                        <div className="lg:col-span-7 relative order-2 lg:order-1">
                            <div className="inline-flex items-center gap-5 mb-10">
                                <IconCircleDashed className="text-blue-600 animate-spin-slow" size={24} stroke={1.5} />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Executive Intake Open</span>
                            </div>
                            <Heading className="mb-10 leading-[0.95] tracking-tighter !text-6xl lg:!text-7xl">
                                The future of your health <br />
                                starts with <span className="text-blue-600 italic">clinical intent.</span>
                            </Heading>
                            <Paragraph className="max-w-xl text-lg text-slate-500 mb-14 leading-relaxed font-medium">
                                Join a limited intake of patients moving beyond standard diagnostic care into a realm of preventative excellence and data-driven longevity.
                            </Paragraph>

                            <div className="space-y-8 mb-16">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 shrink-0 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <IconShieldCheck size={20} />
                                    </div>
                                    <div className="pt-1">
                                        <p className="font-black text-slate-950 uppercase tracking-widest text-[10px] mb-1.5">GDPR & HIPAA Compliant</p>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm">Your biological data is encrypted with enterprise-grade 256-bit AES protocols.</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/booking">
                                <Button size="xl">
                                    Request Consultation
                                    <IconArrowRight size={20} />
                                </Button>
                            </Link>
                        </div>

                        <div className="lg:col-span-5 relative order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-50/50 rounded-[2.5rem] translate-x-4 translate-y-4" />
                                <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white group bg-slate-100 aspect-[3/4] shadow-sm">
                                    <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-all duration-[4s] group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90" alt="Clinic Interior" />
                                </div>
                                {/* Floating Trust Badge - Flattened */}
                                <div className="absolute -bottom-8 -left-8 glass-panel p-8 rounded-2xl border-white max-w-[200px] shadow-lg">
                                    <p className="text-4xl font-black text-slate-950 mb-2 tracking-tighter italic">Top 5</p>
                                    <div className="h-px w-6 bg-blue-600 mb-3" />
                                    <p className="text-[8px] font-black uppercase text-slate-400 tracking-[0.2em] leading-tight">Global Precision Clinics <br />2024 Audit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Doctors />
            <Location />
            <Testimonials />
            <FAQ />
        </>
    );
};

export default Home;