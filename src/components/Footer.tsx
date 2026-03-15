import { MapPin, Phone, Mail, Instagram } from "lucide-react";

interface FooterProps {
  onOpenBooking?: () => void;
}

const links = {
  explore: [
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Experience", href: "#collection" },
    { label: "Reviews", href: "#reviews" },
    { label: "Book", href: "#book" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer id="contact" className="bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        {/* Main footer content */}
        <div className="py-20 md:py-24 border-b border-neutral-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12">
            {/* Brand + tagline full width */}
            <div className="md:col-span-12">
              <a
                href="#"
                className="text-2xl font-serif tracking-tight text-gold-shiny hover:opacity-80 transition-opacity"
              >
                Hair Connection
              </a>
              <p className="mt-6 text-neutral-500 text-sm leading-relaxed">
                Redefining luxury haircare with a commitment to excellence,
                sustainability, and personalized style.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-gold-shiny hover:opacity-80 text-sm transition-opacity"
              >
                <Instagram size={16} />
                <span>@hairconnection</span>
              </a>
            </div>

            {/* Explore and Contact side by side — on mobile first column auto so they sit close */}
            <div className="grid grid-cols-[auto_1fr] md:grid-cols-12 gap-x-6 gap-y-10 md:gap-12 md:col-span-12">
              <div className="min-w-0 md:col-span-2">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase mb-6 text-gold-shiny">
                  Explore
                </p>
                <ul className="space-y-4">
                  {links.explore.map((link) => {
                    const isBook = link.label === "Book";
                    if (isBook) {
                      return (
                        <li key={link.label}>
                          <button
                            type="button"
                            onClick={() => onOpenBooking?.()}
                            className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors text-left"
                          >
                            {link.label}
                          </button>
                        </li>
                      );
                    }
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="md:col-span-10">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase mb-6 text-gold-shiny">
                  Contact
                </p>
                <ul className="space-y-4 text-sm text-neutral-600">
                  <li className="flex items-start gap-3 min-w-0">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0 text-neutral-400" />
                    <span className="break-words">
                      CHS Ltd, Victoria Tower, shop no : 04 Sai Milan, Ganpatrao Kadam Marg, Worli,
                      Mumbai, Maharashtra 400013
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={16} className="flex-shrink-0 text-neutral-400" />
                    <a href="tel:+919152915721" className="hover:text-neutral-900 transition-colors">
                      +91 91529 15721
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={16} className="flex-shrink-0 text-neutral-400" />
                    <a href="mailto:thehairconnection@gmail.com" className="hover:text-neutral-900 transition-colors">
                      thehairconnection06@gmail.com
                    </a>
                  </li>
                </ul>
                <div className="mt-8 text-xs text-neutral-500">
                  <p className="font-medium text-neutral-600 mb-2">Hours</p>
                  <p>Mon – Fri 9:00 AM – 8:00 PM</p>
                  <p>Saturday 10:00 AM – 6:00 PM</p>
                  <p>Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 flex-wrap">
          <p className="text-neutral-500 text-xs max-w-full break-words">
            © {new Date().getFullYear()} <span className="text-gold-shiny">Hair Connection.</span> <span className="text-black">ALL RIGHTS RESERVED. DESIGNED BY EZOR.</span>
          </p>
          <div className="flex gap-8">
            {links.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-500 hover:text-neutral-900 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
