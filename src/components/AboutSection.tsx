import React, { useState } from 'react';
import { User, GraduationCap, Target, Award, CheckCircle, Phone, Mail, UserCheck, Sparkles, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'education' | 'strengths' | 'references'>('overview');

  return (
    <section id="about" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="text-gradient-primary">Rasanjana Nimsara</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Software Engineering Undergraduate at IIT Sri Lanka with a passion for problem solving, full-stack web architectures, mobile systems, and AI integration.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto bg-slate-900/60 p-1.5 rounded-2xl border border-white/10">
          {[
            { id: 'overview', label: 'Summary & Bio', icon: User },
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'strengths', label: 'Strengths & Goal', icon: Target },
            { id: 'references', label: 'Academic References', icon: UserCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <span>Aspiring Software Engineer & Full-Stack Developer</span>
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {personalInfo.aboutDetailed}
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gray-400 block text-xs">Degree Program:</span>
                    <span className="font-semibold text-white">BSc (Hons) Computer Science</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gray-400 block text-xs">Institute:</span>
                    <span className="font-semibold text-white">IIT Sri Lanka / Univ. of Westminster</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gray-400 block text-xs">Primary Focus:</span>
                    <span className="font-semibold text-white">Full-Stack, Flutter, Gemini AI</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gray-400 block text-xs">Location:</span>
                    <span className="font-semibold text-white">Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 via-slate-900/80 to-purple-900/30 border border-blue-500/30 space-y-4">
                  <h4 className="font-bold text-lg text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    <span>Areas of Interest</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.interests.map((interest, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-blue-500/20 border border-blue-500/30 text-xs font-semibold text-blue-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-gray-400">
                      "Dedicated to crafting user-centric software solutions that deliver high real-world value."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Education */}
          {activeTab === 'education' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <span>Academic Qualifications</span>
              </h3>

              <div className="space-y-6 relative border-l-2 border-blue-500/30 ml-4 pl-6">
                {/* IIT Colombo */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0b1120]" />
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-white">
                        Informatics Institute of Technology (IIT), Colombo, Sri Lanka
                      </h4>
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-semibold">
                        2023 June – Present
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-purple-400">
                      BSc (Hons) in Computer Science (Affiliated with University of Westminster, UK)
                    </p>
                    <p className="text-xs text-gray-300">
                      Expected Graduation: 2027
                    </p>
                    <div className="pt-2 text-xs text-gray-400">
                      <span className="font-semibold text-gray-200">Relevant Coursework: </span>
                      Data Structures, Algorithms, Object-Oriented Programming (OOP), Database Management, Mobile Application Development, Web Development.
                    </div>
                  </div>
                </div>

                {/* Science College */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0b1120]" />
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-white">
                        Science College, Mount Lavinia, Sri Lanka
                      </h4>
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-semibold">
                        2009 – 2023
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-cyan-400">
                      GCE Advanced Level Examinations (GCE A/L – 2022)
                    </p>
                    <p className="text-xs text-gray-300">
                      Mathematics Stream: Combined Mathematics, Physics, ICT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Strengths & Objective */}
          {activeTab === 'strengths' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Target className="w-6 h-6 text-cyan-400" />
                  <span>Career Objective</span>
                </h3>
                <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-gray-200 leading-relaxed text-sm sm:text-base">
                  "{personalInfo.careerObjective}"
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Award className="w-6 h-6 text-emerald-400" />
                  <span>Personal Strengths</span>
                </h3>
                <div className="space-y-2.5">
                  {personalInfo.strengths.map((strength, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-200"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Academic References */}
          {activeTab === 'references' && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-amber-400" />
                  <span>Academic References</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Faculty and mentors at Informatics Institute of Technology who can attest to my technical performance and character.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalInfo.references.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all space-y-4"
                  >
                    <div>
                      <h4 className="text-lg font-bold text-white">{ref.name}</h4>
                      <p className="text-xs text-amber-400 font-semibold">{ref.title}</p>
                      <p className="text-xs text-gray-400">{ref.institution}</p>
                    </div>

                    <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
                      <a
                        href={`tel:${ref.phone}`}
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-blue-400" />
                        <span>{ref.phone}</span>
                      </a>
                      <a
                        href={`mailto:${ref.email}`}
                        className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-purple-400" />
                        <span>{ref.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
