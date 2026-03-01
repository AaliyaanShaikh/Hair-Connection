import { motion } from "motion/react";

const reviews = [
  {
    text: "An absolute sanctuary. The attention to detail is unmatched in the city.",
    author: "Isabella R.",
    role: "Vogue Editor",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop",
  },
  {
    text: "Hair Connection isn't just a salon, it's a transformative experience. My hair has never looked better.",
    author: "Camille D.",
    role: "Model",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
  },
  {
    text: "The color mastery here is on another level. Natural, radiant, and perfectly tailored.",
    author: "Sophie M.",
    role: "Paris",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2564&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-neutral-950">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="mb-20 md:mb-28">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight max-w-2xl">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full flex flex-col border border-neutral-800 bg-neutral-900/50 p-8 md:p-10 transition-colors duration-300 group-hover:border-neutral-700">
                <p className="text-neutral-300 text-lg md:text-xl leading-relaxed font-serif italic mb-8 flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-neutral-800">
                    <img
                      src={review.image}
                      alt={review.author}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-gold-shiny font-medium text-sm">
                      {review.author}
                    </p>
                    <p className="text-neutral-500 text-xs mt-0.5">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
