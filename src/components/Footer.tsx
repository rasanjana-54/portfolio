import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart, Sparkles, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950 pt-16 pb-8 px-4 sm:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Intro */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5 shadow-md shadow-blue-500/20 flex items-center justify-center">
                <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center">
                  <span className="font-bold text-lg text-gradient-primary">RN</span>
                </div>
              </div>
              <span className="font-bold text-lg text-white">
                Rasanjana Nimsara
              </span>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Software Engineering Undergraduate at Informatics Institute of Technology (IIT Sri Lanka). Crafting full-stack web platforms, Flutter mobile apps, and AI-powered systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-blue-400 border border-white/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-purple-400 border border-white/10 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-emerald-400 border border-white/10 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About & Education</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience Timeline</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Freelance Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Me</a></li>
            </ul>
          </div>

          {/* Location & Status */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
              Location & Availability
            </p>
            <div className="p-4 rounded-2xl glass-card border border-white/10 space-y-2 text-xs text-gray-300">
              <p className="font-semibold text-white">Colombo, Sri Lanka</p>
              <p className="text-[11px] text-gray-400">Open for Software Engineering Internships & Freelance Web/Mobile Projects.</p>
              <div className="inline-flex items-center gap-1.5 pt-1 text-[11px] font-mono text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready for Recruitment</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Kodagoda Vithanage Rasanjana Nimsara. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> & React 19
            </span>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all cursor-pointer flex items-center gap-1.5"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
