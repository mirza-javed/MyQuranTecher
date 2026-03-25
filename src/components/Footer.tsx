import React from 'react';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-islamic text-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-4 mb-6 group">
              <img 
                src="/logo.png" 
                alt="My Quran Educator Logo" 
                className="h-14 w-14 rounded-full border-2 border-gold-islamic bg-white p-1 shadow-lg transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold font-display leading-tight">
                  My Quran <span className="text-gold-islamic">Educator</span>
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-islamic/80 font-medium">
                  Online Academy
                </span>
              </div>
            </div>
            <p className="text-ivory/70 leading-relaxed mb-6">
              Empowering souls through the divine wisdom of the Holy Quran. Join our global community of learners today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-ivory/10 p-2 rounded-full hover:bg-gold-islamic hover:text-emerald-islamic transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-ivory/10 p-2 rounded-full hover:bg-gold-islamic hover:text-emerald-islamic transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-ivory/10 p-2 rounded-full hover:bg-gold-islamic hover:text-emerald-islamic transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-ivory/10 p-2 rounded-full hover:bg-gold-islamic hover:text-emerald-islamic transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.42a7.27 7.27 0 0 0-1-.07 6.33 6.33 0 0 0-6.33 6.33 6.33 6.33 0 0 0 6.33 6.33 6.33 6.33 0 0 0 6.33-6.33V6.69a4.83 4.83 0 0 1 3.77 4.25V7.49a4.83 4.83 0 0 1-.22-.8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-islamic">Quick Links</h4>
            <ul className="space-y-4 text-ivory/70">
              <li><a href="#home" className="hover:text-gold-islamic transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-islamic transition-colors">About Us</a></li>
              <li><a href="#classes" className="hover:text-gold-islamic transition-colors">Our Classes</a></li>
              <li><a href="#pricing" className="hover:text-gold-islamic transition-colors">Fee</a></li>
              <li><a href="#" className="hover:text-gold-islamic transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-islamic">Our Courses</h4>
            <ul className="space-y-4 text-ivory/70">
              <li>Noorani Qaida</li>
              <li>Nazira with Tajweed</li>
              <li>Hifz & Qiraat</li>
              <li>Fehm ul Quran</li>
              <li>Arabic Language</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-islamic">Contact Info</h4>
            <ul className="space-y-4 text-ivory/70">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-islamic" />
                <span>myquraneducator@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-islamic" />
                <span>+92 300 3673980</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-gold-islamic" />
                <span>Online Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 text-center text-ivory/50 text-sm">
          <p>© 2024 My Quran Educator. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
