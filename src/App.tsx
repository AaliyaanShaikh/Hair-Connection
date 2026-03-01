import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Collection from "./components/Collection";
import Team from "./components/Team";
import StudioCreators from "./components/StudioCreators";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
import Process from "./components/Process";
import Philosophy from "./components/Philosophy";
import CTA from "./components/CTA";
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
    <div className="bg-white min-h-screen text-black selection-gold-shiny">
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
                HAIR CONNECTION
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
        <Team />
        <Collection />
        <StudioCreators />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
