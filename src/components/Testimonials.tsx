import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    text: "An absolute sanctuary. The attention to detail is unmatched in the city.",
    author: "Isabella R.",
    location: "Vogue Editor",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop"
  },
  {
    text: "Lumière isn't just a salon, it's a transformative experience. My hair has never looked better.",
    author: "Camille D.",
    location: "Model",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
  },
  {
    text: "The color mastery here is on another level. Natural, radiant, and perfectly tailored.",
    author: "Sophie M.",
    location: "Paris",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2564&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-32 bg-neutral-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-12 flex justify-center">
          <div className="flex gap-1 text-gold-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="h-[400px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-8 border-2 border-white/20">
                <img 
                  src={reviews[current].image} 
                  alt={reviews[current].author}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
                "{reviews[current].text}"
              </p>
              <div>
                <p className="font-bold tracking-widest uppercase text-sm">{reviews[current].author}</p>
                <p className="text-white/50 text-xs tracking-widest mt-2">{reviews[current].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button onClick={prev} className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
