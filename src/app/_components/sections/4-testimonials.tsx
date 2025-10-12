'use client';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Star, StarHalf, HelpCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah J.",
    title: "Financial Analyst",
    avatarId: "avatar1",
    quote: "FinAI completely changed how I see my finances. The AI tips are game-changing and have already helped me save hundreds!",
    rating: 5,
  },
  {
    name: "Mark C.",
    title: "Freelancer",
    avatarId: "avatar2",
    quote: "Finally, a finance app that's beautiful and easy to use. Tracking my spending used to be a chore, but now it's actually enjoyable.",
    rating: 4.5,
  },
  {
    name: "Emily R.",
    title: "Student",
    avatarId: "avatar3",
    quote: "As someone who was always intimidated by budgeting, FinAI has been a lifesaver. I feel so much more in control of my money.",
    rating: 5,
  },
  {
    name: "David L.",
    title: "Home Buyer",
    avatarId: "avatar4",
    quote: "The goal-setting feature is my favorite. It keeps me motivated and on track to buy my first home. Highly recommend this app!",
    rating: 5,
  }
];

const faqs = [
  {
    question: 'Is FinAI secure?',
    answer: 'Yes, absolutely. We use bank-level encryption (AES-256) to protect your data. Security is our highest priority, and we never store your banking credentials.',
  },
  {
    question: 'How does the AI provide insights?',
    answer: 'Our AI analyzes your spending patterns, income, and recurring bills to identify trends and opportunities. It can suggest budget adjustments, find potential savings, and alert you to unusual activity.',
  },
  {
    question: 'Can I connect all my bank accounts?',
    answer: 'FinAI supports thousands of financial institutions worldwide. You can securely connect checking, savings, credit card, and investment accounts to get a complete picture of your finances.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'FinAI offers a completely free tier that includes essential features like account aggregation and basic budgeting. Our premium plan unlocks advanced AI insights, goal tracking, and detailed reports.',
  },
  {
    question: 'How is my data used?',
    answer: 'Your personal financial data is used solely to provide and improve the FinAI service for you. We do not sell your data to third parties. For more details, please see our Privacy Policy.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};


const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
  }
  if (halfStar) {
    stars.push(<StarHalf key="half" className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
  }
  const remainingStars = 5 - fullStars - (halfStar ? 1 : 0);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-muted-foreground/20" />);
  }
  return stars;
};

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      id="testimonials"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full bg-background"
    >
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-24 md:py-32">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <Badge variant="outline" className="text-primary border-primary/50 mb-4 py-1 px-4">
                    Wall of Love
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">
                    Trusted by Thousands
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    See how FinAI is helping people transform their financial lives.
                </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => {
                            const avatar = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
              return (
                <CarouselItem 
                  key={testimonial.name} 
                  className={`md:basis-1/2 lg:basis-1/3 pl-4 ${index >= 3 ? 'hidden md:block' : ''}`}>
                                <div className="p-1 h-full">
                                    <Card className="h-full flex flex-col justify-between border-border/50 bg-secondary/30">
                                        <CardContent className="p-6 flex flex-col items-start text-left gap-4">
                                            <div className="flex items-center gap-4">
                                                {avatar && (
                                                    <Image
                                                        src={avatar.imageUrl}
                                                        alt={avatar.description}
                                                        data-ai-hint={avatar.imageHint}
                                                        width={56}
                                                        height={56}
                                                        className="rounded-full border-2 border-primary/20 p-0.5"
                                                    />
                                                )}
                                                <div>
                                                    <p className="font-bold text-foreground">{testimonial.name}</p>
                                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                                </div>
                                            </div>
                                            <blockquote className="text-base text-foreground/80 leading-relaxed">&quot;{testimonial.quote}&quot;</blockquote>
                                            <div className="flex items-center gap-1 pt-2">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-50px] hidden lg:flex" />
                    <CarouselNext className="right-[-50px] hidden lg:flex" />
                </Carousel>
            </motion.div>

            <motion.div
              className="text-center mt-24 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="text-primary border-primary/50 mb-4 py-1 px-4">
                <HelpCircle className="h-4 w-4 mr-2" />
                Common Questions
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Have questions? We've got answers. Here are some of the most common things we get asked.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <AccordionItem value={`item-${index}`} className="border-b border-border/50">
                      <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>

        </div>
    </motion.section>
  );
}
