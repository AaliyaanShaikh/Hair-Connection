import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Plus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Gold Lust Repair",
    brand: "Oribe",
    price: "$52",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Elixir Ultime",
    brand: "Kérastase",
    price: "$54",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "No. 3 Perfector",
    brand: "Olaplex",
    price: "$30",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Essence Absolue",
    brand: "Shu Uemura",
    price: "$69",
    image: "https://images.unsplash.com/photo-1556228720-19cb731fc22d?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Texturizing Spray",
    brand: "Oribe",
    price: "$49",
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1887&auto=format&fit=crop"
  }
];

export default function Products() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="py-32 bg-white overflow-hidden">
      <div className="px-6 md:px-12 mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif text-black mb-2">The Apothecary</h2>
          <p className="text-black/50 uppercase tracking-widest text-sm">Curated Essentials</p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all duration-300">
          <span className="text-xs uppercase tracking-widest font-bold">Shop All</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="pl-6 md:pl-12 overflow-x-auto no-scrollbar pb-12">
        <div className="flex gap-8 w-max">
          {products.map((product) => (
            <div key={product.id} className="group relative w-[280px] md:w-[350px] flex-shrink-0">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-neutral-50 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Action Button */}
                <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-black hover:bg-gold-400 hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                  <Plus size={20} />
                </button>
              </div>

              <div className="flex justify-between items-start px-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-black/40 mb-1">{product.brand}</p>
                  <h3 className="text-xl font-serif text-black">{product.name}</h3>
                </div>
                <span className="text-lg font-serif italic text-black/60">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
