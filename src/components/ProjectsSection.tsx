import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Sparkles, Filter, Code2, ArrowUpRight, Play } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack Web' },
    { id: 'mobile_ai', label: 'Mobile & AI Apps' },
    { id: 'frontend', label: 'Frontend UI' },
    { id: 'backend', label: 'Backend APIs' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Engineering <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Real-world software systems developed by Rasanjana Nimsara spanning full-stack web platforms, mobile AI applications, and cloud REST APIs.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as ProjectCategory)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-3xl border border-white/10 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Thumbnail Header */}
                <div className="relative overflow-hidden aspect-video border-b border-white/10 bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80" />

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-cyan-300 font-bold">
                    {project.year}
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono text-amber-300 font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>FEATURED</span>
                    </div>
                  )}
                </div>

                {/* Card Info Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mt-1 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-gray-300 dark:text-gray-300 light-mode:text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 rounded-lg bg-white/5 text-[10px] font-mono text-gray-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md hover:shadow-blue-500/25 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Explore Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal Component */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
