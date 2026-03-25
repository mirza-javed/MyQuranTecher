import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Mic2, Heart, GraduationCap } from 'lucide-react';

const Classes = () => {
  const classes = [
    {
      title: "Noorani Qaida",
      description: "The foundation course for beginners. Learn Arabic alphabets, Makhraj (pronunciation), and basic rules of Tajweed.",
      icon: <BookOpen className="text-gold-islamic" size={40} />,
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Nazira with Tajweed",
      description: "Fluent recitation of the Holy Quran with strict adherence to the rules of Tajweed for a beautiful and correct reading.",
      icon: <Mic2 className="text-gold-islamic" size={40} />,
      image: "https://images.unsplash.com/photo-1591016831300-9801556fdfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Hifz & Qiraat",
      description: "Memorize the Quran by heart with advanced Tajweed and rhythmic styles (Maqamat) under the guidance of Hafiz instructors.",
      icon: <Heart className="text-gold-islamic" size={40} />,
      image: "https://images.unsplash.com/photo-1597933534024-164906a3809d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Fehm ul Quran",
      description: "Go beyond reading. Understand the meaning, translation, and context of the verses to apply Quranic wisdom to daily life.",
      icon: <GraduationCap className="text-gold-islamic" size={40} />,
      image: "https://images.unsplash.com/photo-1584281723358-461f7555806e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="classes" className="py-20 bg-emerald-islamic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-ivory text-4xl md:text-5xl font-bold mb-4">
            Our Specialized <span className="text-gold-islamic">Classes</span>
          </h2>
          <div className="w-24 h-1 bg-gold-islamic mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-ivory rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-islamic/20 group-hover:bg-emerald-islamic/0 transition-colors"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">{cls.icon}</div>
                <h3 className="text-emerald-islamic text-xl font-bold mb-3">{cls.title}</h3>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  {cls.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
