import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Code2, Sparkles } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  openResumeModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  toggleTheme,
  openResumeModal,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Calculate progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Scroll progress bar */}
      <div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-[#0b1120] dark:bg-[#0b1120] light-mode:bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-lg text-gradient-primary">RN</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                Rasanjana Nimsara
              </span>
              <span className="text-[11px] text-gray-400 font-mono tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/40 dark:bg-slate-900/50 light-mode:bg-slate-100/80 p-1.5 rounded-full border border-white/10 dark:border-white/10 light-mode:border-slate-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-gray-300 dark:text-gray-300 light-mode:text-slate-700 hover:text-white dark:hover:text-white light-mode:hover:text-blue-600 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            {/* CV Download / Resume Button */}
            <button
              onClick={openResumeModal}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV Resume</span>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 dark:bg-white/5 light-mode:bg-slate-200/80 border border-white/10 dark:border-white/10 light-mode:border-slate-300 text-gray-300 dark:text-gray-300 light-mode:text-slate-700 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200 cursor-pointer"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 glass-card rounded-2xl border border-white/10 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2 border-t border-white/10 mt-1 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openResumeModal();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  View & Download CV
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
