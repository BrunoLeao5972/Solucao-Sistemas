import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/sobre", label: "SOBRE" },
    { href: "/produtos", label: "SOLUÇÕES" },
    { href: "/cliente", label: "ÁREA PRIVATIVA" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
      scrolled ? "bg-background/50 backdrop-blur-3xl py-4 border-b border-white/5" : "bg-transparent py-10"
    }`}>
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center group relative"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute -inset-4 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-3 relative z-10">
            <img
              src="/images/logo-solucao-sistemas.webp"
              alt="Solução Sistemas"
              className="h-16 md:h-20 w-auto brightness-0 invert group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[11px] font-black tracking-[0.4em] transition-all duration-500 relative group ${
                currentPage === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-primary rounded-full transition-all duration-500 ${
                currentPage === item.href ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
              }`} />
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="https://wa.me/558533076262" target="_blank" rel="noopener noreferrer">
            <Button variant="premium" size="lg" className="rounded-2xl px-10 shadow-2xl uppercase tracking-widest text-xs font-black">
              Falar com Vendas
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-4 text-white hover:text-primary transition-all duration-500 rounded-2xl bg-white/5 border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] md:hidden bg-background/98 backdrop-blur-[50px] flex flex-col items-center justify-center gap-12 p-12"
          >
            <div className="absolute top-10 left-10">
               <img src="/images/logo-solucao-sistemas.webp" className="h-14 brightness-0 invert" alt="" />
            </div>
            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 p-4 text-white"><X className="w-10 h-10" /></button>
            
            <div className="flex flex-col items-center gap-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-4xl font-black tracking-tighter transition-all duration-500 ${
                      currentPage === item.href ? "text-primary scale-110" : "text-white hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full pt-10"
            >
              <a href="https://wa.me/558533076262" target="_blank" rel="noopener noreferrer">
                <Button variant="premium" size="xl" className="w-full rounded-[2rem] font-black uppercase tracking-widest">
                  Falar com Vendas
                </Button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
