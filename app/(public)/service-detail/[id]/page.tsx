"use client"
import React from 'react';
import { Heading, Paragraph, Display, Subheading } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import { IconArrowLeft, IconActivity, IconStethoscope, IconDna, IconBrain, IconActivityHeartbeat, IconFlask, IconShieldCheck, IconCircleCheck, IconCircleNumber1 } from '@tabler/icons-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ServiceDetail: React.FC = () => {
    const params = useParams();
    const serviceId = params?.id as string | undefined;
    const serviceData: Record<string, {
        title: string;
        subtitle: string;
        icon: React.ReactNode;
        content: string;
        features: string[];
        image: string;
    }> = {
        'longevity': {
            title: 'Preventative Longevity',
            subtitle: 'The Science of Biological Deceleration',
            icon: <IconActivityHeartbeat size={28} stroke={1.5} />,
            content: 'Longevity science is the pinnacle of modern preventative medicine. At Healis, we combine multi-omic data (genomics, proteomics, metabolomics) with advanced biomarkers to create a longitudinal map of your aging process. Our goal is to extend your healthspan—the portion of your life spent in peak physiological condition.',
            features: ['Epigenetic Clock Mapping', 'Telomere Length Analysis', 'Senolytic Protocol Design', 'Continuous Glucose Monitoring', 'Bone Density Optimization'],
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200'
        },
        'digital-care': {
            title: 'Digital-First Care',
            subtitle: 'Real-time Physiological Auditing',
            icon: <IconActivity size={28} stroke={1.5} />,
            content: 'We leverage medical-grade telemetry to monitor your health 24/7. Our digital-first approach ensures that you are never alone in your health journey, providing instant feedback on lifestyle interventions through a secure, proprietary ecosystem of connected devices and expert human oversight.',
            features: ['24/7 HRV Tracking', 'Remote Blood Pressure Auditing', 'Secure Telemedicine Portal', 'AI-Driven Trend Analysis', 'Real-time Nutritional Logging'],
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200'
        },
        'holistic-recovery': {
            title: 'Holistic Recovery',
            subtitle: 'Integrated Post-Trauma Synthesis',
            icon: <IconStethoscope size={28} stroke={1.5} />,
            content: 'Recovery is a multi-system event. Our holistic approach integrates surgical precision with nutritional support, physical therapy, and psychological grounding to ensure complete physiological restoration. We specialize in reducing the biological footprint of stress and trauma on the human frame.',
            features: ['Targeted mRNA Recovery', 'Personalized Anti-Inflammatory Diets', 'Cognitive Restoration Therapy', 'Muscle Atrophy Prevention', 'Neuro-Somatic Reset'],
            image: 'https://images.unsplash.com/photo-1519494083224-d9bc784606ce?auto=format&fit=crop&q=80&w=1200'
        },
        'genomics': {
            title: 'Genomic Mapping',
            subtitle: 'Unlocking your hereditary blueprint',
            icon: <IconDna size={28} stroke={1.5} />,
            content: 'Our genomic mapping service offers a comprehensive analysis of your genetic predispositions. We use Next-Generation Sequencing (NGS) to detect structural variants and single nucleotide polymorphisms (SNPs) that impact your long-term health trajectory, enabling truly personalized intervention.',
            features: ['3.2 Billion Base Pair Coverage', 'Hereditary Cancer Screening', 'Pharmacogenomic Compatibility', 'Nutrigenetic Optimization', 'Polygenic Risk Scoring'],
            image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800'
        },
        'neurology': {
            title: 'Neurological Vitality',
            subtitle: 'Cognitive Optimization & Brain Aging',
            icon: <IconBrain size={28} stroke={1.5} />,
            content: 'The brain is the cockpit of longevity. We use functional neuro-imaging and neuro-psychological assessments to track synaptic health and prevent cognitive decline. Our protocols include neuro-protective supplementation and targeted cognitive training regimens.',
            features: ['Functional MRI Analysis', 'Synaptic Density Tracking', 'Sleep Architecture Auditing', 'Neuro-protective Supplementation', 'Stress Cortisol Mapping'],
            image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800'
        },
        'metabolic': {
            title: 'Metabolic Precision',
            subtitle: 'Hormonal & Chemical Homeostasis',
            icon: <IconActivityHeartbeat size={28} stroke={1.5} />,
            content: 'Your metabolism is the engine of life. We analyze over 120 biomarkers to determine your hormonal baseline and metabolic efficiency. Our treatments address insulin resistance, mitochondrial dysfunction, and hormonal imbalances with pharmaceutical-grade precision.',
            features: ['Comprehensive Lipid Panel', 'Insulin Sensitivity Audit', 'Hormonal Symphony Mapping', 'Mitochondrial Energy Test', 'Biological Age Calculation'],
            image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800'
        },
        'regeneration': {
            title: 'Cellular Regeneration',
            subtitle: 'mRNA & Tissue Engineering',
            icon: <IconFlask size={28} stroke={1.5} />,
            content: 'The future of medicine lies in tissue repair. We utilize cutting-edge mRNA applications and regenerative tissue-science to accelerate the body\'s natural healing processes. This protocol is ideal for elite athletes, post-surgical patients, and those seeking biological rejuvenation.',
            features: ['mRNA Tissue Signaling', 'Stem Cell Pathway Activation', 'Platelet-Rich Plasma (PRP)', 'Exosome Therapy Analysis', 'Collagen Matrix Synthesis'],
            image: 'https://images.unsplash.com/photo-1579154235602-3c2c299e0831?auto=format&fit=crop&q=80&w=800'
        }
    };

    const current = serviceId ? serviceData[serviceId] : serviceData['longevity'];

    if (!current) return (
        <div className="pt-40 text-center min-h-screen">
            <Heading>Protocol not found</Heading>
            <Link href="/" className="mt-8 text-blue-600 font-bold hover:underline">Return to Portal</Link>
        </div>
    );

    return (
        <div className="pt-48 pb-32 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-16 hover:translate-x-[-6px] transition-transform group hover:cursor-pointer"
                >
                    <IconArrowLeft size={16} className="group-hover:text-blue-700" />
                    Back to Clinical Domains
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
                    <div className="lg:col-span-7 animate-fadeIn">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                                {current.icon}
                            </div>
                            <div className="space-y-0.5">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Protocol Verification</span>
                                <p className="text-slate-900 text-xs font-bold tracking-tight">Active Faculty Module: {serviceId?.toUpperCase()}</p>
                            </div>
                        </div>

                        <Display className="mb-8 !text-5xl lg:!text-7xl leading-none tracking-tighter">{current.title}</Display>
                        <Subheading className="mb-12 text-slate-400 font-bold italic text-2xl">{current.subtitle}</Subheading>

                        <Paragraph className="mb-16 text-xl leading-relaxed text-slate-500 font-medium">
                            {current.content}
                        </Paragraph>

                        <div className="space-y-10 mb-20">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-8 bg-blue-600" />
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Protocol Components</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {current.features.map((f: string) => (
                                    <div key={f} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-white transition-all duration-300 group">
                                        <IconCircleCheck size={20} className="text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-bold text-slate-700 tracking-tight">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 lg:p-14 bg-blue-50/40 rounded-[2.5rem] border border-blue-100 shadow-xl shadow-blue-500/5 relative overflow-hidden mb-16">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 opacity-[0.03] -translate-y-16 translate-x-16 rounded-full" />
                            <div className="flex items-center gap-4 mb-8">
                                <IconCircleNumber1 className="text-blue-600" size={24} />
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Long-term Health Outcome</p>
                            </div>
                            <p className="text-2xl lg:text-3xl text-slate-950 font-black leading-tight italic tracking-tighter">
                                &quot;Our objective is a sustained biological baseline mirroring a physiological state <span className="text-blue-600">10-15 years younger</span> than chronological age.&quot;
                            </p>
                        </div>
                        <Link href="/booking">
                            <Button size="xl">
                                Enroll in Protocol
                            </Button>
                        </Link>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-40">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white bg-slate-50 group">
                                <img src={current.image} className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110" alt={current.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-10 left-10 text-white right-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <IconShieldCheck className="text-blue-400" size={20} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-100">Medical Authentication</span>
                                    </div>
                                    <p className="text-2xl font-black leading-tight tracking-tighter italic">Verified by the <br />Healis Board of Faculty</p>
                                    <div className="h-px w-full bg-white/10 my-4" />
                                    <p className="text-[9px] font-bold text-blue-200 uppercase tracking-widest">Protocol Version: 2024.04.12 • Rev 3</p>
                                </div>
                            </div>

                            <div className="mt-10 p-8 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <IconActivity size={24} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Clinic Status</p>
                                    <p className="text-sm font-bold text-slate-900">Intake selecting for Q3 cohorts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;