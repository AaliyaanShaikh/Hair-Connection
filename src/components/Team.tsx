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
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="aspect-[4/5] w-full max-w-lg overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold-shiny mb-6">
              The Founder
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight mb-4">
              {founder.name}
            </h2>
            <p className="text-gold-shiny text-sm tracking-[0.2em] uppercase mb-10">
              {founder.title}
            </p>

            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mb-10">
              {founder.story}
            </p>

            <blockquote className="border-l-2 border-gold-400 pl-6 py-2 mb-10">
              <p className="font-serif text-xl md:text-2xl italic text-neutral-700">
                "{founder.quote}"
              </p>
            </blockquote>

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
