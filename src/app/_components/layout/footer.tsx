'use client';
import { PiggyBank, Twitter, Github, Linkedin, Mail, Send, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  "Product": [
    { href: '#features', label: 'Features' },
    { href: '#dashboard', label: 'Dashboard' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#', label: 'Pricing' },
  ],
  "Company": [
    { href: '#footer', label: 'About Us' },
    { href: '#footer', label: 'Careers' },
    { href: '#footer', label: 'Blog' },
    { href: '#footer', label: 'Press Kit' },
  ],
  "Resources": [
    { href: '#footer', label: 'Help Center' },
    { href: '#footer', label: 'API Documentation' },
    { href: '#footer', label: 'Community' },
    { href: '#footer', label: 'Contact Us' },
  ],
  "Legal": [
    { href: '#footer', label: 'Privacy Policy' },
    { href: '#footer', label: 'Terms of Service' },
    { href: '#footer', label: 'Security' },
    { href: '#', label: 'Cookie Policy' },
  ]
}

const socialLinks = [
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://github.com/AadityaHande/zennit-hackathon', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/AadityaHande', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:hello@finai.com', icon: Mail, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-black border-t border-gray-800 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 md:px-16 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section - Enhanced */}
            <div className="lg:col-span-4 space-y-6">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-2xl shadow-primary/50 ring-2 ring-primary/20 ring-offset-2 ring-offset-gray-950">
                      <PiggyBank className="h-7 w-7 text-white drop-shadow-lg" />
                    </div>
                    <span className="text-4xl font-black tracking-tighter font-headline bg-gradient-to-r from-white via-primary to-violet-400 bg-clip-text text-transparent drop-shadow-2xl">FinAI</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
                    Transform your financial future with AI-powered insights. Join thousands of users who manage their money smarter, save more, and achieve their financial goals with confidence.
                </p>
                
                {/* Newsletter - Enhanced */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-300">Subscribe to our newsletter</p>
                  <form className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-violet-500 to-fuchsia-500 rounded-2xl opacity-30 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                    <div className="relative flex items-center bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl overflow-hidden focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 transition-all shadow-xl">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-5 py-4 w-full text-sm text-gray-200 placeholder-gray-500 outline-none bg-transparent"
                      />
                      <button
                        type="submit"
                        className="relative bg-gradient-to-r from-primary via-violet-500 to-fuchsia-500 text-white px-5 py-4 hover:shadow-2xl hover:shadow-primary/50 transition-all flex items-center gap-2 font-semibold group/btn overflow-hidden"
                        aria-label="Subscribe to newsletter"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                        <Send size={18} className="relative z-10" />
                      </button>
                    </div>
                  </form>
                </div>

                {/* Contact Info - Enhanced */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-gray-400 group cursor-pointer hover:text-primary transition-colors">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <span>123 Finance Street, Tech Valley, CA</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group cursor-pointer hover:text-primary transition-colors">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 group cursor-pointer hover:text-primary transition-colors">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <a href="mailto:hello@finai.com" className="hover:text-primary transition-colors">hello@finai.com</a>
                  </div>
                </div>

                {/* Social Links - Enhanced */}
                <div className="flex items-center gap-3 pt-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative h-12 w-12 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-primary flex items-center justify-center transition-all group/social overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-primary/30"
                        aria-label={social.label}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-violet-500/0 group-hover/social:from-primary/20 group-hover/social:to-violet-500/20 transition-all duration-500"></div>
                        <Icon className="h-5 w-5 text-gray-400 group-hover/social:text-white transition-colors relative z-10" />
                      </a>
                    );
                  })}
                </div>
            </div>
            
            {/* Links Section - Enhanced */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title}>
                        <h3 className="font-bold text-white tracking-wide mb-6 relative inline-block text-base">
                          {title}
                          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-primary via-violet-500 to-fuchsia-500 rounded-full shadow-lg shadow-primary/50"></span>
                        </h3>
                        <ul className="space-y-3">
                            {links.map(link => (
                                <li key={`${link.href}-${link.label}`}>
                                    <a 
                                      href={link.href} 
                                      className="text-sm text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group/link"
                                    >
                                      <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 group-hover/link:w-5 transition-all duration-300 rounded-full"></span>
                                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Bottom Bar - Enhanced */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">FinAI</span>. All rights reserved. - Aaditya Hande.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with <span className="text-red-500 animate-pulse">❤️</span> using <span className="font-semibold text-primary">ZennitUI </span>
            </p>
        </div>
      </div>
    </footer>
  )
}
