import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Facebook, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '../constants';

const navLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'خدماتنا', path: '/services' },
  { name: 'أعمالنا', path: '/portfolio' },
  { name: 'عن روفانا', path: '/about' },
  { name: 'المدونة', path: '/blog' },
  { name: 'تواصل معنا', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-2xl font-serif font-bold gold-text tracking-widest">ROVANA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  location.pathname === link.path ? 'text-gold' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href={CONTACT_INFO.youtube} target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold transition-colors">
              <Youtube size={18} />
            </a>
            <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noreferrer" className="bg-gold text-luxury-black px-4 py-2 rounded-full text-xs font-bold hover:bg-white transition-colors flex items-center gap-2">
              <Phone size={14} />
              طلب استشارة
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-luxury-gray border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium border-b border-white/5 last:border-0 ${
                    location.pathname === link.path ? 'text-gold' : 'text-white/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex justify-center space-x-6 rtl:space-x-reverse">
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold">
                  <Instagram size={24} />
                </a>
                <a href={CONTACT_INFO.youtube} target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
