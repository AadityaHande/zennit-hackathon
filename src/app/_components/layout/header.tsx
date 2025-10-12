'use client';

import { ThemeToggle } from '@/app/_components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PiggyBank, Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#testimonials', label: 'Testimonials' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSheetOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm animate-in slide-in-from-top-8 duration-500 delay-200 fill-mode-backwards">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-16">
        <a href="#home" className="flex items-center gap-3">
          <PiggyBank className="h-8 w-8 text-primary" />
          <span className="text-2xl font-black tracking-tighter font-headline">FinAI</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button>Get Started</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-sm">
                    <nav className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="text-2xl font-bold text-foreground transition-colors hover:text-primary"
                        >
                        {link.label}
                        </a>
                    ))}
                    <Button size="lg" className="mt-8" onClick={() => setSheetOpen(false)}>Get Started</Button>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>

      </div>
    </header>
  );
}
