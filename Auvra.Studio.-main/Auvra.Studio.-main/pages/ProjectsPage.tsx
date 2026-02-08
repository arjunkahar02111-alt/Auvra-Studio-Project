import React from 'react';
import { 
  Briefcase, 
  CreditCard, 
  FileText, 
  PieChart, 
  Download, 
  Receipt, 
  BarChart3,
  ExternalLink,
  ArrowRight,
  Box,
  MousePointer2,
  Cpu,
  Gamepad2,
  Sparkles,
  LucideIcon
} from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';

// --- Types ---

interface Tag {
  label: string;
  icon?: LucideIcon;
}

interface FeatureSection {
  title: string;
  icon: LucideIcon;
  iconColorClass: string;
  description: string;
  tags: Tag[];
}

interface Project {
  id: string;
  title: string;
  category: string;
  logo?: string;
  image: string;
  headline: string;
  description: string;
  link?: string;
  sourceLink?: string;
  features: FeatureSection[];
}

// --- Data ---

const projects: Project[] = [
  {
    id: 'auvra-3d-web',
    title: 'Auvra 3D Web Showcase',
    category: 'Spatial Computing',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070',
    headline: 'Immersive 3D Experiences',
    description: 'A revolutionary digital environment built with React and Spline. This project demonstrates high-performance spatial interfaces and interactive 3D navigation for the modern web.',
    link: 'https://auvra-showcase1.vercel.app/',
    features: [
      {
        title: 'Spline & React Integration',
        icon: Box,
        iconColorClass: 'text-purple-400 bg-purple-500/10',
        description: 'Native 3D object manipulation with real-time state synchronization between React components and Spline scenes.',
        tags: [
          { label: 'React' },
          { label: 'Spline' },
          { label: '3D UI' },
        ]
      },
      {
        title: 'Modern Architecture',
        icon: Cpu,
        iconColorClass: 'text-blue-400 bg-blue-500/10',
        description: 'Optimized for 60 FPS performance using GPU acceleration and advanced asset lazy-loading for instantaneous load times.',
        tags: [
          { label: 'Next.js' },
          { label: 'Three.js' },
          { label: 'Motion' },
        ]
      }
    ]
  },
  {
    id: 'aether-echoes',
    title: 'Aether Echoes',
    category: 'Indie Game Studio',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=2071',
    headline: 'Forging New Worlds',
    description: 'An independent game studio specializing in immersive worlds and mechanically driven narratives. Built with a modern tech stack to ensure seamless cross-platform performance and aesthetic excellence.',
    link: 'https://aether-echoes-auvra.vercel.app/',
    sourceLink: 'https://github.com/1STRYKE/AetherEchoes',
    features: [
      {
        title: 'Creative Engineering',
        icon: Gamepad2,
        iconColorClass: 'text-orange-400 bg-orange-500/10',
        description: 'Utilizing React and TypeScript to build complex, responsive game interfaces and interactive world-building logic.',
        tags: [
          { label: 'React' },
          { label: 'TypeScript' },
          { label: 'Indie' },
        ]
      },
      {
        title: 'Visual Magic',
        icon: Sparkles,
        iconColorClass: 'text-pink-400 bg-pink-500/10',
        description: 'Pushing the boundaries of web-based gaming with high-fidelity visuals, HTML5 canvas optimization, and fluid animations.',
        tags: [
          { label: 'HTML5' },
          { label: 'CSS3' },
          { label: 'Animation' },
        ]
      }
    ]
  },
  {
    id: 'floss',
    title: 'Floss Accounting',
    category: 'SaaS Architecture',
    logo: 'https://i.ibb.co/Y7JvPbrd/FLOSS-20251211-002524-0000.png',
    image: 'https://i.ibb.co/0Vdkwsdq/l-EBJl-G8-FNz-Ef-Yycmv-ONqzne-Mr-Tw.png',
    headline: 'Redefining Financial Control',
    description: 'A custom-engineered OS for agencies to manage high-velocity project financials without the friction of traditional accounting software.',
    features: [
      {
        title: 'Project Ledger',
        icon: Briefcase,
        iconColorClass: 'text-blue-400 bg-blue-500/10',
        description: 'Keep every project moving forward. Plan, assign, and deliver your work - all in one place. With smart task tracking, deadlines, and real-time progress.',
        tags: [
          { label: 'Payments', icon: CreditCard },
          { label: 'Invoices', icon: FileText },
          { label: 'Bill', icon: Receipt },
          { label: 'Analytics', icon: BarChart3 },
        ]
      },
      {
        title: 'Capital Management',
        icon: PieChart,
        iconColorClass: 'text-zinc-300 bg-white/5',
        description: 'Track invoices, bills, and log expenses effortlessly. Branded documentation and automated earnings reports integrated directly into your workflow.',
        tags: [
          { label: 'Budgeting' },
          { label: 'GST Compliance' },
          { label: 'Export', icon: Download },
        ]
      }
    ]
  }
];

