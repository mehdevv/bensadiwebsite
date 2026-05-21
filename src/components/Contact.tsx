import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Nous Trouver
            </h2>
            <div className="w-24 h-1 bg-primary mb-10"></div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-semibold text-foreground mb-2">Commandes & Livraison</h4>
                  <p className="text-muted-foreground mb-1">Livraison rapide à domicile</p>
                  <p className="text-lg font-medium text-foreground">
                    <span className="text-primary font-bold">Pâtisserie:</span> 0797 53 90 98
                  </p>
                  <p className="text-lg font-medium text-foreground">
                    <span className="text-primary font-bold">Pizza:</span> 0668 79 52 00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-semibold text-foreground mb-2">Adresse</h4>
                  <p className="text-muted-foreground text-lg">
                    Bensadi Patesserie<br />
                    Amizour, Béjaïa, Algérie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-semibold text-foreground mb-2">Horaires</h4>
                  <p className="text-muted-foreground text-lg">
                    Ouvert tous les jours<br />
                    Pour le petit-déjeuner, déjeuner et dîner.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-serif font-semibold text-foreground mb-4">Rejoignez notre communauté</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/bensadi_patesserie" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/people/Bensadi-Patesserie/61574338723643/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                  <SiFacebook className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@bensadi.patessrie" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                  <SiTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg border border-border/50 bg-card p-2"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385.00951651849226!2d4.9066593681464346!3d36.65051163686068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d2f37908126b1%3A0x8fc3c02cd2483f1f!2sPatessrie%20bensadi!5e0!3m2!1sen!2sdz!4v1779374964794!5m2!1sen!2sdz" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "400px", borderRadius: "1.25rem" }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bensadi Patesserie Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
