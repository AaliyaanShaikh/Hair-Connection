import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onOpenBooking?: () => void;
  alwaysVisible?: boolean; // used on legal pages
}

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Experience", href: "#collection" },
  { name: "Reviews", href: "#reviews" },
  { name: "Book", href: "#book" },
];

export default function Navbar({ onOpenBooking, alwaysVisible }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const isLegalPage =
    typeof window !== "undefined" &&
    (window.location.pathname === "/privacy" || window.location.pathname === "/terms");

  const forceSolid = alwaysVisible || isLegalPage;
  const [scrolled, setScrolled] = useState(forceSolid);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const nextHidden = alwaysVisible ? false : latest > previous && latest > 150;
    const nextScrolled = forceSolid ? true : latest > 40;

    setHidden((prevHidden) => (prevHidden === nextHidden ? prevHidden : nextHidden));
    setScrolled((prevScrolled) => (prevScrolled === nextScrolled ? prevScrolled : nextScrolled));
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={[
          "fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 px-6 md:px-12 border-b transition-colors duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-neutral-100"
            : "bg-transparent backdrop-blur-0 border-transparent",
        ].join(" ")}
      >
        <div className="flex justify-between items-center max-w-[1920px] mx-auto min-w-0">
          <a
            href="/"
            className={[
              "text-base sm:text-lg md:text-xl font-serif font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-colors duration-300 truncate",
              scrolled ? "text-gold-shiny" : "text-white drop-shadow-sm",
            ].join(" ")}
          >
            Hair Connection
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => {
              const isBook = item.name === "Book";
              const targetHref = isLegalPage
                ? `/#${item.href.replace("#", "")}`
                : item.href;
              if (isBook) {
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => onOpenBooking?.()}
                    className={[
                      "text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                      scrolled ? "text-neutral-700 hover:text-gold-shiny" : "text-white/90 hover:text-white",
                    ].join(" ")}
                  >
                    {item.name}
                  </button>
                );
              }
              return (
                <a
                  key={item.name}
                  href={targetHref}
                  className={[
                    "text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                    scrolled ? "text-neutral-700 hover:text-gold-shiny" : "text-white/90 hover:text-white",
                  ].join(" ")}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={["md:hidden transition-colors duration-300", scrolled ? "text-neutral-900" : "text-white"].join(" ")}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-black"
        >
          <X size={32} />
        </button>
        
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => {
              const isBook = item.name === "Book";
              const targetHref = isLegalPage
                ? `/#${item.href.replace("#", "")}`
                : item.href;
              if (isBook) {
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenBooking?.();
                    }}
                    className="text-4xl font-serif text-black hover:text-gold-shiny transition-colors"
                  >
                    {item.name}
                  </button>
                );
              }
              return (
                <a
                  key={item.name}
                  href={targetHref}
                  className="text-4xl font-serif text-black hover:text-gold-shiny transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
      </motion.div>
    </>
  );
}
