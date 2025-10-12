'use client';
import { ZennitCard } from "@/components/ui/zennit-card";
import { FAQ } from "@/components/ui/zennit-faq";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, TrendingUp, Award, Shield, Lock, Clock, CreditCard, HelpCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    title: "Sarah Johnson",
    subtitle: "Small Business Owner",
    price: "⭐ 5.0",
    rating: 5,
    reviews: 1247
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    title: "Michael Chen",
    subtitle: "Software Engineer",
    price: "⭐ 5.0",
    rating: 5,
    reviews: 982
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    title: "Emily Rodriguez",
    subtitle: "Graduate Student",
    price: "⭐ 5.0",
    rating: 5,
    reviews: 1105
  }
];

const faqItems = [
  {
    question: "Is my financial data secure with FinAI?",
    answer: "Absolutely! We use bank-level 256-bit encryption and multi-factor authentication to protect your data. All information is encrypted both in transit and at rest. We never sell your data to third parties and comply with all major financial security standards.",
    icon: <Lock className="h-5 w-5" />,
    defaultOpen: true
  },
  {
    question: "How does the AI-powered insights feature work?",
    answer: "Our AI analyzes your spending patterns, income, and financial goals to provide personalized recommendations. It learns from millions of anonymized transactions to identify trends, predict future expenses, and suggest ways to optimize your budget and savings.",
    icon: <HelpCircle className="h-5 w-5" />
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer: "Yes! FinAI supports connections with over 500 financial institutions. You can link multiple checking accounts, savings accounts, credit cards, and investment accounts to get a complete view of your financial health in one place.",
    icon: <CreditCard className="h-5 w-5" />
  },
  {
    question: "How long does it take to set up my account?",
    answer: "Getting started with FinAI takes just 2-3 minutes. Simply sign up, connect your bank accounts using our secure integration, and you're ready to go. The AI will start analyzing your data immediately and provide insights within 24 hours.",
    icon: <Clock className="h-5 w-5" />
  }
];

const stats = [
  { label: "Active Users", value: "50K+", icon: Users, color: "text-primary" },
  { label: "Money Saved", value: "$12M+", icon: TrendingUp, color: "text-green-500" },
  { label: "5-Star Reviews", value: "15K+", icon: Award, color: "text-yellow-500" },
  { label: "Bank Partners", value: "500+", icon: Shield, color: "text-violet-500" },
];

export default function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      id="testimonials"
      ref={ref}
      className="w-full bg-gradient-to-b from-background via-secondary/30 to-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-6 pb-6">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ${stat.color} mb-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Badge variant="outline" className="text-primary border-primary/50 mb-4 py-1 px-4 bg-primary/5">
            <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
            Loved by Thousands
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground">
            Don't Just Take Our Word
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
              Hear From Our Users
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Join thousands of satisfied users who've transformed their financial lives.
          </p>
        </motion.div>

        {/* Testimonials Grid with ZennitUI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <ZennitCard
                image={testimonial.image}
                title={testimonial.title}
                subtitle={testimonial.subtitle}
                price={testimonial.price}
                rating={testimonial.rating}
                reviews={testimonial.reviews}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section with ZennitUI FAQ Component */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-primary border-primary/50 mb-4 py-1 px-4 bg-primary/5">
              <HelpCircle className="h-4 w-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tight text-foreground">
              Frequently Asked
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                {" "}Questions
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              Everything you need to know about FinAI
            </p>
          </div>

          <FAQ items={faqItems} />
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">
              Trusted by 500+ financial institutions • Bank-level security • SOC 2 Certified
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
