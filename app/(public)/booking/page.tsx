// "use client"

// import React, { useState } from 'react';
// import { Heading, Paragraph } from '@/components/ui/Typography';
// import Button from '@/components/ui/Button';
// import { IconCheck, IconArrowRight, IconShieldLock, IconStethoscope, IconActivity } from '@tabler/icons-react';

// const Booking: React.FC = () => {
//     const [submitted, setSubmitted] = useState(false);

//     if (submitted) {
//         return (
//             <div className="min-h-[80vh] flex items-center justify-center pt-20">
//                 <div className="text-center space-y-10 animate-fadeIn max-w-2xl px-6">
//                     <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl shadow-blue-500/20">
//                         <IconCheck size={48} stroke={2.5} />
//                     </div>
//                     <div>
//                         <Heading className="!text-4xl lg:!text-5xl font-black italic tracking-tighter mb-4">Intake Authenticated</Heading>
//                         <Paragraph className="text-xl font-medium text-slate-500 leading-relaxed">
//                             Our clinical review board has received your data package. A senior consultant will reach out via your preferred secure channel within 4-6 business hours.
//                         </Paragraph>
//                     </div>
//                     <button onClick={() => window.location.reload()} className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] hover:text-blue-700 transition-colors">Return to Clinical Portal</button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="pt-48 pb-32 max-w-5xl mx-auto px-6 lg:px-12">
//             <section className="mb-24">
//                 <div className="inline-flex items-center gap-4 mb-8">
//                     <IconShieldLock className="text-blue-600" size={24} />
//                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Secure Biometric Encryption Active</span>
//                 </div>
//                 <Heading className="mb-8 !text-6xl lg:!text-7xl leading-[0.95] tracking-tighter">Patient <br />Onboarding.</Heading>
//                 <Paragraph className="text-xl font-medium text-slate-500 max-w-2xl leading-relaxed">
//                     Please complete our comprehensive biological intake. This data allows our board to determine candidacy for precision protocols.
//                 </Paragraph>
//             </section>

//             <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-16 bg-white p-12 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
//                 <IconStethoscope size={400} className="absolute -bottom-40 -right-40 text-slate-50 opacity-30 pointer-events-none rotate-12" />

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
//                     <div className="space-y-3">
//                         <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">Legal Designation</label>
//                         <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-slate-950 font-bold focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-slate-300" placeholder="Julian Vance" />
//                     </div>
//                     <div className="space-y-3">
//                         <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">Secure Email Gateway</label>
//                         <input required type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-slate-950 font-bold focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-slate-300" placeholder="vance@precision.com" />
//                     </div>
//                     <div className="space-y-3">
//                         <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">Chronological Entry (DOB)</label>
//                         <input required type="date" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-slate-950 font-bold focus:outline-none focus:border-blue-600 focus:bg-white transition-all" />
//                     </div>
//                     <div className="space-y-3">
//                         <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">Biological Identity (Blood Group)</label>
//                         <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-slate-950 font-bold focus:outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer">
//                             <option>Non-disclosed</option>
//                             <option>A Positive (+)</option>
//                             <option>A Negative (-)</option>
//                             <option>B Positive (+)</option>
//                             <option>B Negative (-)</option>
//                             <option>AB Positive (+)</option>
//                             <option>AB Negative (-)</option>
//                             <option>O Positive (+)</option>
//                             <option>O Negative (-)</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="space-y-8 relative z-10">
//                     <div className="flex items-center gap-3 mb-2">
//                         <IconActivity className="text-blue-600" size={18} />
//                         <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Primary Bio-Focus Domain</label>
//                     </div>
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
//                         {['Longevity', 'Genomics', 'Cognitive', 'Metabolic'].map(opt => (
//                             <label key={opt} className="relative cursor-pointer group">
//                                 <input type="radio" name="domain" className="peer sr-only" />
//                                 <div className="px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 font-black text-xs text-center text-slate-400 uppercase tracking-widest peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600 peer-checked:shadow-xl group-hover:border-slate-300 transition-all duration-300">
//                                     {opt}
//                                 </div>
//                             </label>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="space-y-3 relative z-10">
//                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">Clinical Context Narrative</label>
//                     <textarea className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-6 text-slate-950 font-bold focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-slate-300 min-h-[160px] resize-none" placeholder="Provide a summary of medical trajectory and specific performance objectives..." />
//                 </div>

//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-10 border-t border-slate-50 relative z-10">
//                     <div className="flex items-start gap-5 max-w-sm">
//                         <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
//                             <IconShieldLock size={20} />
//                         </div>
//                         <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
//                             Secure transmission active: 256-Bit SSL Encryption. GDPR & HIPAA compliant storage protocols enforced.
//                         </p>
//                     </div>
//                     <Button size="xl" fullWidth className="lg:w-auto">
//                         Submit Clinical Intake
//                         <IconArrowRight size={20} />
//                     </Button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Booking;

"use client";

import React from "react";
import {
    IconCalendarCheck,
    IconArrowLeft,
    IconHexagon,
} from "@tabler/icons-react";
import { Paragraph, Display } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface ComingSoonPageProps {
    title?: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
    title = "Appointments Coming Soon",
}) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-20 px-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/60 -skew-x-12 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/5 translate-y-16 -translate-x-16 rounded-full" />

            <div className="max-w-3xl w-full text-center relative z-10 my-20">
                {/* Icon */}
                <div className="mb-12 flex justify-center">
                    <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center text-blue-600 border border-blue-100 relative">
                        <IconCalendarCheck size={40} stroke={1.5} />
                        <div className="absolute -top-2 -right-2">
                            <IconHexagon size={22} className="text-blue-200 fill-white" />
                        </div>
                    </div>
                </div>

                {/* Status Label */}
                <div className="inline-flex items-center gap-3 mb-8">
                    <div className="h-px w-6 bg-blue-600" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                        Service Update
                    </span>
                </div>

                {/* Title */}
                <Display className="mb-8 lg:!text-7xl tracking-tighter">
                    {title}
                </Display>

                {/* Message */}
                <Paragraph className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl mx-auto mb-16">
                    Online booking, consultations, and related patient services are
                    currently being prepared. We are carefully finalizing these features
                    to ensure a smooth, secure, and reliable experience for our patients.
                    <br />
                    <br />
                    Please check back soon — we appreciate your patience.
                </Paragraph>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/">
                        <Button

                            size="lg"
                            variant="primary"
                        >
                            <IconArrowLeft size={18} />
                            Back to Home
                        </Button>
                    </Link>
                    <div className="flex items-center gap-2 px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Booking & Consultation Services
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ComingSoonPage;
