'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
import React from 'react';

const AnimatedOrbs = () => {
  const orbs = [
    {
      size: 500,
      initial: { x: '5vw', y: '5vh' },
      animate: { x: '75vw', y: '65vh' },
      transition: { duration: 25, repeat: Infinity, repeatType: 'mirror' as const, ease: 'easeInOut' },
      color: 'bg-violet-500/20 dark:bg-violet-500/30',
    },
    {
      size: 400,
      initial: { x: '85vw', y: '15vh' },
      animate: { x: '15vw', y: '85vh' },
      transition: { duration: 30, repeat: Infinity, repeatType: 'mirror' as const, ease: 'easeInOut' },
      color: 'bg-fuchsia-500/20 dark:bg-fuchsia-500/30',
    },
    {
      size: 300,
      initial: { x: '40vw', y: '75vh' },
      animate: { x: '95vw', y: '5vh' },
      transition: { duration: 20, repeat: Infinity, repeatType: 'mirror' as const, ease: 'easeInOut' },
      color: 'bg-pink-500/15 dark:bg-pink-500/25',
    },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            initial={orb.initial}
            animate={orb.animate}
            transition={orb.transition}
            className={`absolute rounded-full ${orb.color} filter blur-3xl`}
            style={{
              width: orb.size,
              height: orb.size,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

const FloatingElements = () => {
  const elements = [
    { icon: TrendingUp, delay: 0, duration: 3, xOffset: -20 },
    { icon: Shield, delay: 1, duration: 3.5, xOffset: 0 },
    { icon: Zap, delay: 2, duration: 4, xOffset: 20 },
  ];

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {elements.map((Element, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [100, -100],
            x: [Element.xOffset, Element.xOffset * -1]
          }}
          transition={{
            duration: Element.duration,
            delay: Element.delay,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: '50%',
          } as React.CSSProperties}
        >
          <Element.icon className="h-6 w-6 text-violet-500/40 dark:text-violet-400/40" />
        </motion.div>
      ))}
    </div>
  );
};

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-5rem)] bg-white dark:bg-gray-950 flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-violet-500/5 to-gray-50 dark:from-gray-950 dark:via-violet-500/5 dark:to-gray-950"></div>
      <AnimatedOrbs />
      <FloatingElements />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge variant="outline" className="mb-6 text-sm border-violet-500/50 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 text-violet-700 dark:text-violet-400 hover:bg-violet-500/20 transition-all duration-500 shadow-lg shadow-violet-500/20 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 mr-2" />
            Powered by AI • Built for You
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline text-gray-900 dark:text-white tracking-tight leading-[1.1]">
            Your Money,
            <br />
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400 animate-gradient">
                Simplified
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 blur-2xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Take control of your financial future with{' '}
          <span className="font-semibold text-gray-900 dark:text-white">AI-powered insights</span>, 
          real-time tracking, and beautiful visualizations that make money management effortless.
        </motion.p>
        
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="shimmer-button rounded-full text-lg py-7 px-10 group shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white border-0"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="rounded-full text-lg py-7 px-10 border-2 border-violet-500/50 hover:bg-violet-500/10 text-gray-900 dark:text-white hover:border-violet-500 transition-all duration-500"
          >
            Watch Demo
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-20 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            <span>Bank-level Security</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" />
            <span>Real-time Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <span>AI-Powered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
