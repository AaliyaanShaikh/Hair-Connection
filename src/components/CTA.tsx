import { motion } from "motion/react";

interface CTAProps {
  onOpenBooking?: () => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  return (
    <section id="book" className="bg-neutral-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen w-full overflow-hidden"
      >
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
            alt="Salon interior"
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-neutral-900/60 md:bg-gradient-to-r md:from-neutral-900/75 md:via-neutral-900/50 md:to-transparent" />
          {/* Text over image */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 py-12 md:py-16 lg:max-w-[50%]">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-300 mb-4 md:mb-6">
              Book your visit
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.15] mb-4 md:mb-6">
              Your moment
              <br />
              <span className="italic text-gold-shiny">awaits</span>
            </h2>
            <p className="text-neutral-200 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
              Experience the art of hair in our sanctuary. Book your
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
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
          </div>
      </motion.div>
    </section>
  );
}
