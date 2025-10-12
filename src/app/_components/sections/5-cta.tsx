'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

const benefits = [
  "Free 14-day trial, no credit card required",
  "Cancel anytime, no questions asked",
  "Access to all premium features",
  "24/7 customer support",
];

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="w-full bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-16 py-24 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center"
        >
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="outline" className="text-primary border-primary/50 mb-6 py-2 px-6 text-base bg-primary/10">
                <Sparkles className="h-4 w-4 mr-2" />
                Start Your Financial Transformation Today
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-headline tracking-tight text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ready to Take Control of
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-500 to-fuchsia-500">
                  Your Financial Future?
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl -z-10"
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
            </motion.h2>

            {/* Subheadline */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join over 50,000 users who are already saving more, spending smarter, and achieving their financial goals with FinAI.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-sm md:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="shimmer-button text-lg py-7 px-10 rounded-full group shadow-2xl shadow-primary/40 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg py-7 px-10 rounded-full border-2 hover:bg-primary/5 transition-colors"
              >
                Schedule a Demo
              </Button>
            </motion.div>

            {/* Trust Signal */}
            <motion.p
              className="mt-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              No credit card required • Setup in 2 minutes • Cancel anytime
            </motion.p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-violet-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>
      </div>
    </section>
  );
}
