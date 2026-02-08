import React from 'react';
// Using namespace import and destructuring with any to fix "no exported member" errors
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, Code2, Layout, Zap, CheckCircle2, Quote } from 'lucide-react';
import { Button } from '../components/Button';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';

const { useNavigate } = ReactRouterDOM as any;

// Mock data for the performance chart
const performanceData = [
  { subject: 'Performance', A: 98, fullMark: 100 },
  { subject: 'SEO', A: 100, fullMark: 100 },
  { subject: 'Accessibility', A: 95, fullMark: 100 },
  { subject: 'Speed', A: 99, fullMark: 100 },
  { subject: 'Security', A: 94, fullMark: 100 },
];

const testimonials = [
  {
    name: "Alexander Voss",
    role: "CTO @ Neotech",
    text: "Auvra delivered a level of technical precision we haven't found elsewhere. Their design aesthetic is perfectly aligned with high-end luxury tech.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Elena Richardson",
    role: "Founder, Zenith",
    text: "The transition from our legacy platform to the new SaaS built by Auvra was seamless. Our performance metrics tripled overnight.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Marcus Thorne",
    role: "Creative Director",
    text: "Minimalism done right. They understand that every pixel counts and their motion design is incredibly fluid and premium.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  
  // Parallax & Cinematic Motion
  const yHero = useTransform(scrollY, [0, 1000], [0, 400]);
  const yHeroText = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
  const scaleHero = useTransform(scrollY, [0, 600], [1, 0.9]);

  const lightY = useTransform(scrollY, [0, 1000], ["-20%", "20%"]);

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-24 pb-20 md:pb-32 overflow-hidden">
        
        {/* Floating Particles (Cinematic) */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.3 
              }}
              animate={{ 
                y: ["-10%", "110%"],
                opacity: [0, 0.4, 0]
              }}
              transition={{ 
                duration: Math.random() * 15 + 15, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>

        {/* Dynamic Light Field */}
        <motion.div 
          style={{ y: lightY }}
          className="absolute inset-0 bg-gradient-radial from-blue-600/5 via-black to-black pointer-events-none z-0"
        />

        <motion.div 
          style={{ y: yHero, opacity: opacityHero, scale: scaleHero }}
          className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center"
        >
          <Reveal width="100%" direction="none">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-8 md:mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#3b82f6]" />
              <span>Engineering the New Standard</span>
            </div>
          </Reveal>
          
          <div className="relative mb-8 md:mb-12">
            <motion.div style={{ y: yHeroText }}>
              <Reveal width="100%" delay={0.1}>
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] md:leading-[0.85] mb-6 md:mb-8">
                  <span className="text-white">Modern.</span><br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">Premium.</span>
                </h1>
              </Reveal>
              
              <Reveal width="100%" delay={0.2}>
                <p className="text-base sm:text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                  A high-end digital studio crafting engineered experiences for brands that demand perfection.
                </p>
              </Reveal>
            </motion.div>
          </div>
          
          <Reveal width="100%" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate('/contact')} icon={<ArrowRight size={18} />}>
                Start a Project
              </Button>
              <button 
                onClick={() => navigate('/projects')}
                className="text-zinc-500 hover:text-white transition-all text-sm md:text-base font-medium flex items-center group py-2"
              >
                Explore Works 
                <span className="ml-2 w-0 group-hover:w-4 h-px bg-white transition-all overflow-hidden" />
              </button>
            </div>
          </Reveal>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile for symmetry */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center space-y-4 z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
          <div className="w-px h-12 md:h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 md:py-24 border-y border-white/5 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             {['Next.js', 'Vercel', 'Tailwind', 'Three.js', 'Framer', 'TS'].map((tech) => (
               <span key={tech} className="text-lg md:text-2xl font-bold text-center tracking-tighter cursor-default">{tech}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal className="mb-12 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-4">Elevated <br/> <span className="text-zinc-600">Expertise.</span></h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: <Layout size={28} />, 
                title: "Premium Design", 
                text: "Luxury UI/UX focusing on minimalist aesthetics and complex motion design systems." 
              },
              { 
                icon: <Code2 size={28} />, 
                title: "Scaleable Code", 
                text: "Architecting React and Next.js platforms built for millions of interactions." 
              },
              { 
                icon: <Zap size={28} />, 
                title: "Pure Velocity", 
                text: "Optimization that doesn't just pass tests - it sets benchmarks for your industry." 
              }
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1} className="h-full">
                <TiltCard className="h-full">
                  <div className="mb-6 md:mb-8 p-3.5 md:p-4 bg-white/5 rounded-2xl w-fit text-white ring-1 ring-white/10">
                    {s.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{s.title}</h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light">{s.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-zinc-950/50 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal className="mb-12 md:mb-20 text-center mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-4">Client <span className="text-zinc-600">Words.</span></h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1} className="h-full">
                <TiltCard className="h-full group">
                  <Quote className="text-zinc-800 mb-6 group-hover:text-primary transition-colors duration-500" size={32} />
                  <p className="text-zinc-300 text-base md:text-lg mb-8 md:mb-10 font-light leading-relaxed italic">"{t.text}"</p>
                  <div className="flex items-center space-x-4">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10" />
                    <div>
                      <h4 className="text-white font-bold text-xs md:text-sm">{t.name}</h4>
                      <p className="text-zinc-500 text-[10px] md:text-xs font-medium uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 md:py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <Reveal>
              <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-6 md:mb-8 leading-tight">
                Designed for <br/>
                <span className="text-zinc-600">the top 1%.</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-xl font-light mb-10 md:mb-12 leading-relaxed">
                We believe that premium digital experiences shouldn't just look expensive—they should feel effortless. Our process is built around speed, clarity, and uncompromising quality.
              </p>
              
              <div className="grid grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
                {[
                  { label: "Performance", val: "99/100" },
                  { label: "SEO", val: "100/100" },
                  { label: "Uptime", val: "99.9%" },
                  { label: "Retention", val: "100%" },
                ].map((stat, i) => (
                  <div key={i} className="border-l border-zinc-800 pl-5 md:pl-6 py-1.5 md:py-2">
                    <div className="text-xl md:text-3xl font-bold text-white mb-1">{stat.val}</div>
                    <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => navigate('/about')}>
                Our Manifesto
              </Button>
            </Reveal>

            <Reveal delay={0.2} className="hidden sm:block">
              <TiltCard className="p-0 !bg-transparent border-none">
                <div className="h-[300px] md:h-[450px] w-full rounded-3xl bg-zinc-900/20 backdrop-blur-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 to-transparent pointer-events-none" />
                   <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData}>
                      <PolarGrid stroke="#222" />
                      <PolarAngleAxis 
                        dataKey="subject" 
                        tick={{ fill: '#52525b', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em' }} 
                      />
                      <PolarRadiusAxis tick={false} axisLine={false} />
                      <Radar
                        name="Auvra"
                        dataKey="A"
                        stroke="#fff"
                        strokeWidth={2}
                        fill="#fff"
                        fillOpacity={0.05}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-48 relative overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
        <Reveal width="100%" className="text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter mb-6 md:mb-12">
              Secure your <br/> <span className="text-zinc-600">next phase.</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-xl font-light mb-10 md:mb-16 max-w-xl mx-auto">
              We operate as a boutique partner, accepting only a limited number of high-stakes projects.
            </p>
            <div className="flex flex-col items-center justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-16 md:h-20 px-10 md:px-12 text-lg md:text-xl !rounded-full shadow-[0_0_60px_rgba(59,130,246,0.1)] hover:shadow-[0_0_80px_rgba(59,130,246,0.2)]" 
                onClick={() => navigate('/contact')}
              >
                Book Discovery Call
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};