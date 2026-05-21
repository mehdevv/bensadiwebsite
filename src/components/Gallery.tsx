import React from "react";
import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";

import gallery1 from "@assets/Islem_Md-6-1776795356_1779375260151.jpeg";
import gallery2 from "@assets/Islem_Md-5-1776795356_1779375260152.jpeg";
import gallery3 from "@assets/Islem_Md-83-1776795507_1779375260153.jpeg";
import gallery4 from "@assets/Islem_Md-72-1776795459_1779375260154.jpeg";

const photos = [
  { src: gallery1, alt: "White cream cake with strawberries", className: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto" },
  { src: gallery2, alt: "Elegant white cake with chocolate petals", className: "col-span-1 row-span-1 aspect-square" },
  { src: gallery4, alt: "Pastry display case wide shot", className: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 aspect-video sm:aspect-auto" },
  { src: gallery3, alt: "Pastry display case", className: "col-span-1 row-span-1 aspect-square" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
            >
              Galerie
            </motion.h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-muted-foreground max-w-lg font-light text-lg">
              Un aperçu de nos vitrines et de nos créations du jour. L'élégance à l'état pur.
            </p>
          </div>
          
          <a 
            href="https://www.instagram.com/bensadi_patesserie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            <SiInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Suivez-nous sur Instagram</span>
          </a>
        </div>

        <div className="relative z-0 grid grid-cols-2 sm:grid-cols-3 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative z-0 overflow-hidden rounded-2xl group ${photo.className}`}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <SiInstagram className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 mx-auto mt-14 max-w-2xl md:mt-16">
          <p className="rounded-2xl border border-border bg-background px-5 py-4 text-center text-base leading-relaxed text-foreground shadow-sm md:px-8 md:text-lg">
            Envoyez-nous vos photos sur Instagram en nous mentionnant{" "}
            <a
              href="https://www.instagram.com/bensadi_patesserie"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              @bensadi_patesserie
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
