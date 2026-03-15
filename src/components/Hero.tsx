import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]); // Slight zoom out on scroll for cinematic feel
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative min-h-[70dvh] md:min-h-[100dvh] h-[70dvh] md:h-screen w-full overflow-hidden bg-black">
      {/* Background Image - Simulating a high-end video frame */}
      <motion.div 
        style={{ scale, y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury Salon Atmosphere"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-12 text-center">
        <motion.div
          style={{ y: textY }}
          className="space-y-5 md:space-y-10 mix-blend-difference text-white"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="text-[11vw] sm:text-[12vw] md:text-[12vw] leading-[0.85] font-serif tracking-tighter text-white">
              LUMIÈRE
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-3 md:gap-6"
          >
            <p className="text-sm md:text-lg uppercase tracking-[0.4em] font-light text-white/90">
              Parisian Hair Couture
            </p>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-[1px] bg-white/80" 
            />
            
            <div className="flex gap-8 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/80">
              <span>Est. 2024</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Book a Session - Small pill in bottom-right corner (same on all screens) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 rounded-full bg-white text-black px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm font-medium tracking-widest uppercase hover:bg-neutral-100 transition-colors"
        type="button"
        onClick={() => onOpenBooking?.()}
      >
        Book a Session
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 z-20 text-white mix-blend-difference pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-70">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-8 md:h-12 bg-white/50" 
        />
      </motion.div>
    </section>
  );
}
