import React from "react";
import { motion } from "framer-motion";
import gallery3 from "@assets/Islem_Md-83-1776795507_1779375260153.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={gallery3} 
          alt="Bensadi Patesserie Display" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <span className="block text-accent font-medium tracking-[0.2em] uppercase mb-4 drop-shadow-md">
            Artisan Pâtissier & Pizzaiolo
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Fait avec <span className="text-primary italic">Passion</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md leading-relaxed">
            Une expérience gourmande unique où la grande pâtisserie française rencontre l'art de la pizza gastronomique au cœur de l'Algérie.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu" 
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold tracking-wide uppercase hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1"
            >
              Découvrir le Menu
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-white text-foreground px-8 py-4 rounded-full text-sm font-bold tracking-wide uppercase hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1"
            >
              Commander
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-white/70 text-xs tracking-widest uppercase mb-2">Défiler</span>
        <motion.div 
          className="w-[1px] h-12 bg-white/30 relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
