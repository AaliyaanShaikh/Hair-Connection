import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type RefObject } from "react";
import { ArrowUpRight } from "lucide-react";
import { useScrollContainer } from "../contexts/ScrollContainerContext";

const services = [
  {
    id: "01",
    title: "The Cut",
    description: "Precision cutting tailored to your bone structure and lifestyle. Includes a consultation, shampoo, and signature blowout.",
    price: "from $120",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2578&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Color Artistry",
    description: "Bespoke color services ranging from subtle balayage to dramatic transformations. We use only organic, damage-free pigments.",
    price: "from $200",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Treatments",
    description: "Restorative rituals for your hair and scalp. Japanese head spa, keratin infusion, and deep hydration masks.",
    price: "from $85",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Bridal & Event",
    description: "On-site or in-salon styling for your most important moments. Trials included for all bridal packages.",
    price: "Consultation",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop"
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const scrollContainerRef = useScrollContainer();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    ...(scrollContainerRef && { container: scrollContainerRef as RefObject<HTMLElement> }),
  });

  return (
    <section ref={containerRef} id="services" className="relative bg-white pb-24 md:pb-32 [contain:layout_paint]">
      {/* Section Header */}
      <div className="pt-10 pb-0 md:py-32 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/10 pb-1 md:pb-8">
           <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight">
             Service Menu
           </h2>
           <p className="text-black/50 max-w-xs text-left md:text-right mt-6 md:mt-0">
             Curated treatments designed to enhance your natural beauty.
           </p>
        </div>
      </div>

      <div className="px-6 md:px-12">
        {services.map((service, index) => (
          <div key={service.id} className="contents">
            <ServiceCard service={service} index={index} total={services.length} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, index, total }) {
  const topOffset = 120 + (index * 20); 

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="sticky flex flex-col md:flex-row overflow-hidden bg-neutral-50 rounded-[2.5rem] mb-8 shadow-sm border border-neutral-100"
      style={{ top: topOffset, height: "70vh" }} 
    >
      {/* Text Section */}
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-between relative z-10">
        <div className="flex justify-between items-start">
          <span className="inline-block px-4 py-2 rounded-full border border-black/10 text-[11px] font-medium uppercase tracking-[0.2em] bg-white">
            {service.id}
          </span>
          <ArrowUpRight className="text-black/30" size={32} />
        </div>
        
        <div>
          <h3 className="text-4xl md:text-6xl font-serif text-black mb-6">
            {service.title}
          </h3>
          <p className="text-black/60 text-lg max-w-md leading-relaxed mb-8">
            {service.description}
          </p>
          <p className="text-2xl font-serif italic text-black">{service.price}</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative h-1/2 md:h-full overflow-hidden m-2 md:m-4 rounded-[2rem]">
        <img
          src={service.image}
          alt={service.title}
          decoding="async"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  );
}
