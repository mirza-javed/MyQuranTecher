import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  const whatsappLink = "https://wa.me/923003673980?text=Hi, I am interested in a 3-day free Quran demo class.";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent h-40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold-islamic text-3xl md:text-5xl mb-6 font-arabic leading-relaxed">
            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
          </h2>
          <h1 className="text-ivory text-4xl md:text-7xl font-bold font-display mb-6 leading-tight drop-shadow-2xl">
            Illuminate Your Soul with the <span className="text-gold-islamic">Divine Light</span> of the Quran
          </h1>
          <p className="text-ivory/90 text-lg md:text-2xl mb-10 max-w-3xl mx-auto font-light">
            Expert Online Quran Tutoring for Kids and Adults. Start your journey from basic Qaida to advanced Hifz with certified educators.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-islamic text-emerald-islamic px-10 py-4 rounded-full text-xl font-bold hover:bg-ivory transition-all transform hover:scale-105 shadow-xl"
            >
              3 Days Free Trial
            </a>
            <a
              href="tel:+923003673980"
              className="border-2 border-ivory text-ivory px-10 py-4 rounded-full text-xl font-bold hover:bg-ivory hover:text-emerald-islamic transition-all transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-ivory/50"
      >
        <div className="w-6 h-10 border-2 border-ivory/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-ivory/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
