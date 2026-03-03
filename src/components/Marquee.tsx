import { motion } from "motion/react";

export default function Marquee() {
  return (
    <div className="py-12 bg-black border-y border-white/10 overflow-hidden flex items-center relative z-20">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-4xl md:text-6xl font-serif text-white uppercase px-8">
              Haircut & Styling
            </span>
            <span className="text-4xl md:text-6xl font-serif text-gold-shiny italic px-8">
              Styling
            </span>
            <span className="text-4xl md:text-6xl font-serif text-white uppercase px-8">
              Facials & Skincare
            </span>
            <span className="text-4xl md:text-6xl font-serif text-gold-shiny italic px-8">
              Makeover
            </span>
            <span className="text-4xl md:text-6xl font-serif text-white uppercase px-8">
              Hair Spa & Treatments
            </span>
            <span className="text-4xl md:text-6xl font-serif text-gold-shiny italic px-8">
              Coloration
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
