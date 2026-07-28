import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap, Users, Award, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-8 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Experience & <span className="text-gradient-primary">Education Timeline</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Academic milestones at IIT Sri Lanka, collaborative web engineering projects, freelance work, and technical community memberships.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-blue-500/30 ml-4 sm:ml-8 md:ml-auto max-w-4xl space-y-8 pl-6 sm:pl-8">
          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-[#0b1120] shadow-lg shadow-blue-500/30 flex items-center justify-center text-white">
                {exp.type === 'education' ? (
                  <GraduationCap className="w-3 h-3" />
                ) : exp.type === 'volunteer' ? (
                  <Users className="w-3 h-3" />
                ) : (
                  <Briefcase className="w-3 h-3" />
                )}
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                      {exp.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-purple-400">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col items-end text-xs text-gray-400 font-mono space-y-1">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                {exp.techStack && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note for recruiters */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl glass-card border border-emerald-500/30 text-center text-xs text-gray-300 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Eagerly seeking Software Engineering Internship roles for 2025/2026!</span>
        </div>
      </div>
    </section>
  );
};
