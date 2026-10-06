import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const PHONE_DISPLAY = "+91 91529 15721";
const PHONE_TEL = "+919152915721";
const ALT_PHONE_DISPLAY = "+91 93724 99939";
const ALT_PHONE_TEL = "+919372499939";
const EMAIL = "thehairconnection@gmail.com";
const INSTAGRAM = "https://instagram.com/thehairconnection.salon";
const MAIN_SITE = "https://www.thehairconnection.in";

const ADDRESS_LINES = [
  "CHS Ltd, Victoria Tower, shop no : 04 Sai Milan",
  "Ganpatrao Kadam Marg, Worli",
  "Mumbai, Maharashtra 400013",
];
const ADDRESS = ADDRESS_LINES.join(", ");
const MAP_QUERY = encodeURIComponent(ADDRESS);
const GOOGLE_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;
const APPLE_DIRECTIONS = `https://maps.apple.com/?daddr=${MAP_QUERY}`;
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;
const WHATSAPP = `https://wa.me/919152915721?text=${encodeURIComponent(
  "Hello Hair Connection, I would like to get in touch."
)}`;

function isAppleDevice() {
  const ua = navigator.userAgent;
  const iOS = /iPad|iPhone|iPod/.test(ua);
  const iPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return iOS || iPadOS;
}

export default function ContactPage() {
  const [directionsUrl, setDirectionsUrl] = useState(GOOGLE_DIRECTIONS);
  const [directionsLabel, setDirectionsLabel] = useState("Get directions");

  useEffect(() => {
    document.title = "Contact | Hair Connection";
    if (isAppleDevice()) {
      setDirectionsUrl(APPLE_DIRECTIONS);
      setDirectionsLabel("Get directions in Apple Maps");
    } else {
      setDirectionsUrl(GOOGLE_DIRECTIONS);
      setDirectionsLabel("Get directions in Google Maps");
    }
  }, []);

  return (
    <div className="min-h-[100dvh] bg-neutral-950 text-white">
      <main className="mx-auto flex min-h-[100dvh] w-full max-w-lg flex-col px-6 py-10 md:py-16">
        <header className="flex flex-col items-center text-center">
          <img
            src="/cropped_circle_image-3.png"
            alt="Hair Connection"
            className="h-24 w-24 rounded-full object-cover shadow-[0_0_40px_rgba(232,185,35,0.35)]"
          />
          <p className="mt-6 text-[11px] font-medium tracking-[0.28em] uppercase text-gold-shiny">
            Worli, Mumbai
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight">Hair Connection</h1>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-400">
            Scan brought you here. Call, message, or visit the studio.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 text-neutral-900"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100">
              <Phone size={18} />
            </span>
            <span>
              <span className="block text-[10px] font-medium tracking-[0.22em] uppercase text-neutral-500">
                Call
              </span>
              <span className="mt-0.5 block text-base font-medium">{PHONE_DISPLAY}</span>
            </span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
              <Mail size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-medium tracking-[0.22em] uppercase text-neutral-400">
                Email
              </span>
              <span className="mt-0.5 block truncate text-base">{EMAIL}</span>
            </span>
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-[#25D366] px-5 py-4 text-neutral-950"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/25">
              <WhatsAppIcon />
            </span>
            <span>
              <span className="block text-[10px] font-medium tracking-[0.22em] uppercase text-neutral-900/70">
                WhatsApp
              </span>
              <span className="mt-0.5 block text-base font-medium">Chat with us</span>
            </span>
          </a>
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold-shiny">
            Also reach us
          </p>
          <a href={`tel:${ALT_PHONE_TEL}`} className="mt-3 flex items-center gap-3 text-sm text-neutral-200">
            <Phone size={16} className="text-neutral-400" />
            {ALT_PHONE_DISPLAY}
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-sm text-neutral-200"
          >
            Instagram · @thehairconnection.salon
          </a>
          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="flex items-center gap-2 text-[10px] font-medium tracking-[0.22em] uppercase text-neutral-400">
              <Clock size={14} />
              Hours
            </p>
            <ul className="mt-3 space-y-1 text-sm text-neutral-300">
              <li>Mon – Fri · 9:00 AM – 8:00 PM</li>
              <li>Saturday · 10:00 AM – 6:00 PM</li>
              <li>Sunday · Closed</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <p className="flex items-center gap-2 text-[10px] font-medium tracking-[0.22em] uppercase text-gold-shiny">
            <MapPin size={14} />
            Studio
          </p>
          <address className="mt-3 not-italic text-base leading-relaxed text-neutral-200">
            {ADDRESS_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Hair Connection on the map"
              src={MAP_EMBED}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-full bg-gold-shiny px-6 py-4 text-sm font-medium tracking-[0.18em] uppercase text-neutral-950"
          >
            {directionsLabel}
          </a>
        </section>

        <footer className="mt-auto pt-10 text-center">
          <a href={MAIN_SITE} className="text-sm text-neutral-400 underline-offset-4 hover:text-white">
            thehairconnection.in
          </a>
        </footer>
      </main>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4.1 15 15 0 0 0 3.1 1.1 2.6 2.6 0 0 0 2.3-.8 2.1 2.1 0 0 0 .5-1.5c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
