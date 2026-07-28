import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, Sparkles, ShieldCheck, Search } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import { CertificateItem } from '../types';

export const CertificatesSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredCerts = filter === 'all'
    ? certificatesData
    : certificatesData.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-8 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Certifications & <span className="text-gradient-primary">Accreditations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Professional development certificates awarded by top Sri Lankan universities, LinkedIn Learning, and global language institutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {[
            { id: 'all', label: 'All Certifications' },
            { id: 'web', label: 'Web & Multimedia' },
            { id: 'programming', label: 'Python & Software' },
            { id: 'ai', label: 'AI & Models' },
            { id: 'languages', label: 'English & Soft Skills' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-purple-600 text-white shadow-lg shadow-amber-500/20 scale-105'
                  : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group glass-card p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-cyan-300">
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400 mt-1">
                    Issued by: {cert.issuer}
                  </p>
                </div>

                {/* Skills Learned */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Credential</span>
                </span>
                <span className="text-[11px] font-mono text-gray-400 uppercase">
                  {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
