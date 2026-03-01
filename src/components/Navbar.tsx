import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Experience", href: "#collection" },
  { name: "Reviews", href: "#reviews" },
  { name: "Book", href: "#book" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
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
        className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 bg-white/95 backdrop-blur-sm border-b border-neutral-100"
      >
        <div className="flex justify-between items-center max-w-[1920px] mx-auto">
          <a href="#" className="text-xl font-serif font-bold tracking-[0.2em] uppercase text-gold-shiny">
            Hair Connection
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-700 hover:text-gold-shiny transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-900"
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
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-4xl font-serif text-black hover:text-gold-shiny transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
