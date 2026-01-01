"use client"
import React, { useState } from 'react';
import { Heading, Paragraph, Display, Subheading } from '@/components/ui/Typography';
import { IconFlask, IconMicroscope, IconHexagon, IconArrowRight, IconSearch, IconFilter, IconStethoscope, IconDna, IconBrain, IconActivityHeartbeat } from '@tabler/icons-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const FacultyDirectory: React.FC = () => {
    const [filter, setFilter] = useState('All');

    const faculty = [
        {
            id: 'alisa-thorne',
            name: 'Dr. Alisa Thorne',
            title: 'Medical Director',
            specialty: 'Regenerative Surgery',
            institution: 'Harvard Medical',
            image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
            domain: 'Regeneration',
            icon: <IconActivityHeartbeat size={18} />
        },
        {
            id: 'marcus-webb',
            name: 'Dr. Marcus Webb',
            title: 'Director of Neurology',
            specialty: 'Neuro-Optimization',
            institution: 'Johns Hopkins',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
            domain: 'Neurology',
            icon: <IconBrain size={18} />
        },
        {
            id: 'sarah-chen',
            name: 'Dr. Sarah Chen',
            title: 'Senior Internist',
            specialty: 'Systemic Immunology',
            institution: 'Stanford Medicine',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
            domain: 'Immunology',
            icon: <IconFlask size={18} />
        },
        {
            id: 'julian-vance',
            name: 'Dr. Julian Vance',
            title: 'Endocrinology Lead',
            specialty: 'Hormonal Engineering',
            institution: 'Mayo Clinic',
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
            domain: 'Metabolic',
            icon: <IconDna size={18} />
        },
        {
            id: 'elena-rodriguez',
            name: 'Dr. Elena Rodriguez',
            title: 'Genomics Specialist',
            specialty: 'Epigenetic Mapping',
            institution: 'Oxford University',
            image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800', // Using placeholder
            domain: 'Genomics',
            icon: <IconDna size={18} />
        },
        {
            id: 'arthur-pendragon',
            name: 'Dr. Arthur Pendragon',
            title: 'Chief of Diagnostics',
            specialty: 'Molecular Pathology',
            institution: 'Cambridge Faculty',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800', // Using placeholder
            domain: 'Diagnostics',
            icon: <IconMicroscope size={18} />
        }
    ];

    const domains = ['All', 'Regeneration', 'Neurology', 'Immunology', 'Metabolic', 'Genomics', 'Diagnostics'];

    const filteredFaculty = filter === 'All'
        ? faculty
        : faculty.filter(f => f.domain === filter);

    return (
        <div className="bg-white min-h-screen">
            {/* Editorial Header */}
            <section className="pt-48 pb-32 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="inline-flex items-center gap-4 mb-10">
                        <div className="h-px w-10 bg-blue-600" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">The Healis Faculty</span>
                    </div>
                    <Display className="mb-12 lg:!text-8xl lg:leading-[1]">
                        Board of <br />
                        <span className="text-blue-600 italic">Specialists.</span>
                    </Display>
                    <Paragraph className="max-w-3xl text-xl font-medium text-slate-500 leading-relaxed">
                        Our multi-disciplinary board represents the vanguard of precision medicine. Each faculty member is an active researcher, ensuring our protocols are derived from the most current biological data.
                    </Paragraph>
                </div>
            </section>

            {/* Filter & Search Controls */}
            <section className=" bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto">
                        <IconFilter size={14} className="text-slate-400 mr-2 shrink-0" />
                        {domains.map((d) => (
                            <button
                                key={d}
                                onClick={() => setFilter(d)}
                                className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all shrink-0 ${filter === d ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                            >
                                {d}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-64">
                        <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                        <input
                            type="text"
                            placeholder="Search Faculty..."
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-12 pr-4 text-xs font-bold text-slate-900 focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-300"
                        />
                    </div>
                </div>
            </section>

            {/* Faculty Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredFaculty.map((f) => (
                            <Link key={f.id} href={`/doctor-detail/${f.id}`}>
                                <div
                                    key={f.id}
                                    className="group cursor-pointer bg-white rounded-[2.5rem] p-8 border border-slate-100 hover:border-blue-100 transition-all duration-500 flex flex-col relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:scale-125 transition-transform duration-700">
                                        <IconHexagon size={120} stroke={1} className="text-blue-600" />
                                    </div>

                                    <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-10 bg-slate-100 relative border border-slate-50 shadow-sm">
                                        <img
                                            src={f.image}
                                            alt={f.name}
                                            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]"
                                        />
                                        <div className="absolute bottom-6 left-6">
                                            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/60 shadow-xl flex items-center gap-2">
                                                <div className="text-blue-600">{f.icon}</div>
                                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-950">{f.domain}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6 relative z-10">
                                        <div>
                                            <Subheading className="!text-2xl font-black tracking-tight italic mb-1 group-hover:text-blue-600 transition-colors leading-none">{f.name}</Subheading>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black text-slate-950 uppercase tracking-widest">{f.title}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{f.institution} Faculty</p>
                                            </div>
                                        </div>

                                        <div className="h-px w-full bg-slate-50" />

                                        <div className="flex justify-between items-center">
                                            <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">Module: {f.id.toUpperCase()}</span>
                                            <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-blue-600 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                                View Profile <IconArrowRight size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selective Intake Interstitial */}
            <section className="py-32 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="bg-white rounded-[3rem] p-12 lg:p-20 text-center lg:text-left relative overflow-hidden border border-slate-100 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                            <div className="lg:col-span-8">
                                <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                                    <IconStethoscope className="text-blue-600" size={24} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Patient Selection Pool</span>
                                </div>
                                <Heading className="!text-4xl lg:!text-6xl mb-8 font-black italic tracking-tighter leading-[0.95]">Request direct access <br />to our senior board.</Heading>
                                <Paragraph className="text-slate-500 text-lg mb-0 max-w-xl font-medium leading-relaxed">
                                    Our board review process determines candidacy for experimental and longevity protocols. Intake is quarterly and strictly limited.
                                </Paragraph>
                            </div>
                            <div className="lg:col-span-4 flex flex-col gap-4">
                                <Link href="/booking">
                                    <Button size="xl">
                                        Consultation Request
                                        <IconArrowRight size={18} />
                                    </Button>
                                </Link>
                                <p className="text-[9px] text-center font-bold text-slate-400 uppercase tracking-widest">
                                    Currently processing Q3 applications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FacultyDirectory;