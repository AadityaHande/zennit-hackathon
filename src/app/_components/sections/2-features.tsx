'use client';
import { Badge } from "@/components/ui/badge";
import { ZennitCard } from "@/components/ui/zennit-card";
import { Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "AI-Powered Insights",
    subtitle: "Smart Analytics & Predictions",
    price: "Smart",
    rating: 5,
    reviews: 1247
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    title: "Visual Analytics",
    subtitle: "Beautiful Charts & Graphs",
    price: "Beautiful",
    rating: 4.9,
    reviews: 982
  },
  {
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    title: "Smart Goal Tracking",
    subtitle: "Achieve Financial Milestones",
    price: "Motivating",
    rating: 4.8,
    reviews: 1105
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    title: "Bank-Level Security",
    subtitle: "256-bit Encryption & MFA",
    price: "Secure",
    rating: 5,
    reviews: 1534
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    title: "Multi-Platform Sync",
    subtitle: "Access Anywhere, Anytime",
    price: "Anywhere",
    rating: 4.9,
    reviews: 876
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "Real-Time Updates",
    subtitle: "Instant Transaction Tracking",
    price: "Instant",
    rating: 4.9,
    reviews: 1290
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      id="features"
      ref={ref}
      className="w-full bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="text-violet-700 dark:text-violet-400 border-violet-500/50 mb-4 py-1 px-4 bg-violet-500/10 backdrop-blur-sm shadow-lg shadow-violet-500/20">
            <Zap className="h-4 w-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-gray-900 dark:text-white">
            Everything You Need to
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400">
              Master Your Money
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400">
            FinAI combines cutting-edge AI technology with beautiful design to give you complete financial clarity.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
             <motion.div 
              key={feature.title}
              variants={itemVariants}
            >
              <ZennitCard
                image={feature.image}
                title={feature.title}
                subtitle={feature.subtitle}
                price={feature.price}
                rating={feature.rating}
                reviews={feature.reviews}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Trust Element */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg font-medium">Trusted by over 50,000+ users worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {/* Stripe */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="h-10 w-auto text-gray-400 dark:text-gray-600 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300" viewBox="0 0 60 25" fill="currentColor">
                <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.93 0 1.85 6.29.97 6.29 5.88z"/>
              </svg>
            </motion.div>

            {/* PayPal */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="h-10 w-auto text-gray-400 dark:text-gray-600 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300" viewBox="0 0 100 32" fill="currentColor">
                <path d="M12.237 2.8h8.43c3.305 0 5.477.604 6.84 1.905 1.22 1.167 1.815 2.884 1.815 5.247 0 4.39-2.815 7.906-6.84 8.77-1.17.252-2.352.378-3.532.378h-2.352c-.632 0-1.17.505-1.267 1.134l-1.267 8.01c-.097.505-.537.883-1.072.883h-4.39c-.537 0-.978-.505-.883-1.04L10.13 4.35c.097-.633.632-1.134 1.267-1.134h.84zm10.685 9.53c1.364-1.04 2.06-2.787 2.06-5.343 0-1.454-.44-2.566-1.267-3.4-.827-.834-2.06-1.265-3.69-1.265H15.06l-2.158 13.63h2.352c1.363 0 2.72-.126 4.085-.378 1.364-.25 2.535-.83 3.583-1.745zm24.41-7.37h4.39c.537 0 .978.505.883 1.04l-3.69 23.57c-.097.632-.632 1.133-1.267 1.133h-4.39c-.537 0-.978-.505-.883-1.04l3.69-23.57c.097-.632.632-1.133 1.267-1.133zm-9.928 13.252c1.364-1.04 2.06-2.787 2.06-5.343 0-1.454-.44-2.566-1.267-3.4-.827-.834-2.06-1.265-3.69-1.265h-4.968l-2.158 13.63h2.352c1.363 0 2.72-.126 4.085-.378 1.364-.25 2.535-.83 3.583-1.745zM34.88 2.8h8.43c3.305 0 5.477.604 6.84 1.905 1.22 1.167 1.815 2.884 1.815 5.247 0 4.39-2.815 7.906-6.84 8.77-1.17.252-2.352.378-3.532.378h-2.352c-.632 0-1.17.505-1.267 1.134l-1.267 8.01c-.097.505-.537.883-1.072.883h-4.39c-.537 0-.978-.505-.883-1.04L32.77 4.35c.097-.633.632-1.134 1.267-1.134h.84z"/>
              </svg>
            </motion.div>

            {/* Plaid */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <div className="grid grid-cols-2 gap-1">
                  <div className="h-4 w-4 rounded bg-gray-400 dark:bg-gray-600 group-hover:bg-violet-600 dark:group-hover:bg-violet-400 transition-colors duration-300"></div>
                  <div className="h-4 w-4 rounded bg-gray-400 dark:bg-gray-600 group-hover:bg-fuchsia-600 dark:group-hover:bg-fuchsia-400 transition-colors duration-300"></div>
                  <div className="h-4 w-4 rounded bg-gray-400 dark:bg-gray-600 group-hover:bg-fuchsia-600 dark:group-hover:bg-fuchsia-400 transition-colors duration-300"></div>
                  <div className="h-4 w-4 rounded bg-gray-400 dark:bg-gray-600 group-hover:bg-pink-600 dark:group-hover:bg-pink-400 transition-colors duration-300"></div>
                </div>
                <span className="text-2xl font-black text-gray-400 dark:text-gray-600 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">PLAID</span>
              </div>
            </motion.div>

            {/* Visa */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="h-10 w-auto text-gray-400 dark:text-gray-600 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300" viewBox="0 0 120 40" fill="currentColor">
                <path d="M53.174 19.827c-.132-6.77-5.898-10.696-9.29-12.973-3.392-2.276-4.523-3.805-4.523-5.858 0-2.806 2.538-5.688 8.012-5.688 4.072 0 6.234 1.178 8.084 2.355l1.217-6.866c-1.85-.935-4.786-1.936-8.772-1.936C37.618-11.14 30.65-4.16 30.65 3.766c0 5.857 5.218 9.132 9.214 11.075 3.996 1.943 5.37 3.241 5.37 5.597 0 3.61-4.224 5.215-8.107 5.215-4.786 0-8.107-1.252-10.494-2.56L25.4 30.047c2.387 1.308 5.936 2.428 10.038 2.428 11.268 0 17.735-5.595 17.735-14.648zM89.95-10.733l-7.412.023-17.735 47.22h11.268l2.235-6.172h13.733l1.3 6.172H104.5zm-9.443 12.164c.94 4.512 4.523 21.766 5.762 27.88H75.446c1.547-4.157 6.183-16.608 9.064-24.336.83-2.233 2.387-7.003 2.997-8.906M19.237-10.71L.69 36.507h11.268l18.583-47.218zm39.41.045l-8.578 47.22h10.72L69.367-10.62z"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
