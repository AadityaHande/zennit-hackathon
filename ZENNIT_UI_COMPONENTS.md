# ZennitUI Components Documentation

This project uses **2 custom ZennitUI components** for the hackathon submission.

---

## 📦 Components Used

### 1. **ZennitCard** (`src/components/ui/zennit-card.tsx`)

A premium card component with image overlays, gradients, and interactive states.

**Features:**
- Image with fallback gradient SVG
- Title, subtitle, and price badge
- Star rating system with reviews count
- Location indicator with MapPin icon
- Hover effects with scale and brightness
- Full light/dark mode support
- Gradient overlays (Violet → Fuchsia → Pink)

**Props:**
```typescript
interface ZennitCardProps {
  image?: string;
  title: string;
  subtitle: string;
  price: string;
  rating?: number;
  reviews?: number;
  location?: string;
  className?: string;
}
```

**Usage Example:**
```tsx
import { ZennitCard } from "@/components/ui/zennit-card";

<ZennitCard
  image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  title="AI-Powered Insights"
  subtitle="Smart Analytics & Predictions"
  price="Smart"
  rating={5}
  reviews={1247}
/>
```

**Where Used:**
- Features Section (`src/app/_components/sections/2-features.tsx`) - 6 instances
- Social Proof Section (`src/app/_components/sections/4-social-proof.tsx`) - 6 instances
- **Total: 12 cards** across the landing page

---

### 2. **ZennitFAQ** (`src/components/ui/zennit-faq.tsx`)

An accordion-style FAQ component with single-open behavior and premium animations.

**Features:**
- Single-open accordion (only one FAQ open at a time)
- Animated gradient borders on open
- Icon containers with rotation effects
- "Currently reading ↓" indicator for active item
- Status dot indicator (violet glow when open)
- Shimmer effect on interaction
- Smooth 700ms transitions
- Full light/dark mode support

**Props:**
```typescript
interface FAQProps {
  items: Array<{
    question: string;
    answer: string;
    icon?: React.ReactNode;
    defaultOpen?: boolean;
  }>;
  className?: string;
}
```

**Usage Example:**
```tsx
import { FAQ } from "@/components/ui/zennit-faq";
import { Lock, HelpCircle, CreditCard, Clock } from "lucide-react";

<FAQ
  items={[
    {
      question: "Is my financial data secure with FinAI?",
      answer: "Absolutely! We use bank-level 256-bit encryption...",
      icon: <Lock className="h-7 w-7" />,
    },
    {
      question: "How does the AI-powered insights feature work?",
      answer: "Our AI analyzes your spending patterns...",
      icon: <HelpCircle className="h-7 w-7" />,
    },
  ]}
/>
```

**Where Used:**
- Social Proof Section (`src/app/_components/sections/4-social-proof.tsx`) - 4 FAQ items

---

## 🎨 Design System

**Color Palette:**
- Primary Gradient: `Violet-500 → Fuchsia-500 → Pink-500`
- Light Mode: `Gray-50/100/200` backgrounds, `Gray-600/900` text
- Dark Mode: `Gray-800/900/950` backgrounds, `Gray-200/400` text

**Animations:**
- Transition Duration: `500-700ms` (smooth & premium)
- Hover Scale: `1.02-1.10`
- Rotation: `6-12deg` on icons
- Shimmer: `1000ms` duration

**Typography:**
- Font Family: `Inter` (body), `Poppins` (headings)
- Weights: `400` (normal), `600` (semibold), `700` (bold), `900` (black)

---

## 📂 Component Structure

```
src/components/ui/
├── zennit-card.tsx       # Card component (ZennitUI)
└── zennit-faq.tsx        # FAQ accordion (ZennitUI)
```

---

## ✨ Key Features Implemented

1. **Single-Open Accordion**: FAQ component ensures only one item is open at a time
2. **Responsive Design**: All components work seamlessly on mobile, tablet, and desktop
3. **Accessibility**: Proper ARIA attributes, semantic HTML, keyboard navigation ready
4. **Performance**: Optimized animations with GPU acceleration
5. **Theme Support**: Full light/dark mode with smooth transitions

---

## 🚀 Quick Reference

**Card Gradient:**
```css
bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600
```

**FAQ Open State:**
- Border: `2px solid violet-500/50`
- Background: `gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-pink-500/10`
- Icon: Rotates `12deg` and scales `110%`

**Hover Effects:**
- Cards: `scale-[1.02]`, `shadow-2xl`, `border-violet-500/50`
- FAQ: `scale-[1.01]`, gradient border blur, shimmer animation

---

## 📝 Notes

- All components use `cn()` utility for className merging
- Framer Motion used for smooth animations
- Lucide React for icons
- Fully typed with TypeScript
- No external ZennitUI dependencies required

---

**Last Updated:** October 12, 2025  
**Hackathon:** ZennitUI Components Challenge  
**Components Count:** 2 (Card + FAQ)
