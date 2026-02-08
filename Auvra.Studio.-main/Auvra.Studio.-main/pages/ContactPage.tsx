import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Instagram, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookUrl = "https://discord.com/api/webhooks/1455970916793192695/e2PNgzDIhVglWcrER4mzoaVeSYSR6v8PsCQB_T3upRFI8WML8SseYl-0YZq8MB6_sooF";

    const payload = {
      content: "📨 **New Inquiry Received**",
      embeds: [
        {
          title: "Discovery Phase Intake",
          color: 0x3b82f6,
          fields: [
            { name: "Partner Name", value: formData.name || "N/A", inline: true },
            { name: "Email Address", value: formData.email || "N/A", inline: true },
            { name: "Budget Range", value: formData.budget || "N/A", inline: true },
            { name: "Project Narrative", value: formData.message || "No details provided" }
          ],
          timestamp: new Date().toISOString(),
          footer: { text: "Auvra.Studio Engineering" }
        }
      ]
    };

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error", error);
      setSubmitted(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-32 md:pb-48 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white leading-[0.9]">
                Initiate <br/> <span className="text-zinc-600">Growth.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-lg md:text-xl font-light mb-12 md:mb-16 leading-relaxed max-w-lg">
                We are currently reviewing project proposals for Q1 2025. Please provide details regarding your vision.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-8 md:space-y-10">
                {[
                  { icon: <Mail size={22} />, label: "Email", value: "auvra.studioo@gmail.com", href: "mailto:auvra.studioo@gmail.com" },
                  { icon: <Instagram size={22} />, label: "Social", value: "@auvra.studioo", href: "https://instagram.com/auvra.studioo" },
                  { icon: <MapPin size={22} />, label: "Studio", value: "Global / Remote", href: "#" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-5 md:space-x-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600 mb-1">{item.label}</h4>
                      <a href={item.href} className="text-white text-base md:text-lg font-light hover:text-primary transition-colors">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form Side */}
          <Reveal delay={0.3} width="100%">
            <TiltCard className="p-0 !bg-transparent border-none">
              <div className="bg-zinc-900/10 p-8 md:p-14 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 backdrop-blur-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                
                {submitted ? (
                  <div className="py-20 md:py-24 text-center animate-fade-in">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.1)]">
                      <Send size={32} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Transmission Received</h3>
                    <p className="text-zinc-500 font-light mb-10 md:mb-12">Our engineering team will reach out within 24 hours.</p>
                    <Button variant="outline" size="lg" onClick={() => setSubmitted(false)}>Start New Thread</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2 md:space-y-3">
                        <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">Identity</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-3.5 md:py-4 text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-zinc-800 text-sm md:text-base"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">Contact</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-3.5 md:py-4 text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-zinc-800 text-sm md:text-base"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">Estimated Budget Range</label>
                      <input
                        type="text"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-3.5 md:py-4 text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-zinc-800 text-sm md:text-base"
                        placeholder="e.g. $10k - $25k"
                      />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">Narrative</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-3.5 md:py-4 text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all resize-none placeholder:text-zinc-800 text-sm md:text-base"
                        placeholder="Tell us about the project objectives..."
                      />
                    </div>
                    <Button type="submit" className="w-full h-14 md:h-16 text-base md:text-lg !rounded-xl" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Processing...' : 'Book Discovery Call'}
                    </Button>
                  </form>
                )}
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </div>
  );
};