import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education & <span className="text-gradient-primary">Qualifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Structured computer science education in Colombo, Sri Lanka, providing strong theoretical foundations and practical development expertise.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* IIT Colombo */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 hover:shadow-2xl transition-all duration-300 space-y-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />

            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold">
                2023 June – Present
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Informatics Institute of Technology (IIT)
              </h3>
              <p className="text-xs text-gray-400 mt-1">Colombo, Sri Lanka</p>
              <p className="text-sm font-semibold text-purple-400 mt-2">
                BSc (Hons) in Computer Science
              </p>
              <p className="text-xs text-cyan-300 font-mono">
                Affiliated with University of Westminster, UK
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Relevant Coursework:</span>
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Data Structures', 'Algorithms', 'OOP', 'Database Management', 'Mobile App Dev', 'Web Development'].map((course, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-gray-400">
              <span>Expected Graduation: 2027</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                In Progress
              </span>
            </div>
          </div>

          {/* Science College */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 hover:shadow-2xl transition-all duration-300 space-y-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />

            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Award className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold">
                2009 – 2023
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                Science College
              </h3>
              <p className="text-xs text-gray-400 mt-1">Mount Lavinia, Sri Lanka</p>
              <p className="text-sm font-semibold text-cyan-400 mt-2">
                GCE Advanced Level Examinations (GCE A/L – 2022)
              </p>
              <p className="text-xs text-gray-300">
                Mathematics Stream
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>A/L Subjects Studied:</span>
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Combined Mathematics', 'Physics', 'ICT (Info & Comm Tech)'].map((subject, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[11px] font-mono text-purple-300"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-gray-400">
              <span>Primary & Secondary Education</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
