import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-tight transition-all duration-500 rounded-xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
    secondary: "bg-zinc-900 text-white hover:bg-zinc-800 border border-white/10",
    outline: "bg-transparent border border-white/10 text-zinc-400 hover:border-white hover:text-white",
    ghost: "bg-transparent text-zinc-500 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs uppercase tracking-widest",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  // Premium Light Sweep for Primary
  const LightSweep = () => (
    variant === 'primary' && (
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[35deg] pointer-events-none opacity-0 group-hover:opacity-100"
        initial={{ x: '-150%' }}
        animate={{ x: '200%' }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.8, 
          ease: [0.16, 1, 0.3, 1],
          repeatDelay: 1
        }}
      />
    )
  );

  return (
    <motion.button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      {...props}
    >
      <LightSweep />
      <span className="relative z-10 flex items-center">
        {children}
        {icon && <span className="ml-3 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">{icon}</span>}
      </span>
    </motion.button>
  );
};