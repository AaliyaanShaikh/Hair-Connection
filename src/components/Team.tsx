import { motion } from "motion/react";

const team = [
  {
    name: "Elena V.",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
  },
  {
    name: "Julian R.",
    role: "Master Colorist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
  },
  {
    name: "Sarah K.",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop",
  },
  {
    name: "Marc D.",
    role: "Barber Specialist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
  },
];

export default function Team() {
  return (
    <section id="atelier" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-black mb-4">The Atelier</h2>
          <p className="text-black/60 max-w-xl mx-auto">
            Our team of artisans is dedicated to the craft of hair, bringing international experience and passion to every appointment.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif text-black mb-1">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-gold-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
