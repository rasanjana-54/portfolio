import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Sparkles, Code2, Cpu, Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroSectionProps {
  openResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ openResumeModal }) => {
  const titles = [
    'Software Engineering Undergraduate',
    'Full-Stack Web Developer',
    'AI Systems & Mobile Developer',
    'React, Flutter & Node.js Specialist',
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[titleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentFullText) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline & Info */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/30 text-xs font-semibold text-blue-400 shadow-lg shadow-blue-500/10 animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>BSc (Hons) Computer Science @ IIT Sri Lanka</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>

          {/* Main Name Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Hello, I'm <br />
              <span className="text-gradient-primary">
                {personalInfo.fullName}
              </span>
            </h1>
            
            {/* Dynamic Typewriter Title */}
            <div className="h-10 flex items-center">
              <span className="text-xl sm:text-2xl font-mono text-cyan-400 font-medium">
                {displayText}
              </span>
              <span className="w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
            </div>
          </div>

          {/* Intro Description */}
          <p className="text-gray-300 dark:text-gray-300 light-mode:text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            Passionate software engineering undergraduate from Colombo, Sri Lanka. I build award-winning full-stack web applications, AI-integrated systems, and cross-platform mobile experiences with React, Node.js, Flutter, and Google Gemini AI.
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {['React 19', 'TypeScript', 'Node.js', 'Flutter', 'Firebase', 'Gemini AI', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:border-blue-500/40 hover:text-blue-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Button Group */}
          <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={openResumeModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>

            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm glass-card hover:bg-white/10 text-white border border-white/15 hover:border-blue-400/50 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-center transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Quick Social Handles & Location */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/10 w-full text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>{personalInfo.location}</span>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">github.com/rasanjana-54</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Profile Card */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Main Frame Container */}
          <div className="relative w-full max-w-md">
            
            {/* Glowing Accent Ring Behind Image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-3xl blur-md opacity-60 animate-pulse" />

            {/* Main Card Wrapper */}
            <div className="relative glass-card p-4 rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
              {/* Profile Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
                <img
                  src="/src/assets/images/profile_photo_1785242901966.jpg"
                  alt="Kodagoda Vithanage Rasanjana Nimsara"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 glass-card rounded-xl border border-white/20 backdrop-blur-md">
                  <p className="font-bold text-white text-sm">
                    Rasanjana Nimsara
                  </p>
                  <p className="text-xs text-cyan-300 font-mono">
                    Full-Stack & Mobile Developer
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Academic Status */}
              <div className="absolute -top-3 -right-3 px-3.5 py-2 glass-card rounded-xl border border-blue-500/40 shadow-xl flex items-center gap-2 animate-float">
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-mono">Status</p>
                  <p className="text-xs font-bold text-white">IIT CS Undergrad</p>
                </div>
              </div>

              {/* Floating Badge 2: Projects Count */}
              <div className="absolute -bottom-3 -left-3 px-3.5 py-2 glass-card rounded-xl border border-purple-500/40 shadow-xl flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-mono">Portfolio</p>
                  <p className="text-xs font-bold text-white">7+ Projects Built</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Quick Stats Strip */}
      <div className="max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {personalInfo.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl glass-card border border-white/5 hover:border-blue-500/30 transition-all text-center group"
          >
            <p className="text-3xl sm:text-4xl font-extrabold text-gradient-primary group-hover:scale-105 transition-transform">
              {stat.value}
            </p>
            <p className="text-xs font-medium text-gray-400 mt-1 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
