import { motion } from "motion/react";

const collectionImages = [
  { 
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2626&auto=format&fit=crop", 
    span: "md:col-span-1", 
    height: "h-[60vh]",
    service: "Precision Cut",
    stylist: "Elena V."
  },
  { 
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2574&auto=format&fit=crop", 
    span: "md:col-span-1", 
    height: "h-[40vh]",
    service: "Balayage & Tone",
    stylist: "Julian R."
  },
  { 
    src: "https://images.unsplash.com/photo-1596472537359-98850562820d?q=80&w=2574&auto=format&fit=crop", 
    span: "md:col-span-1", 
    height: "h-[50vh]",
    service: "Texture Styling",
    stylist: "Sarah K."
  },
  { 
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669&auto=format&fit=crop", 
    span: "md:col-span-2", 
    height: "h-[70vh]",
    service: "Editorial Color",
    stylist: "Julian R."
  },
  { 
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2670&auto=format&fit=crop", 
    span: "md:col-span-1", 
    height: "h-[50vh]",
    service: "Scalp Treatment",
    stylist: "Marc D."
  },
];

export default function Collection() {
  return (
    <section id="collection" className="py-32 px-6 bg-white">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/10 pb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif text-black mb-4">Lookbook</h2>
            <p className="text-black/50 uppercase tracking-widest text-sm">Fall / Winter 2024</p>
          </div>
          <div className="hidden md:block">
            <p className="text-black/60 max-w-xs text-right font-serif italic text-lg">
              "Capturing the essence of movement and light."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collectionImages.map((item, index) => (
            <CollectionItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative group overflow-hidden ${item.span} ${item.height} w-full`}
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={item.src}
        alt="Collection Look"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
        <span className="font-serif text-3xl italic tracking-wider mb-2">{item.service}</span>
        <span className="uppercase text-xs tracking-widest opacity-80">by {item.stylist}</span>
      </div>
    </motion.div>
  );
}
