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
import BookingPopup from "./components/BookingPopup";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center px-4"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="overflow-hidden max-w-full min-w-0">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="font-serif font-bold tracking-tighter text-gold-shiny whitespace-nowrap text-[clamp(1.75rem,8vw,8rem)]"
              >
                HAIR CONNECTION
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <Marquee />
        <Philosophy />
        <Process onOpenBooking={() => setIsBookingOpen(true)} />
        <Services />
        <Products />
        <Team />
        <Collection />
        <StudioCreators onOpenBooking={() => setIsBookingOpen(true)} />
        <Testimonials />
        <CTA onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
