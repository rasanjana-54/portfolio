import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ParticlesBackground } from './components/ParticlesBackground';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('General Inquiry');

  // Toggle Theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
      }
      return next;
    });
  };

  // Scroll section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'services', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (serviceName: string) => {
    setSelectedServicePreset(serviceName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-slate-100 relative selection:bg-blue-500 selection:text-white">
      {/* Interactive Canvas Background */}
      <ParticlesBackground isDarkMode={isDarkMode} />

      {/* Desktop Cursor Followers */}
      <CustomCursor />

      {/* Glassmorphic Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        openResumeModal={() => setIsResumeModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection openResumeModal={() => setIsResumeModalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ServicesSection onSelectService={handleSelectService} />
        <TestimonialsSection />
        <ContactSection selectedServicePreset={selectedServicePreset} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / Viewable Resume CV Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

// CertificationsSection wrapper component alias
function CertificationsSection() {
  return <CertificatesSection />;
}
