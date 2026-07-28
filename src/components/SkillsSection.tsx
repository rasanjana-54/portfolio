import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Wrench, Heart, Code2, FileCode2, Braces, Palette, Smartphone, Flame, HardDrive, GitBranch, Send, Monitor, Cloud, Figma, Lightbulb, Users, Zap, Network, Coffee, Terminal } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillCategory } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Cpu },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
    { id: 'soft', label: 'Soft Skills', icon: Heart },
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'FileCode2': return FileCode2;
      case 'Braces': return Braces;
      case 'Palette': return Palette;
      case 'Smartphone': return Smartphone;
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Cpu': return Cpu;
      case 'Coffee': return Coffee;
      case 'Terminal': return Terminal;
      case 'Network': return Network;
      case 'Flame': return Flame;
      case 'Database': return Database;
      case 'HardDrive': return HardDrive;
      case 'GitBranch': return GitBranch;
      case 'Send': return Send;
      case 'Monitor': return Monitor;
      case 'Cloud': return Cloud;
      case 'Figma': return Figma;
      case 'Lightbulb': return Lightbulb;
      case 'Users': return Users;
      case 'Zap': return Zap;
      default: return Code2;
    }
  };

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Proficiencies across modern web frameworks, mobile SDKs, backend APIs, databases, and engineering workflows.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as SkillCategory)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = getIconComponent(skill.iconName);
            return (
              <div
                key={skill.id}
                className="group glass-card p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Glow backdrop on hover */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    {skill.featured && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold">
                        CORE
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-300 dark:text-gray-300 light-mode:text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Level Meter */}
                <div className="pt-4 mt-3 border-t border-white/10 space-y-1.5 relative z-10">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400 font-mono text-[11px]">Proficiency</span>
                    <span className="font-bold text-cyan-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full transition-all duration-1000 group-hover:brightness-125"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
