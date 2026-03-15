import { motion } from "motion/react";
import { useRef } from "react";

const collectionImages = [
  {
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2626&auto=format&fit=crop",
    span: "md:col-span-1",
    height: "h-[60vh]",
    service: "Precision Cut",
    stylist: "Elena V.",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2574&auto=format&fit=crop",
    span: "md:col-span-1",
    height: "h-[50vh]",
    service: "Balayage & Tone",
    stylist: "Julian R.",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2574&auto=format&fit=crop",
    span: "md:col-span-1",
    height: "h-[60vh]",
    service: "Texture Styling",
    stylist: "Sarah K.",
  },
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669&auto=format&fit=crop",
    span: "md:col-span-2",
    height: "h-[70vh]",
    service: "Editorial Color",
    stylist: "Julian R.",
  },
  {
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2670&auto=format&fit=crop",
    span: "md:col-span-1",
    height: "h-[70vh]",
    service: "Scalp Treatment",
    stylist: "Marc D.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Collection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="collection"
      className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden [contain:layout_paint]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-black/10 pb-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-gold-shiny text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
            >
              Our Work
            </motion.span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif text-black mb-4">
              Lookbook
            </h2>
            <p className="text-black/50 uppercase tracking-widest text-sm">
              Fall / Winter 2024
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <p className="text-black/60 max-w-xs text-left md:text-right font-serif italic text-lg">
              "Capturing the essence of movement and light."
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {collectionImages.map((item, index) => (
            <div key={index} className="contents">
              <CollectionItem item={item} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CollectionItem({
  item,
  index,
}: {
  item: (typeof collectionImages)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative group overflow-hidden rounded-2xl ${item.span} ${item.height} w-full`}
    >
      <div className="absolute inset-0">
        <img
          src={item.src}
          alt="Collection Look"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-8">
        <span className="font-serif text-3xl md:text-4xl italic tracking-wider mb-2">
          {item.service}
        </span>
        <span className="uppercase text-xs tracking-[0.3em] text-gold-shiny">
          by {item.stylist}
        </span>
      </div>
    </motion.div>
  );
}
