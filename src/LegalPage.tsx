import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingPopup from "./components/BookingPopup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import { ScrollContainerContext } from "./contexts/ScrollContainerContext";

interface LegalPageProps {
  page: "privacy" | "terms";
}

export default function LegalPage({ page }: LegalPageProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const content = page === "privacy" ? <PrivacyPolicy /> : <TermsOfService />;

  return (
    <ScrollContainerContext.Provider value={scrollContainerRef}>
      <div className="bg-white h-screen overflow-hidden text-black selection-gold-shiny">
        <div className="noise-overlay" />

        <Navbar onOpenBooking={() => setIsBookingOpen(true)} alwaysVisible />

        <div ref={scrollContainerRef} className="scroll-container">
          <main>{content}</main>

          <Footer onOpenBooking={() => setIsBookingOpen(true)} />
        </div>

        <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </ScrollContainerContext.Provider>
  );
}

