import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    "Highly Qualified Teachers",
    "Experts in Qirat & Tajweed",
    "Personalized Attention",
    "Flexible Scheduling",
    "Nurturing Environment",
    "Global Accessibility"
  ];

  return (
    <section id="about" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-row lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-emerald-islamic text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gold-islamic">My Quran Educator?</span>
            </h2>
            <p className="text-charcoal text-lg mb-8 leading-relaxed">
              We provide a nurturing environment for students worldwide. Our academy features highly qualified teachers, experts in Qirat and Tajweed, dedicated to providing personalized attention. Whether you are a beginner or looking to perfect your recitation, our flexible scheduling makes learning easy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-gold-islamic" size={24} />
                  <span className="text-charcoal font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-islamic/20">
              <img 
                src="https://images.unsplash.com/photo-1597933534024-164906a3809d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Quran Reading" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-islamic/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-islamic/10 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
