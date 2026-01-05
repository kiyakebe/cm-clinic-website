"use client"
import React, { useState, useEffect } from 'react';
import { IconMenu2, IconX, IconStethoscope, IconArrowRight } from '@tabler/icons-react';
import Button from '../ui/Button';

interface NavbarProps {
  currentPage: string;
  navigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: '/' },
    { name: 'Philosophy', id: '/philosophy' },
    { name: 'Faculty', id: '/faculty-directory' },
    { name: 'Expertise', id: '/expertise' },
  ];

  const handleNav = (id: string) => {
    navigate(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center rounded-2xl transition-all duration-500 ${scrolled ? 'glass-panel px-6 py-3 shadow-xl shadow-slate-900/5' : 'px-0'}`}>
          <div onClick={() => handleNav('home')} className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-blue-600 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform">
              <IconStethoscope className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-950 italic">HEALIS</span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-blue-600 ${currentPage === link.id ? 'text-blue-600' : 'text-slate-400'}`}
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => handleNav('booking')} size="sm" variant="outline" className="h-11 px-7 font-bold italic group">
              Intake Portal
              <IconArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-slate-950 shadow-sm border border-slate-100"
            >
              {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel fixed inset-x-6 top-24 p-10 rounded-2xl space-y-8 shadow-2xl animate-fadeIn border-white">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`block w-full text-left text-2xl font-black italic tracking-tighter ${currentPage === link.id ? 'text-blue-600' : 'text-slate-950'}`}
            >
              {link.name}
            </button>
          ))}
          <Button onClick={() => handleNav('booking')} fullWidth className="h-16 rounded-xl">Portal Login</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;