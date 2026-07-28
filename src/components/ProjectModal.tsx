import React, { useState } from 'react';
import { X, Github, ExternalLink, Sparkles, CheckCircle2, Layers, Cpu, Code2, AlertTriangle, Play } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'simulation'>('overview');
  const [simState, setSimState] = useState<string>('idle');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold uppercase">
              {project.category.replace('_', ' + ')}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Main Hero Banner Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video max-h-72">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-cyan-300 bg-slate-900/80 px-3 py-1 rounded-lg border border-white/10">
                Role: {project.role} | Year: {project.year}
              </span>
              <div className="flex gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-white border border-white/20 flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tab Selection */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              System Specification
            </button>
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'simulation'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>Interactive Live Preview</span>
            </button>
          </div>

          {activeTab === 'overview' ? (
            <div className="space-y-6">
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono">
                  Project Description
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.fullDetails}
                </p>
              </div>

              {/* Technologies Tag Cloud */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 font-mono">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-mono">
                  Key Features & Functional Scope
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Simulation Preview */
            <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-white font-bold">
                    {project.title} - Interactive Prototype Sandbox
                  </span>
                </div>
                <span className="text-[11px] font-mono text-gray-400">
                  Simulation Engine Active
                </span>
              </div>

              {/* Dynamic Interactive Widget Based on Project Type */}
              {project.id === 'govi-sahaya' ? (
                <div className="space-y-4 text-center py-6">
                  <div className="max-w-md mx-auto p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                    <p className="text-xs text-gray-300">
                      Simulate Leaf Disease AI Scan (Flutter + Computer Vision):
                    </p>
                    <button
                      onClick={() => {
                        setSimState('scanning');
                        setTimeout(() => setSimState('diagnosed'), 2000);
                      }}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all cursor-pointer"
                    >
                      {simState === 'scanning' ? 'Analyzing Crop Image...' : 'Run AI Crop Scanner Demo'}
                    </button>

                    {simState === 'diagnosed' && (
                      <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-left space-y-1 animate-fade-in">
                        <p className="text-xs font-bold text-emerald-300">
                          Result: Paddy Blast Disease Detected (98% Confidence)
                        </p>
                        <p className="text-[11px] text-gray-300">
                          Recommended Action: Apply organic neem spray & adjust field drainage.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : project.id === 'lifepulse' ? (
                <div className="space-y-4 py-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                    <p className="text-xs font-bold text-cyan-400">
                      Simulate Patient Vitals & Gemini AI Health Summary:
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-800 rounded-lg">
                        <span className="block text-[10px] text-gray-400">Heart Rate</span>
                        <span className="font-bold text-emerald-400">72 BPM</span>
                      </div>
                      <div className="p-2 bg-slate-800 rounded-lg">
                        <span className="block text-[10px] text-gray-400">Blood Pressure</span>
                        <span className="font-bold text-blue-400">120/80</span>
                      </div>
                      <div className="p-2 bg-slate-800 rounded-lg">
                        <span className="block text-[10px] text-gray-400">Glucose</span>
                        <span className="font-bold text-amber-400">95 mg/dL</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSimState('generating');
                        setTimeout(() => setSimState('gemini_ready'), 1500);
                      }}
                      className="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all cursor-pointer"
                    >
                      {simState === 'generating' ? 'Calling Google Gemini AI...' : 'Generate Gemini AI Health Insight'}
                    </button>

                    {simState === 'gemini_ready' && (
                      <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-xs text-purple-200 space-y-1 animate-fade-in">
                        <p className="font-bold">✨ Gemini AI Insight:</p>
                        <p className="text-[11px] leading-relaxed">
                          Vitals are in optimal range. Maintain current exercise regimen and schedule follow-up checkup in 6 months.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 space-y-3">
                  <Sparkles className="w-8 h-8 text-blue-400 mx-auto animate-bounce" />
                  <p className="text-sm font-semibold text-white">
                    Live Demo sandbox initialized for {project.title}
                  </p>
                  <p className="text-xs text-gray-400 max-w-md mx-auto">
                    Full deployment repository and documentation are maintained on GitHub.
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-slate-900/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
