import React from "react";
import logoPath from "@assets/668723731_122101338668811290_8511856052136778268_n_1779375241527.jpg";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoPath} alt="Bensadi Patesserie Logo" className="h-10 w-10 rounded-full object-cover border border-white/20" />
            <span className="font-serif font-bold text-xl tracking-wide text-white">Bensadi Pâtisserie</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} Bensadi Patesserie. Tous droits réservés.
            </p>
            <p className="text-primary text-sm font-medium mt-1">Fait avec Passion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
