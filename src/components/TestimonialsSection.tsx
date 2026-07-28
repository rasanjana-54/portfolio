import React, { useState } from 'react';
import { MessageSquare, Star, PlusCircle, User, Building, Quote, CheckCircle2 } from 'lucide-react';
import { defaultTestimonials } from '../data/portfolioData';
import { TestimonialItem } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(defaultTestimonials);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    rating: 5,
  });
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.content) return;

    const item: TestimonialItem = {
      id: Date.now().toString(),
      name: newTestimonial.name,
      role: newTestimonial.role || 'Recruiter / Client',
      company: newTestimonial.company || 'Software Tech Partner',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(newTestimonial.name)}`,
      content: newTestimonial.content,
      rating: newTestimonial.rating,
      date: new Date().getFullYear().toString(),
    };

    setTestimonials([item, ...testimonials]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setShowAddModal(false);
      setSubmittedSuccess(false);
      setNewTestimonial({ name: '', role: '', company: '', content: '', rating: 5 });
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-8 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Endorsements & Recommendations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Client & Mentor <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Feedback from academic lecturers, peer developers, and freelance clients regarding Rasanjana's engineering execution.
          </p>
        </div>

        {/* Add Testimonial Trigger Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-5 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-lg hover:border-cyan-400"
          >
            <PlusCircle className="w-4 h-4 text-cyan-400" />
            <span>Leave a Recommendation / Feedback</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-cyan-500/10" />

              <div className="space-y-4">
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-[11px] text-cyan-400 font-medium">
                    {t.role}
                  </p>
                  <p className="text-[10px] text-gray-400">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Recommendation Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/20 max-w-lg w-full space-y-4 animate-fade-in relative">
              <h3 className="text-xl font-bold text-white">
                Submit Recommendation
              </h3>
              <p className="text-xs text-gray-400">
                Are you a recruiter, project lead, or client who worked with Rasanjana Nimsara? Leave your feedback here.
              </p>

              {submittedSuccess ? (
                <div className="p-6 text-center space-y-2 text-emerald-400">
                  <CheckCircle2 className="w-12 h-12 mx-auto animate-bounce" />
                  <p className="font-bold text-sm">Thank you! Your endorsement has been added.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={newTestimonial.name}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Role / Position</label>
                      <input
                        type="text"
                        placeholder="e.g. Senior Manager"
                        value={newTestimonial.role}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. Tech Solutions Inc"
                        value={newTestimonial.company}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Recommendation / Comments *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your experience working with Rasanjana..."
                      value={newTestimonial.content}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="px-4 py-2 rounded-xl bg-white/10 text-gray-300 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md"
                    >
                      Publish Endorsement
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
