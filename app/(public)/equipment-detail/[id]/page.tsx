"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    Heading,
    Paragraph,
    Display,
    Subheading,
} from "@/components/ui/Typography";
import {
    IconArrowLeft,
    IconShieldCheck,
    IconClock,
    IconHexagon,
    IconArrowRight,
    IconCpu,
    IconActivity,
    IconCircleCheck,
} from "@tabler/icons-react";
import Button from "@/components/ui/Button";

const EquipmentDetail: React.FC = () => {
    const params = useParams();
    const equipmentId = params?.id as string | undefined;

    const equipmentData: Record<string, {
        name: string;
        category: string;
        tagline: string;
        desc: string;
        image: string;
        specs: { label: string; value: string }[];
        features: string[];
        clinical_use: string;
    }> = {
        "illumino-seq": {
            name: "Illumina NovaSeq 6000",
            category: "Molecular Diagnostics",
            tagline: "The Pinnacle of Genomic Mapping",
            desc:
                "The NovaSeq 6000 represents a revolutionary leap in genome sequencing. It allows our clinicians to analyze 3.2 billion base pairs with 99.99% accuracy, identifying structural variants that other sequencers miss.",
            image:
                "https://images.unsplash.com/photo-1579154235602-3c2c299e0831?auto=format&fit=crop&q=80&w=1200",
            specs: [
                { label: "Throughput", value: "6 Tb per run" },
                { label: "Accuracy", value: "Q30 > 75%" },
                { label: "Sample Capacity", value: "Up to 384" },
                { label: "Run Time", value: "13–44 Hours" },
            ],
            features: [
                "Real-time kinetic auditing",
                "Automatic library management",
                "Dual-flow cell flexibility",
                "Direct Cloud-Data Sync",
            ],
            clinical_use:
                "Used for full-spectrum longevity mapping, identifying hereditary risk factors, and pharmacogenomic profiling for bespoke treatment plans.",
        },

        "siemens-fmri": {
            name: "Siemens Magnetom fMRI",
            category: "Neurological Imaging",
            tagline: "Mapping the Synaptic Landscape",
            desc:
                "Our 7-Tesla fMRI system provides neurological clarity at the sub-millimeter level. It allows clinicians to visualize blood flow and neural firing patterns in real-time.",
            image:
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
            specs: [
                { label: "Field Strength", value: "7.0 Tesla" },
                { label: "Resolution", value: "Sub-mm isotropic" },
                { label: "Bore Size", value: "60 cm" },
                { label: "Gradient", value: "80 mT/m" },
            ],
            features: [
                "Ultra-high field gradient",
                "Real-time fMRI feedback",
                "Motion correction AI",
                "SilentScan technology",
            ],
            clinical_use:
                "Primary tool for synaptic health auditing, cognitive restoration protocols, and sleep architecture analysis.",
        },
    };

    const current =
        (equipmentId && equipmentData[equipmentId]) ||
        equipmentData["illumino-seq"];

    return (
        <div className="bg-white min-h-screen pt-48 pb-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Back Navigation */}
                <Link
                    href="/equipment"
                    className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-16 hover:-translate-x-1 transition-transform"
                >
                    <IconArrowLeft size={16} />
                    Back to Technology Arsenal
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-20">
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <IconCpu className="text-blue-600" size={24} />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                                    {current.category}
                                </span>
                            </div>

                            <Display className="mb-6 !text-6xl lg:!text-8xl tracking-tighter italic">
                                {current.name}
                            </Display>

                            <Subheading className="text-slate-400 font-bold italic text-2xl mb-10">
                                {current.tagline}
                            </Subheading>

                            <Paragraph className="text-xl font-medium leading-relaxed text-slate-500 max-w-2xl mb-12">
                                {current.desc}
                            </Paragraph>

                            <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 flex gap-6">
                                <IconActivity className="text-blue-600 mt-1" size={24} />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">
                                        Clinical Application
                                    </p>
                                    <p className="text-sm font-bold text-slate-700">
                                        {current.clinical_use}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <Subheading className="!text-3xl font-black italic mb-10">
                                Technical Specifications
                            </Subheading>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {current.specs.map((spec: { label: string; value: string }, idx: number) => (
                                    <div
                                        key={idx}
                                        className="p-8 bg-slate-50 rounded-2xl border border-slate-100"
                                    >
                                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 block">
                                            {spec.label}
                                        </span>
                                        <span className="text-xl font-black italic">
                                            {spec.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <Subheading className="!text-3xl font-black italic mb-10">
                                Hardware Features
                            </Subheading>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {current.features.map((feat: string, idx: number) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-2xl"
                                    >
                                        <IconCircleCheck className="text-blue-600" size={20} />
                                        <span className="text-sm font-bold text-slate-700">
                                            {feat}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-slate-50 border border-slate-100 p-12 lg:p-16 rounded-[3rem]">
                            <div className="flex items-center gap-3 mb-8">
                                <IconShieldCheck className="text-blue-600" size={24} />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                                    Verification Active
                                </span>
                            </div>

                            <Heading className="!text-3xl lg:!text-4xl mb-6 italic">
                                Ready for precision analysis.
                            </Heading>

                            <Paragraph className="text-slate-500 font-medium mb-10">
                                This asset is currently in active intake mode. Our board is
                                reviewing protocol candidacy.
                            </Paragraph>

                            <Link href="/booking">
                                <Button size="xl">
                                    Request Intake
                                    <IconArrowRight size={18} />
                                </Button>
                            </Link>
                        </section>
                    </div>

                    {/* Visual Column */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-40 space-y-10">
                            <div className="relative rounded-[3rem] overflow-hidden border-[16px] border-slate-50 bg-slate-100">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="w-full h-full object-cover grayscale opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                <div className="absolute bottom-10 left-10 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <IconHexagon size={16} className="text-blue-400" />
                                        <span className="text-[9px] font-black uppercase tracking-widest">
                                            Asset Record
                                        </span>
                                    </div>
                                    <p className="text-2xl font-black italic">
                                        {current.name}
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 bg-white border border-slate-100 rounded-3xl flex items-center gap-6">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                    <IconClock size={28} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                                        Calibration Cycle
                                    </p>
                                    <p className="text-sm font-bold italic">
                                        Verified 2.5h Ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentDetail;
