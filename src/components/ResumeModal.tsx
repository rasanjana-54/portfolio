import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Github, Linkedin, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, experienceData, projectsData, certificatesData, skillsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col bg-slate-900 text-slate-100">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-slate-950 no-print">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Official Curriculum Vitae - Rasanjana Nimsara
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-900 text-gray-200 text-xs sm:text-sm leading-relaxed print:p-0 print:bg-white print:text-slate-900">
          
          {/* Resume Header */}
          <div className="text-center space-y-2 border-b border-white/10 pb-6 print:border-slate-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight print:text-slate-900">
              {personalInfo.fullName}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 print:text-blue-700">
              Undergraduate | Aspiring Software Engineer | Full-Stack & Mobile Developer
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300 print:text-slate-700 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400 print:text-slate-600" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-400 print:text-slate-600" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-purple-400 print:text-slate-600" />
                {personalInfo.email}
              </span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 underline">
                <Github className="w-3.5 h-3.5" />
                github.com/rasanjana-54
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-400 underline">
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono text-blue-400 uppercase tracking-widest border-b border-blue-500/30 pb-1 print:text-blue-800 print:border-blue-800">
              SUMMARY
            </h2>
            <p className="text-gray-300 print:text-slate-800 text-xs sm:text-sm leading-relaxed">
              {personalInfo.bio} A proactive, detail-oriented developer committed to delivering high-quality, user-friendly software solutions. Eager to contribute technical skills and a growth mindset to a dynamic software engineering team.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono text-purple-400 uppercase tracking-widest border-b border-purple-500/30 pb-1 print:text-purple-800 print:border-purple-800">
              EDUCATION
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-bold text-white print:text-slate-900">
                  <span>Informatics Institute of Technology (IIT), Colombo, Sri Lanka</span>
                  <span className="font-mono text-xs">2023 June – Present</span>
                </div>
                <p className="text-cyan-300 font-semibold print:text-blue-700">BSc (Hons) in Computer Science</p>
                <p className="text-xs text-gray-400 print:text-slate-600">Expected Graduation: 2027 | Relevant Coursework: Data Structures, Algorithms, OOP, Database Management, Mobile App Development, Web Development</p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-white print:text-slate-900">
                  <span>Science College, Mount Lavinia, Sri Lanka</span>
                  <span className="font-mono text-xs">2009 – 2023</span>
                </div>
                <p className="text-cyan-300 font-semibold print:text-blue-700">GCE Advanced Level Examinations (GCE A/L – 2022)</p>
                <p className="text-xs text-gray-400 print:text-slate-600">Mathematics Stream (Combined Mathematics, Physics, ICT)</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-emerald-500/30 pb-1 print:text-emerald-800 print:border-emerald-800">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs text-gray-300 print:text-slate-800">
              <p><strong className="text-white print:text-slate-900">Programming Languages:</strong> Python, Java, JavaScript, TypeScript, Dart.</p>
              <p><strong className="text-white print:text-slate-900">Frontend:</strong> React, HTML, CSS, Tailwind CSS, Flutter.</p>
              <p><strong className="text-white print:text-slate-900">Backend:</strong> Node.js, Express.js, REST APIs, Firebase.</p>
              <p><strong className="text-white print:text-slate-900">Databases:</strong> MySQL, MongoDB, SQLite, Firebase Firestore.</p>
              <p><strong className="text-white print:text-slate-900">Tools:</strong> Git, GitHub, Postman, VS Code, Android Studio, Vercel, Figma.</p>
              <p><strong className="text-white print:text-slate-900">Soft Skills:</strong> Communication, Teamwork, Problem Solving, Adaptability, Leadership, Time Management, Logical Thinking.</p>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-1 print:text-cyan-800 print:border-cyan-800">
              KEY PROJECTS
            </h2>
            
            {projectsData.slice(0, 4).map((p) => (
              <div key={p.id} className="space-y-1">
                <div className="flex justify-between font-bold text-white print:text-slate-900">
                  <span>{p.title}</span>
                  <span className="font-mono text-xs">{p.year}</span>
                </div>
                <p className="text-xs font-semibold text-purple-300 print:text-purple-800">{p.role}</p>
                <ul className="list-disc list-inside text-xs text-gray-300 print:text-slate-700 space-y-0.5">
                  {p.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <p className="text-[11px] font-mono text-cyan-400 print:text-blue-800">Tech: {p.tags.join(', ')}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono text-amber-400 uppercase tracking-widest border-b border-amber-500/30 pb-1 print:text-amber-800 print:border-amber-800">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside text-xs text-gray-300 print:text-slate-700 space-y-1">
              {certificatesData.map((c) => (
                <li key={c.id}>
                  <strong className="text-white print:text-slate-900">{c.title}</strong> – {c.issuer} ({c.year})
                </li>
              ))}
            </ul>
          </div>

          {/* References */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono text-rose-400 uppercase tracking-widest border-b border-rose-500/30 pb-1 print:text-rose-800 print:border-rose-800">
              ACADEMIC REFERENCES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300 print:text-slate-800">
              {personalInfo.references.map((r, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 print:bg-slate-100 print:border-slate-300">
                  <p className="font-bold text-white print:text-slate-900">{r.name}</p>
                  <p className="text-cyan-300 print:text-blue-800 font-semibold">{r.title}</p>
                  <p className="text-[11px]">{r.institution}</p>
                  <p className="text-[11px] font-mono mt-1">Tel: {r.phone} | {r.email}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
