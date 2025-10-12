'use client';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import { useRef } from 'react';

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="w-full bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 md:px-16 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 dark:from-violet-500/20 dark:via-fuchsia-500/20 dark:to-pink-500/20 border-2 border-violet-500/30 dark:border-violet-500/50 rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl shadow-violet-500/20 dark:shadow-violet-500/30 backdrop-blur-xl"
        >
          {/* Background gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/30 dark:bg-violet-500/40 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/30 dark:bg-fuchsia-500/40 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-gray-900 dark:text-white">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400">Transform</span> Your Finances?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Take the first step towards financial freedom. Join FinAI today and start your journey to a brighter financial future. It's free to get started.
            </p>
            <div className="mt-12 flex justify-center">
              <Button 
                size="lg" 
                className="shimmer-button text-lg py-7 px-10 rounded-full group shadow-2xl shadow-violet-500/40 hover:shadow-violet-500/50 transition-all duration-500 hover:scale-105 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white border-0"
              >
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
