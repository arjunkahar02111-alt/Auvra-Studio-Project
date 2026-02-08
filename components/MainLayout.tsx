import React, { useState, useEffect } from 'react';
// Using namespace import and destructuring with any to fix "no exported member" errors
import * as ReactRouterDOM from 'react-router-dom';
import { Menu, X, Github, Instagram } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomCursor } from './CustomCursor';

const { useLocation, useNavigate } = ReactRouterDOM as any;

const NavLink: React.FC<{ to: string; active: boolean; children: React.ReactNode; onClick: () => void }> = ({ 
  to, 
  active, 
  children, 
  onClick 
}) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
      active ? 'text-white' : 'text-zinc-400 hover:text-white'
    }`}
  >
    <span className="relative z-10">{children}</span>
    {active ? (
      <motion.span 
        layoutId="navbar-indicator"
        className="absolute bottom-0 left-4 right-4 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
        transition={{ duration: 0.3 }}
      />
    ) : (
      <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-zinc-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
    )}
  </button>
);

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-primary/40 overflow-x-hidden">
      <CustomCursor />
      <div className="bg-noise fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 md:py-4 bg-black/40 backdrop-blur-2xl border-b border-white/5' 
            : 'py-6 md:py-8 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer group" 
              onClick={() => handleNav('/')}
            >
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-white group-hover:text-primary transition-all duration-500 flex items-center">
                Auvra<span className="text-zinc-600 group-hover:text-white transition-colors">.Studio</span>
                <span className="w-1 h-1 bg-primary rounded-full ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <NavLink 
                  key={item.path} 
                  to={item.path} 
                  active={location.pathname === item.path}
                  onClick={() => handleNav(item.path)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pl-4">
                <Button size="sm" onClick={() => handleNav('/contact')}>
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-400 hover:text-white p-2 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-zinc-900 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-8 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className={`block w-full text-left py-4 text-2xl font-bold tracking-tight border-b border-zinc-900/30 ${
                       location.pathname === item.path ? 'text-white' : 'text-zinc-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-6">
                  <Button className="w-full h-14 text-lg" onClick={() => handleNav('/contact')}>
                    Start Project
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-grow pt-20 relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
            <div className="md:col-span-5">
              <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white block mb-6 md:mb-8">
                Auvra<span className="text-zinc-700">.Studio</span>
              </span>
              <p className="text-zinc-400 max-w-md mb-8 md:mb-10 text-base md:text-lg leading-relaxed font-light">
                Engineering high-end digital infrastructure for companies that prioritize design, performance, and user experience.
              </p>
              <div className="flex space-x-6">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/Auvra-Studio" },
                  { icon: <Instagram size={20} />, href: "https://www.instagram.com/auvra.studioo" },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, href: "mailto:auvra.studioo@gmail.com" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 hidden md:block">
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Capabilities</h4>
              <ul className="space-y-4 text-zinc-500 font-medium text-sm">
                <li><button onClick={() => handleNav('/services')} className="hover:text-white transition-colors">Web Dev</button></li>
                <li><button onClick={() => handleNav('/services')} className="hover:text-white transition-colors">UI/UX Design</button></li>
                <li><button onClick={() => handleNav('/services')} className="hover:text-white transition-colors">Engineering</button></li>
                <li><button onClick={() => handleNav('/services')} className="hover:text-white transition-colors">Identity</button></li>
              </ul>
            </div>

            <div className="md:col-span-2 hidden md:block">
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Studio</h4>
              <ul className="space-y-4 text-zinc-500 font-medium text-sm">
                <li><button onClick={() => handleNav('/about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => handleNav('/projects')} className="hover:text-white transition-colors">Our Work</button></li>
                <li><button onClick={() => handleNav('/contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 md:mb-8 uppercase tracking-widest text-[10px]">Inquiries</h4>
              <p className="text-zinc-500 text-sm mb-6 font-light">Join our network of forward-thinking partners.</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-zinc-900/50 border border-white/5 rounded-lg px-4 py-3 text-xs md:text-sm focus:outline-none focus:border-white/20 transition-all font-light"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">
            <p>&copy; 2026 Auvra.Studio &bull; Precision Engineered</p>
            <div className="flex space-x-8 md:space-x-12 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);
