import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, MapPin, Instagram } from "lucide-react";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
  // Prevent body scroll while modal is open, without jumping the page
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[200]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] min-h-0 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b border-neutral-200/70 flex-shrink-0">
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-500 mb-1">
                    Contact
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif tracking-tight text-neutral-900">
                    Hair Connection
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                  aria-label="Close"
                  type="button"
                >
                  <X size={20} className="text-neutral-600" />
                </button>
              </div>

              {/* Content */}
              <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 space-y-6 sm:space-y-8 overflow-y-auto min-h-0 flex-1">
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  View all the ways to reach our Worli studio—call, email, or visit in person to
                  plan your next hair transformation.
                </p>

                <div className="space-y-6 text-sm md:text-base text-neutral-800">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-neutral-100">
                      <Mail size={18} className="text-neutral-700" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-neutral-500 mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:thehairconnection@gmail.com"
                        className="text-sm md:text-base text-neutral-900 hover:text-gold-shiny transition-colors break-all"
                      >
                        thehairconnection@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-neutral-100">
                      <Phone size={18} className="text-neutral-700" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-neutral-500 mb-1">
                        Phone
                      </p>
                      <div className="space-y-1">
                        <a
                          href="tel:+919152915721"
                          className="block text-sm md:text-base text-neutral-900 hover:text-gold-shiny transition-colors"
                        >
                          +91 91529 15721
                        </a>
                        <p className="text-xs text-neutral-500">
                          Alternative:{" "}
                          <a
                            href="tel:+919372499939"
                            className="text-neutral-800 hover:text-gold-shiny transition-colors"
                          >
                            +91 93724 99939
                          </a>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-neutral-100">
                      <MapPin size={18} className="text-neutral-700" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-neutral-500 mb-1">
                        Studio
                      </p>
                      <p className="text-sm md:text-base text-neutral-900 leading-relaxed">
                        CHS Ltd, Victoria Tower, shop no : 04 Sai Milan,
                        <br />
                        Ganpatrao Kadam Marg, Worli,
                        <br />
                        Mumbai, Maharashtra 400013
                      </p>
                    </div>
                  </motion.div>

                  {/* Instagram */}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.24 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-neutral-100">
                      <Instagram size={18} className="text-neutral-700" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-neutral-500 mb-1">
                        Instagram
                      </p>
                      <a
                        href="https://instagram.com/hairconnection"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm md:text-base text-neutral-900 hover:text-gold-shiny transition-colors"
                      >
                        @hairconnection
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 mt-2 border-t border-neutral-200/80"
                >
                  <a
                    href="mailto:thehairconnection@gmail.com"
                    className="block w-full text-center py-3.5 rounded-full bg-neutral-900 text-white text-xs md:text-sm font-medium uppercase tracking-[0.25em] hover:bg-neutral-800 transition-colors"
                  >
                    Email the studio
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


