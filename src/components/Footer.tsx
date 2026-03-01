import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-neutral-100 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="text-3xl font-serif font-bold tracking-widest text-black">
              LUMIÈRE
            </a>
            <p className="text-black/60 leading-relaxed">
              Redefining luxury haircare with a commitment to excellence, sustainability, and personalized style.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-gold-400 hover:border-gold-400 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-black">Contact</h4>
            <ul className="space-y-4 text-black/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gold-400" />
                <span>123 Fashion Avenue,<br />New York, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-400" />
                <span>+1 (212) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-400" />
                <span>concierge@lumiere.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-black">Hours</h4>
            <ul className="space-y-2 text-black/70">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-black">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-black">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gold-400">Closed</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-black">Newsletter</h4>
            <p className="text-black/50 mb-4 text-sm">Subscribe for exclusive offers and style trends.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-neutral-50 border border-neutral-200 px-4 py-3 text-black focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button className="bg-black text-white px-4 py-3 font-medium uppercase tracking-wider hover:bg-gold-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black/40">
          <p>&copy; 2024 Lumière Salon. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
