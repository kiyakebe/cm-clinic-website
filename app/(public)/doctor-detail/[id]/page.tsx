"use client"
import React from 'react';
import { Heading, Paragraph, Display, Subheading } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import { IconArrowLeft, IconAward, IconBooks, IconClock, IconMicroscope, IconCircleCheck, IconHexagon, IconFlask, IconArrowRight, IconShieldCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';


const doctorData: Record<string, {
    name: string;
    title: string;
    role: string;
    pedigree: string;
    bio: string;
    publications: string[];
    achievements: string[];
    image: string;
    stats: { hours: string; works: string };
    domain: string;
}> = {
    'alisa-thorne': {
        name: 'Dr. Alisa Thorne',
        title: 'Medical Director & Chief of Surgery',
        role: 'Longevity Specialist',
        pedigree: 'Harvard Medical School • 15 Years Exp.',
        bio: 'Dr. Alisa Thorne is a pioneer in regenerative surgery and longevity architecture. Her clinical focus is on the integration of biological telemetry with targeted surgical intervention to ensure peak human performance across the lifespan.',
        publications: ['The Epigenetic Clock in Post-Op Recovery (2023)', 'Longevity vs Treatment: A Clinical Shift (2021)'],
        achievements: ['Presidential Award for Innovation', 'Fellow of the Royal Society', 'Global Surgeon of the Year 2022'],
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1200',
        stats: { hours: '12,500', works: '140+' },
        domain: 'mRNA Engineering'
    },
    'marcus-webb': {
        name: 'Dr. Marcus Webb',
        title: 'Director of Neurology',
        role: 'Neuro-Optimization',
        pedigree: 'Johns Hopkins University • 12 Years Exp.',
        bio: 'Dr. Webb specializes in synaptic plasticity and cognitive preservation. His research into fMRI-driven diagnostics has set new standards for early neurological intercept protocols and cognitive enhancement.',
        publications: ['Neuro-Plasticity in Aging Populations (2024)', 'Digital Biomarkers of Cognition (2022)'],
        achievements: ['National Brain Research Grant Winner', 'Johns Hopkins Alumni of Distinction', 'Lead Consultant for Neuro-AI Ethics'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
        stats: { hours: '9,200', works: '85+' },
        domain: 'Synaptic Health'
    },
    'sarah-chen': {
        name: 'Dr. Sarah Chen',
        title: 'Senior Internist',
        role: 'Systemic Health & Immunology',
        pedigree: 'Stanford School of Medicine • 10 Years Exp.',
        bio: 'Dr. Chen focuses on systemic inflammatory markers and the microbiome-immune axis. Her precision protocols have successfully reversed chronic autoimmune indicators in 90% of her patient cohort.',
        publications: ['The Microbiome in Precision Immunology (2023)', 'Cytokine Storm Prevention via Targeted Nutrition (2022)'],
        achievements: ['American Immunology Excellence Award', 'Stanford Medical Fellow of the Year'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
        stats: { hours: '8,400', works: '60+' },
        domain: 'Microbiome Axis'
    },
    'julian-vance': {
        name: 'Dr. Julian Vance',
        title: 'Endocrinology Lead',
        role: 'Hormonal Engineering',
        pedigree: 'Mayo Clinic Alumnus • 18 Years Exp.',
        bio: 'Dr. Vance treats the endocrine system as a complex signaling network. By optimizing hormonal baselines using bio-identical data models, he restores physiological vigor to patients in the third and fourth quartiles of life.',
        publications: ['Androgen Optimization in Executive Longevity (2022)', 'The Thyroid-Adrenal Axis Balance (2021)'],
        achievements: ['Mayo Clinic Lifetime Achievement', 'International Endocrine Society Chairman'],
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
        stats: { hours: '14,000', works: '110+' },
        domain: 'Endocrine Flow'
    }
};
const DoctorDetail: React.FC = () => {


    const params = useParams();
    const doctorId = params.id as string;
    const current = doctorId ? doctorData[doctorId] : doctorData['alisa-thorne'];

    if (!current) return (
        <div className="pt-48 text-center min-h-screen bg-white">
            <Heading>Specialist profile not found</Heading>
            <Link href="/faculty-directory" className="mt-8 text-blue-600 font-black uppercase tracking-widest hover:underline">Back to Clinical Overview</Link>
        </div>
    );

    return (
        <div className="pt-40 pb-32 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <Link href={"/"}>
                    <button

                        className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-16 hover:translate-x-[-6px] transition-transform group"
                    >
                        <IconArrowLeft size={16} />
                        Back to Faculty Board
                    </button>
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Visual Sidebar */}
                    <div className="lg:col-span-5 lg:sticky lg:top-40">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] mb-10 border-[12px] border-slate-50 bg-slate-100 group">
                            <img src={current.image} className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105" alt={current.name} />
                            <div className="absolute top-8 left-8">
                                <div className="glass-panel px-5 py-2.5 rounded-xl border-white/60 shadow-xl">
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-950">{current.pedigree}</span>
                                </div>
                            </div>
                            <div className="absolute bottom-8 right-8">
                                <IconHexagon className="text-white opacity-20" size={48} stroke={1} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-slate-100 shadow-sm group hover:bg-white hover:shadow-xl transition-all duration-500">
                                <IconClock className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={24} />
                                <p className="text-3xl font-black text-slate-950 tracking-tighter mb-1">{current.stats.hours}</p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Clinical Hours</p>
                            </div>
                            <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-slate-100 shadow-sm group hover:bg-white hover:shadow-xl transition-all duration-500">
                                <IconBooks className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={24} />
                                <p className="text-3xl font-black text-slate-950 tracking-tighter mb-1">{current.stats.works}</p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Published Works</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Dossier */}
                    <div className="lg:col-span-7 space-y-20 animate-fadeIn">
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <IconFlask className="text-blue-600" size={24} />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Clinical Dossier: {current.domain}</span>
                            </div>
                            <Display className="!text-5xl lg:!text-8xl mb-6 tracking-tighter italic">{current.name}</Display>
                            <p className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-12">{current.title}</p>
                            <Paragraph className="text-2xl font-medium leading-relaxed text-slate-500 max-w-2xl">
                                {current.bio}
                            </Paragraph>
                        </section>

                        <div className="h-px bg-slate-100" />

                        <section>
                            <div className="flex items-center gap-4 mb-12">
                                <IconAward className="text-blue-600" size={28} />
                                <Subheading className="font-black !text-3xl tracking-tight italic">Board Certifications</Subheading>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {current.achievements.map((a: string) => (
                                    <div key={a} className="flex items-center gap-5 p-7 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-100 transition-colors group">
                                        <IconCircleCheck className="text-blue-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                        <span className="text-sm font-bold text-slate-800 tracking-tight">{a}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-12">
                                <IconMicroscope className="text-blue-600" size={28} />
                                <Subheading className="font-black !text-3xl tracking-tight italic">Clinical Research</Subheading>
                            </div>
                            <div className="space-y-6">
                                {current.publications.map((p: string, idx: number) => (
                                    <div key={idx} className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-500">
                                        <p className="text-[9px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Published Journal Record</p>
                                        <p className="text-lg font-black text-slate-950 mb-3 tracking-tight italic leading-tight group-hover:text-blue-600 transition-colors">{p}</p>
                                        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                            Clinical Precision Journal • Rev 2024
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* High Priority Booking CTA - Refined Light Surface */}
                        <section className="bg-blue-50/50 border border-blue-100 p-12 lg:p-20 rounded-[3rem] shadow-xl shadow-blue-500/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-[0.01] -skew-x-12 translate-x-1/4" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-10">
                                    <IconShieldCheck className="text-blue-600" size={24} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Secure Consultation Access</span>
                                </div>
                                <Subheading className="text-slate-950 mb-6 !text-4xl lg:!text-5xl font-black italic tracking-tighter leading-[1.1]">
                                    Request priority <br />intake placement.
                                </Subheading>
                                <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed max-w-lg">
                                    {current.name} accepts new longevity patients on a quarterly selection basis. Request your priority biological evaluation for the upcoming Q3 cohort.
                                </p>
                                <div className="flex flex-wrap gap-5">
                                    <Link href="/booking">
                                        <Button size="xl">
                                            Intake Request
                                            <IconArrowRight size={18} />
                                        </Button>
                                    </Link>
                                    <div className="flex items-center gap-3 px-8 py-5 bg-white border border-slate-100 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest shadow-sm">
                                        HIPAA Encrypted
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetail;