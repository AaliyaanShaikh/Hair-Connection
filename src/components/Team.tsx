import { motion } from "motion/react";

const founder = {
  name: "Elena Vasquez",
  title: "Founder & Creative Director",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
  story:
    "I started Hair Connection with a simple belief: that hair is more than style—it's identity. After 15 years in Paris and New York, I came home to create a space where every client feels seen, understood, and transformed.",
  quote: "Beauty is not one look. It's your story, told through every strand.",
  credentials: ["Paris Fashion Week", "Vogue Editorial", "15+ Years"],
};

export default function Team() {
  return (
    <section id="atelier" className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-24 md:gap-y-6 items-start">
          {/* 1. Name - mobile first */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="order-1 md:col-start-2 md:row-start-1"
          >
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold-shiny mb-2 md:mb-6">
              Founder&apos;s Insight
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">
              {founder.name}
            </h2>
          </motion.div>

          {/* 2. Title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="order-2 md:col-start-2 md:row-start-2"
          >
            <p className="text-gold-shiny text-sm tracking-[0.2em] uppercase mt-0 md:mt-4 mb-4 md:mb-8">
              {founder.title}
            </p>
          </motion.div>

          {/* 3. Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="order-3 md:col-start-1 md:row-start-1 md:row-span-6 flex justify-center md:justify-start my-6 md:my-0"
          >
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gold-shiny/20 border border-gold-shiny/30 -z-10" aria-hidden />
            </div>
          </motion.div>

          {/* 4. Story */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-4 md:col-start-2 md:row-start-3"
          >
            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
              {founder.story}
            </p>
          </motion.div>

          {/* 5. Quote */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-5 md:col-start-2 md:row-start-4"
          >
            <blockquote className="border-l-2 border-gold-400 pl-6 py-2 mt-6 mb-4 md:mt-8 md:mb-8">
              <p className="font-serif text-xl md:text-2xl italic text-neutral-700">
                &quot;{founder.quote}&quot;
              </p>
            </blockquote>
          </motion.div>

          {/* 6. Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-6 md:col-start-2 md:row-start-5"
          >
            <div className="flex flex-wrap gap-4">
              {founder.credentials.map((item, index) => (
                <span
                  key={index}
                  className="text-xs tracking-[0.2em] uppercase text-neutral-500 border border-neutral-300 px-4 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
