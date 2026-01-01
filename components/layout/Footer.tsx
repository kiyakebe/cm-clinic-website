import React from 'react';
import { IconStethoscope, IconBrandLinkedin, IconBrandTwitter, IconBrandInstagram, IconArrowUpRight, IconShieldCheck } from '@tabler/icons-react';
import { Paragraph } from '../ui/Typography';
import Button from '../ui/Button';

interface FooterProps {
  navigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
              <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10">
                <IconStethoscope className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-black italic tracking-tighter text-slate-950">HEALIS</span>
            </div>
            <Paragraph className="max-w-xs text-base">
              A global precision network engineering biological longevity through molecular diagnostics and clinical rigor.
            </Paragraph>
            <div className="flex gap-4">
              {[IconBrandLinkedin, IconBrandTwitter, IconBrandInstagram].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-8">Clinical</p>
                <ul className="space-y-4">
                  {[
                    { name: 'Philosophy', id: 'philosophy' },
                    { name: 'Expertise', id: 'expertise' },
                    { name: 'Technology', id: 'equipment' },
                    { name: 'Board Faculty', id: 'faculty-directory' }
                  ].map((link) => (
                    <li key={link.id}>
                      <button onClick={() => navigate(link.id)} className="text-slate-500 hover:text-blue-600 font-bold text-sm transition-all flex items-center gap-1.5 group">
                        {link.name}
                        <IconArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all translate-y-0.5 group-hover:translate-y-0" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-8">Resources</p>
                <ul className="space-y-4">
                  {['Intake Portal', 'Secure Records', 'Data Privacy', 'Press Office'].map((item) => (
                    <li key={item}>
                      <button onClick={() => navigate('booking')} className="text-slate-500 hover:text-blue-600 font-bold text-sm transition-all">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-slate-950 uppercase tracking-widest mb-3">Priority Intake</p>
              <Paragraph className="text-xs mb-6 leading-relaxed">
                Join our quarterly selection for longevity protocols. Secure encrypted channels.
              </Paragraph>
              <Button size="sm" fullWidth onClick={() => navigate('booking')}>
                Request Access
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <IconShieldCheck className="text-blue-600" size={16} />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} HEALIS MEDICAL GROUP. HIPAA & GDPR SECURED.
            </p>
          </div>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Audit'].map(link => (
              <span key={link} className="text-[10px] font-black text-slate-400 uppercase tracking-widest cursor-pointer hover:text-blue-600 transition-colors">
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;