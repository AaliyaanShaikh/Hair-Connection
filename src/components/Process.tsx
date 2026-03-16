import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef, type RefObject } from "react";
import { useScrollContainer } from "../contexts/ScrollContainerContext";

interface ProcessProps {
  onOpenBooking?: () => void;
}

const steps = [
  {
    id: "01",
    title: "Consultation",
    description: "We analyze your hair, structure, and lifestyle.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "The Ritual",
    description: "Scalp massage and botanical treatment.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Precision",
    description: "Architectural cutting and bespoke color.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Finish",
    description: "Expert styling and home care tips.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2671&auto=format&fit=crop"
  }
];

export default function Process({ onOpenBooking }: ProcessProps) {
  const targetRef = useRef(null);
  const scrollContainerRef = useScrollContainer();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    ...(scrollContainerRef && { container: scrollContainerRef as RefObject<HTMLElement> }),
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);
  const grayscaleFilter = useTransform(scrollYProgress, [0, 0.35], ["grayscale(1)", "grayscale(0)"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.35], [0.4, 0.2]);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] md:h-[250vh] bg-neutral-900 text-white [contain:layout_paint]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-20 md:top-24 left-6 md:left-12 z-10">
           <h2 className="text-4xl md:text-6xl font-serif mb-1.5">The Journey</h2>
           <p className="text-white/60 max-w-md text-sm md:text-base">A curated experience designed to transform.</p>
        </div>
        
        <motion.div
          style={{ x, willChange: "transform" }}
          className="flex gap-12 pl-[20vw] items-center pt-24 md:pt-48 [transform:translateZ(0)]"
        >
          {steps.map((step) => (
            <div key={step.id} className="relative w-[80vw] md:w-[60vw] h-[55vh] md:h-[70vh] flex-shrink-0 group">
              <div className="w-full h-full overflow-hidden rounded-2xl relative">
                <motion.div
                  className="w-full h-full"
                  style={{ filter: grayscaleFilter }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    decoding="async"
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-black pointer-events-none"
                  style={{ opacity: overlayOpacity }}
                />
                
                <div className="absolute bottom-0 left-0 w-full p-5 md:p-12">
                  <div className="text-gold-shiny text-xs md:text-sm font-bold tracking-widest mb-1 md:mb-2">STEP {step.id}</div>
                  <h3 className="text-2xl md:text-6xl font-serif mb-2 md:mb-4">{step.title}</h3>
                  <p className="text-white/80 text-sm md:text-xl max-w-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onOpenBooking?.()}
            className="flex-shrink-0 w-[65vw] sm:w-[75vw] md:w-[30vw] flex flex-col justify-center items-center text-center group cursor-pointer touch-manipulation"
          >
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-neutral-900 active:bg-white active:text-neutral-900 transition-all duration-300 shadow-lg [&:active_svg]:text-neutral-900 [&:active_svg]:rotate-45">
              <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white group-hover:text-neutral-900 group-hover:rotate-45 transition-all duration-300" />
            </div>
            <p className="mt-4 sm:mt-6 md:mt-8 font-serif text-base sm:text-lg md:text-xl text-white group-hover:text-neutral-900 transition-colors">
              Book a session
            </p>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
