import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Collection from "./components/Collection";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
import Process from "./components/Process";
import Philosophy from "./components/Philosophy";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen text-black selection:bg-gold-400 selection:text-white">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="text-6xl md:text-9xl font-serif font-bold tracking-tighter text-black"
              >
                LUMIÈRE
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Process />
        <Services />
        <Products />
        <Collection />
        <Team />
        <Testimonials />
        
        {/* Booking CTA - Minimal Luxury */}
        <section id="book" className="py-32 bg-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-serif mb-8 text-black">
                Your Moment <br/> <span className="italic text-gold-500">Awaits</span>
              </h2>
              <p className="text-black/60 text-lg mb-12 leading-relaxed">
                Experience the art of hair in our sanctuary. <br/>
                Book your consultation today.
              </p>
              <button className="bg-black text-white px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors duration-300">
                Reserve Appointment
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
