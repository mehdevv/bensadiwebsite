import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/668723731_122101338668811290_8511856052136778268_n_1779375241527.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Galerie", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={logoPath} alt="Bensadi Patesserie Logo" className="h-12 w-12 rounded-full object-cover border border-primary/20 shadow-sm" />
            <span className={`font-serif font-bold text-xl tracking-wide ${isScrolled ? "text-primary" : "text-white drop-shadow-md"}`}>Bensadi</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors ${
                  isScrolled ? "text-foreground" : "text-white/90 hover:text-white drop-shadow-sm"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Commander
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-foreground bg-background/80 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 text-center bg-primary text-primary-foreground px-5 py-3 rounded-md text-base font-semibold"
            >
              Commander
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
