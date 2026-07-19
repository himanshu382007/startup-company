import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme-context';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1440px] transition-all duration-500 ${scrolled ? 'top-2 md:top-4' : ''}`}
    >
      <div className="flex items-center justify-between relative px-4 md:px-6 py-3 md:py-4 rounded-full bg-blue-600/80 dark:bg-slate-800/90 backdrop-blur-xl border border-blue-500/50 dark:border-slate-600/50 shadow-xl shadow-blue-900/20 dark:shadow-black/30 hover:shadow-blue-900/30 dark:hover:shadow-black/40 transition-shadow">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 pl-2 md:pl-0 z-10 relative">
          <img src="/logo.png" alt="NeuroWings Logo" className="w-17 h-17 object-contain drop-shadow-md brightness-0 invert" />
          <span className="text-white font-bold tracking-wide text-2xl drop-shadow-sm">
            NeuroWings
          </span>
        </div>

        {/* Center: Links */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8 text-base font-bold text-white/90 z-10 w-max">
          {[
            { name: 'Home', href: '#home' },
            { name: 'Products', href: '#products' },
            { name: 'Services', href: '#services' },
            { name: 'Industries', href: '#industries' },
            { name: 'About us', href: '#about' },
            { name: 'Contact', href: '#contact' }
          ].map((item) => (
            <a key={item.name} href={item.href} className="relative hover:text-white transition-colors group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full rounded-full drop-shadow-sm" />
            </a>
          ))}
        </div>

        {/* Right: Theme Toggle + CTA */}
        <div className="flex items-center gap-2 md:gap-4 z-10 relative">
          {/* Dark Mode Toggle */}
          <button 
            id="theme-toggle"
            onClick={toggleTheme}
            className="relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/15 hover:bg-white/25 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Sun size={16} className="text-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Moon size={16} className="text-white/90" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-blue-600 dark:text-slate-900 text-base font-bold hover:scale-105 transition-all shadow-md hover:shadow-lg hover:bg-slate-50">
            Get a Consultation
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-blue-100 p-2 rounded-full hover:bg-blue-700 dark:hover:bg-slate-700 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full mt-2 p-4 rounded-3xl bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 flex flex-col gap-2 shadow-2xl shadow-blue-900/10 dark:shadow-black/30 overflow-hidden"
          >
            {[
              { name: 'Home', href: '#home' },
              { name: 'Products', href: '#products' },
              { name: 'Services', href: '#services' },
              { name: 'Industries', href: '#industries' },
              { name: 'About us', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((item, i) => (
              <motion.a 
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-blue-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 text-base font-medium transition-colors px-6 py-4 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-2 mx-2 px-6 py-4 rounded-xl bg-blue-600 text-white text-base font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
