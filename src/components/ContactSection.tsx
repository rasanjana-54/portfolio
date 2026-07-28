import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  selectedServicePreset?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    serviceNeeded: selectedServicePreset || 'General Inquiry',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        subject: formData.subject || `Portfolio Message from ${formData.name}`,
        service: formData.serviceNeeded,
        message: formData.message
      })
    })
    .then(async (response) => {
      const res = await response.json();
      if (response.status === 200 || res.success) {
        setIsSuccess(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          serviceNeeded: 'General Inquiry',
          message: '',
        });
      } else {
        console.error("Form submission failed:", res);
        alert(res.message || "Failed to send message. Please verify your Access Key.");
      }
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please check your internet connection.");
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact <span className="text-gradient-primary">Rasanjana</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have an internship opening, freelance inquiry, or project collaboration? Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>Direct Contact Details</span>
              </h3>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] text-gray-400 font-mono">Email Address</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-mono">Mobile / WhatsApp</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-purple-400 transition-colors block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-mono">Location</p>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <p className="text-xs font-mono text-gray-400 uppercase">Connect on Developer Platforms</p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-white transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 flex items-center justify-center gap-2 text-xs font-semibold text-blue-300 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>

              {isSuccess ? (
                <div className="p-8 text-center space-y-3 animate-fade-in bg-emerald-950/40 border border-emerald-500/40 rounded-2xl">
                  <Sparkles className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-gray-300 max-w-md mx-auto">
                    Thank you for contacting Rasanjana. I will review your message and respond promptly via email or WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1.5">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Internship Opportunity / Project"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1.5">
                        Service / Reason
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="General Inquiry">General Inquiry / Internship</option>
                        <option value="Full Stack Web Applications">Full Stack Web Applications</option>
                        <option value="Hotel & Villa Booking Websites">Hotel & Villa Booking Websites</option>
                        <option value="Landing Pages & Business Websites">Landing Pages & Business Websites</option>
                        <option value="Mobile App Development & AI Tools">Mobile App Development & AI Tools</option>
                        <option value="REST API Development & Testing">REST API Development & Testing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-1.5">
                      Your Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Rasanjana, I reviewed your software engineering portfolio and would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Now</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
