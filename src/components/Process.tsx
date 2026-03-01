import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description: "We analyze your hair texture, bone structure, and lifestyle.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "The Ritual",
    description: "Signature scalp massage and botanical treatment application.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Precision",
    description: "Architectural cutting and bespoke coloring techniques.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Finish",
    description: "Expert styling and personalized home care recommendations.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2671&auto=format&fit=crop"
  }
];

export default function Process() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-12 left-6 md:left-12 z-10">
           <h2 className="text-4xl md:text-6xl font-serif mb-4">The Journey</h2>
           <p className="text-white/60 max-w-md">A curated experience designed to transform.</p>
        </div>
        
        <motion.div style={{ x }} className="flex gap-12 pl-[20vw] items-center">
          {steps.map((step) => (
            <div key={step.id} className="relative w-[80vw] md:w-[60vw] h-[70vh] flex-shrink-0 group">
              <div className="w-full h-full overflow-hidden rounded-2xl relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                  <div className="text-gold-400 text-sm font-bold tracking-widest mb-2">STEP {step.id}</div>
                  <h3 className="text-4xl md:text-6xl font-serif mb-4">{step.title}</h3>
                  <p className="text-white/80 text-lg md:text-xl max-w-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
