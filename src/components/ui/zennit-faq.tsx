import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQItem = ({ question, answer, icon, isOpen, onToggle }: FAQItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-700 group/faq cursor-pointer",
        isOpen 
          ? "bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-pink-500/10 shadow-2xl shadow-violet-500/20 scale-[1.02]" 
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900/50 dark:via-gray-900/30 dark:to-gray-900/50 hover:shadow-xl hover:scale-[1.01] shadow-lg"
      )}
      onClick={onToggle}
    >
      {/* Animated gradient border */}
      <div className={cn(
        "absolute -inset-[2px] rounded-2xl opacity-0 blur-md transition-all duration-700",
        isOpen 
          ? "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 opacity-60" 
          : "bg-gradient-to-r from-primary/50 via-violet-500/50 to-fuchsia-500/50 group-hover/faq:opacity-40"
      )}></div>
      
      {/* Main border */}
      <div className={cn(
        "absolute inset-0 rounded-2xl border-2 transition-all duration-700",
        isOpen 
          ? "border-violet-500/50 shadow-inner shadow-violet-500/20" 
          : "border-gray-200 dark:border-gray-800 group-hover/faq:border-violet-400/50"
      )}></div>
      
      <button
        className="relative w-full px-7 py-6 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 flex-1 pr-4">
          {icon && (
            <div
              className={cn(
                "flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 shadow-lg",
                isOpen 
                  ? "bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 text-white shadow-violet-500/50 scale-110 rotate-12" 
                  : "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 group-hover/faq:from-violet-500/20 group-hover/faq:to-fuchsia-500/20 group-hover/faq:text-violet-600 dark:group-hover/faq:text-violet-400 group-hover/faq:scale-105"
              )}
            >
              <div className={cn("transition-transform duration-700", isOpen && "scale-110")}>
                {icon}
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3
              className={cn(
                "text-lg md:text-xl font-black transition-all duration-500 leading-tight",
                isOpen 
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400" 
                  : "text-gray-900 dark:text-gray-100 group-hover/faq:text-violet-600 dark:group-hover/faq:text-violet-400"
              )}
            >
              {question}
            </h3>
            {isOpen && (
              <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 mt-1 animate-in fade-in slide-in-from-left-2 duration-500">
                Currently reading ↓
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Status indicator */}
          <div className={cn(
            "w-2 h-2 rounded-full transition-all duration-500",
            isOpen 
              ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/50 scale-150" 
              : "bg-gray-300 dark:bg-gray-600 group-hover/faq:bg-violet-400"
          )}></div>
          
          {/* Toggle button */}
          <div
            className={cn(
              "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-2xl transition-all duration-700 shadow-lg",
              isOpen
                ? "bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 text-white rotate-180 scale-110 shadow-violet-500/50"
                : "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 group-hover/faq:from-violet-500/20 group-hover/faq:to-fuchsia-500/20 group-hover/faq:text-violet-600 dark:group-hover/faq:text-violet-400 group-hover/faq:scale-105"
            )}
          >
            <span className={cn("transition-transform duration-500", isOpen && "rotate-180")}>
              {isOpen ? "−" : "+"}
            </span>
          </div>
        </div>
      </button>

      {/* Answer content */}
      <div
        ref={contentRef}
        style={{ height: height }}
        className="transition-all duration-700 ease-in-out overflow-hidden"
      >
        <div className={cn(
          "px-7 pb-7 pl-24 transition-all duration-700",
          isOpen ? "opacity-100" : "opacity-0"
        )}>
          <div className={cn(
            "p-6 rounded-xl border-l-4 transition-all duration-500",
            isOpen 
              ? "bg-gradient-to-r from-violet-100/80 via-fuchsia-50/60 to-pink-100/80 dark:from-violet-900/40 dark:via-fuchsia-900/30 dark:to-pink-900/40 border-violet-500 shadow-lg backdrop-blur-sm" 
              : "bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
          )}>
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
              {answer}
            </p>
          </div>
        </div>
      </div>

      {/* Shimmer effect */}
      <div className={cn(
        "absolute inset-0 -translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none",
        isOpen && "translate-x-full"
      )}></div>
    </div>
  );
};

interface FAQProps {
  items: Array<{
    question: string;
    answer: string;
    icon?: React.ReactNode;
    defaultOpen?: boolean;
  }>;
  className?: string;
}

export const FAQ = ({ items, className }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    items.findIndex(item => item.defaultOpen) ?? null
  );

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          icon={item.icon}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