// --- Components ---

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <TiltCard className="p-0 !bg-transparent border-none">
      <div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900/20 backdrop-blur-xl group/card">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Visual Side */}
          <div className="relative h-[400px] lg:h-auto min-h-[450px] md:min-h-[600px] overflow-hidden bg-black">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
             <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[2s] group-hover/card:scale-110"
             />
             
             {project.logo && (
               <div className="absolute top-6 md:top-10 left-6 md:left-10 z-20">
                 <div className="bg-black/60 backdrop-blur-xl p-3 md:p-4 rounded-2xl border border-white/10 shadow-2xl">
                    <img src={project.logo} alt="Logo" className="h-8 md:h-10 w-auto" />
                 </div>
               </div>
             )}
             
             <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-300 mb-4 md:mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{project.category}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">{project.title}</h2>
             </div>
          </div>

          {/* Content Side */}
          <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">{project.headline}</h3>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600 mb-8 md:mb-10">Production // Creative Engineering</p>
            
            <p className="text-zinc-400 font-light leading-relaxed mb-10 md:mb-12 text-sm md:text-lg">
              {project.description}
            </p>
            
            <div className="space-y-10 md:space-y-12">
              {project.features.map((feature, idx) => (
                <div key={idx} className="group/feature">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-2.5 md:p-3 rounded-xl transition-all duration-500 group-hover/feature:scale-110 ${feature.iconColorClass}`}>
                      <feature.icon size={20} />
                    </div>
                    <h4 className="text-white font-bold text-lg md:text-xl">{feature.title}</h4>
                  </div>
                  <p className="text-zinc-400 font-light mb-6 pl-12 md:pl-14 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pl-12 md:pl-14">
                    {feature.tags.map((tag, tagIdx) => (
                       <span key={tagIdx} className="inline-flex items-center px-3 py-1.5 md:py-2 rounded-lg text-[9px] md:text-[10px] font-bold uppercase tracking-wider bg-white/5 text-zinc-400 border border-white/5 hover:border-white/20 hover:text-white transition-all">
                         {tag.icon && <tag.icon size={12} className="mr-2" />}
                         {tag.label}
                       </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-6">
              {project.link ? (
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto"
                  icon={<ArrowRight size={18} />}
                  onClick={() => window.open(project.link, '_blank')}
                >
                  Visit Showcase
                </Button>
              ) : (
                <Button size="lg" className="w-full sm:w-auto" icon={<ArrowRight size={18} />}>
                  View Experience
                </Button>
              )}
              <Button 
                variant="outline" 
                className="w-full sm:w-auto" 
                size="lg" 
                icon={<ExternalLink size={18} />}
                onClick={() => project.sourceLink ? window.open(project.sourceLink, '_blank') : null}
              >
                Source Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 lg:px-12">
        <Reveal width="100%" className="text-center mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 md:mb-8 text-white">Selected <span className="text-zinc-600">Works.</span></h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            Our portfolio is a collection of high-stakes engineering projects. Each one is a balance of technical complexity and visual refinement.
          </p>
        </Reveal>
      </section>

      <section className="pb-24 md:pb-48 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          {projects.map((project, index) => (
             <Reveal key={project.id} width="100%" delay={index * 0.1} direction="up">
               <ProjectCard project={project} />
             </Reveal>
          ))}
        </div>
      </section>

      {/* Placeholder */}
      <section className="pb-24 md:pb-32 text-center opacity-20 grayscale">
        <Reveal width="100%">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-500 mb-8">End of Portfolio</p>
          <div className="inline-block h-px w-24 md:w-32 bg-zinc-800" />
        </Reveal>
      </section>
    </div>
  );
};
