import { motion } from "motion/react";

interface CTAProps {
  onOpenBooking?: () => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  return (
    <section id="book" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Book your visit
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight leading-[1.1] mb-6">
              Your moment
              <br />
              <span className="italic text-gold-shiny">awaits</span>
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-10 max-w-md">
              Experience the art of hair in our sanctuary. Book your
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                type="button"
                onClick={() => onOpenBooking?.()}
                className="inline-flex items-center justify-center rounded-full bg-gold-shiny text-neutral-900 px-8 py-4 text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity duration-200"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                Book a session
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
                alt="Salon interior"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
