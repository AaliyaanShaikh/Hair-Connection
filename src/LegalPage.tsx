import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingPopup from "./components/BookingPopup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

interface LegalPageProps {
  page: "privacy" | "terms";
}

export default function LegalPage({ page }: LegalPageProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const content = page === "privacy" ? <PrivacyPolicy /> : <TermsOfService />;

  return (
    <div className="bg-white min-h-screen text-black selection-gold-shiny">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} alwaysVisible />

      <main>{content}</main>

      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

