import React from 'react';
import { Layers, Hotel, Layout, Smartphone, Cpu, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Hotel': return Hotel;
      case 'Layout': return Layout;
      case 'Smartphone': return Smartphone;
      case 'Cpu': return Cpu;
      default: return Layout;
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Freelance Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Services & <span className="text-gradient-primary">Offerings</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            High quality software development services tailored for businesses, hotel owners, startups, and individuals worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <div
                key={service.id}
                className="group glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <p className="text-[11px] font-mono text-cyan-400 uppercase font-bold">Included Features:</p>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquiry Action */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-gray-400">
                    {service.deliverables}
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-md shadow-blue-500/20"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
