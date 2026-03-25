import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Fee', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappLink = "https://wa.me/923003673980?text=Hi, I am interested in a 3-day free Quran demo class.";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-emerald-islamic shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <a href="#home" className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gold-islamic/30 rounded-full blur-sm group-hover:bg-gold-islamic/50 transition-all"></div>
                <img 
                  src="/logo.png" 
                  alt="My Quran Educator Logo" 
                  className="relative h-16 w-16 object-contain rounded-full border-2 border-gold-islamic bg-white p-1 shadow-xl transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-xl font-bold font-display text-ivory">
                  MQE
                </span>
              </div>
            </a>
          </div>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-ivory hover:text-gold-islamic transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side - Button */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-islamic text-emerald-islamic px-6 py-2 rounded-full font-bold hover:bg-ivory transition-all transform hover:scale-105"
            >
              Book Free Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ivory hover:text-gold-islamic"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-islamic border-t border-emerald-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-ivory hover:text-gold-islamic font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gold-islamic text-emerald-islamic px-6 py-3 rounded-md font-bold mt-4"
            >
              Book Free Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
