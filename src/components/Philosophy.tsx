import { motion } from "motion/react";

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-900 text-white [contain:layout_paint]">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="h-[120%] w-full">
           <img
             src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2670&auto=format&fit=crop"
             alt="Philosophy Background"
             decoding="async"
             className="w-full h-full object-cover grayscale"
             referrerPolicy="no-referrer"
           />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left w-full">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex flex-col items-center md:items-start"
           >
             <h2 className="text-2xl sm:text-5xl md:text-7xl font-serif leading-none mb-6 sm:mb-8 whitespace-nowrap md:whitespace-normal">
               Beauty is <span className="italic text-gold-shiny">Intention.</span>
             </h2>
             <div className="h-[1px] w-24 bg-white/30 mb-8" />
           </motion.div>
        </div>

        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl font-light leading-relaxed text-white/80">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We believe in the transformative power of hair. It is not merely an accessory, but an extension of self—a silent language that speaks before you do.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our philosophy is rooted in the balance of precision and fluidity. We don't just cut hair; we sculpt it to honor your bone structure, your lifestyle, and your essence.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
