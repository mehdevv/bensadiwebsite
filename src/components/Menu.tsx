import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const patisserieCategories = [
  {
    title: "Viennoiseries",
    subtitle: "Morning Pastries",
    items: [
      "Croissant",
      "Croissant aux Amandes",
      "Petit Pain au Chocolat",
      "Chnelk (Pain aux Raisins)",
      "Brioche (nature, chocolat, tressée, etc.)",
      "Monaco"
    ]
  },
  {
    title: "Gâteaux Secs",
    subtitle: "Dry / Hard Biscuits",
    items: [
      "Croquet (Croquant)",
      "Halwat Tabaa (emporte-pièce cookies)",
      "Sablés à la Confiture",
      "Ghribia",
      "Petits Fours Secs",
      "Biscottes / Galettes (hard dipping biscuits)"
    ]
  },
  {
    title: "Tranches & Individuels",
    subtitle: "Cake Slices",
    items: [
      "Crème Brûlée",
      "Tranche Caramel / Chocolat",
      "Tranche Pistache",
      "Mini Pavlova",
      "Tranche Chocolat Doré",
      "Tranche Moka / Praliné",
      "Tranche aux Fruits",
      "Tranche Noix de Coco",
      "Carré Tout Chocolat",
      "Tartelette Caramel et Noix"
    ]
  },
  {
    title: "Classiques & Tartes",
    subtitle: "Classic Cakes",
    items: [
      "Mille-Feuille",
      "Éclair (chocolat, café, etc.)",
      "Religieuse",
      "Tartelette au Citron (meringuée)",
      "Tartelette aux Fraises"
    ]
  }
];

const pizzaMenu = [
  { name: "Pizza au Fromage", avec: 400, sans: 300 },
  { name: "Pizza au Thon", avec: 450, sans: 350 },
  { name: "Pizza au Viande Hachée", avec: 450, sans: 350 },
  { name: "Pizza Merguez", avec: 450, sans: 350 },
  { name: "Pizza Quatre Saison", avec: 600, sans: 500 },
  { name: "Pizza 03 Fromage", avec: 600, sans: null },
  { name: "Pizza Royale", avec: 700, sans: null },
  { name: "Pizza Maison", avec: 600, sans: null },
  { name: "Méga Pizza", avec: 1200, sans: null },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Notre Menu
          </motion.h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
            Découvrez nos créations artisanales, préparées chaque jour avec des ingrédients de première qualité.
          </p>
        </div>

        <Tabs defaultValue="patisserie" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="flex h-auto min-h-0 w-full max-w-md items-stretch gap-1 rounded-full border border-border/40 bg-muted/50 p-1.5 text-foreground shadow-inner">
              <TabsTrigger
                value="patisserie"
                className="flex flex-1 items-center justify-center rounded-full border border-transparent bg-transparent px-4 py-3 font-serif text-lg leading-none shadow-none ring-0 ring-offset-0 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none data-[state=inactive]:text-foreground/80"
              >
                Pâtisserie
              </TabsTrigger>
              <TabsTrigger
                value="pizza"
                className="flex flex-1 items-center justify-center rounded-full border border-transparent bg-transparent px-4 py-3 font-serif text-lg leading-none shadow-none ring-0 ring-offset-0 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none data-[state=inactive]:text-foreground/80"
              >
                Pizza
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="patisserie" className="mt-0 outline-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {patisserieCategories.map((category, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground italic mb-6">{category.subtitle}</p>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                        <span className="text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="pizza" className="mt-0 outline-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-6 sm:p-10 shadow-sm border border-border/50 max-w-4xl mx-auto"
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl font-serif font-bold text-primary mb-2">Pizzas Gastronomiques</h3>
                <p className="text-muted-foreground italic">Pâte maison, ingrédients frais. Prix en DZD.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-4 border-b-2 border-primary/20 text-foreground font-serif text-xl">Pizza</th>
                      <th className="py-4 px-4 border-b-2 border-primary/20 text-foreground font-serif text-xl text-center">Avec Cheddar</th>
                      <th className="py-4 px-4 border-b-2 border-primary/20 text-foreground font-serif text-xl text-center">Sans Cheddar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pizzaMenu.map((pizza, index) => (
                      <tr key={index} className="group hover:bg-muted/30 transition-colors">
                        <td className="py-4 px-4 border-b border-border/50 font-medium text-foreground">{pizza.name}</td>
                        <td className="py-4 px-4 border-b border-border/50 text-center font-bold text-primary">{pizza.avec}</td>
                        <td className="py-4 px-4 border-b border-border/50 text-center font-medium text-muted-foreground">
                          {pizza.sans ? pizza.sans : <span className="text-border">—</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
