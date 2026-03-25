import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, Phone, BookOpen } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    email: '',
    whatsappNo: '',
    interestedClass: 'Noorani Qaida'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Student Name: ${formData.studentName}%0A` +
                    `Father Name: ${formData.fatherName}%0A` +
                    `Email: ${formData.email}%0A` +
                    `WhatsApp: ${formData.whatsappNo}%0A` +
                    `Interested Class: ${formData.interestedClass}`;
    
    window.open(`https://wa.me/923003673980?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-islamic rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 p-12 bg-gold-islamic text-emerald-islamic flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg mb-8 opacity-90">
              Fill out the form and our team will contact you within 24 hours to schedule your free demo class.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-islamic text-ivory p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-lg">myquraneducator@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-islamic text-ivory p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-lg">+92 300 3673980</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-8 md:p-12 bg-ivory">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-bold text-emerald-islamic mb-2">Student Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-islamic/50" size={20} />
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Enter student name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-emerald-100 focus:border-gold-islamic focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-bold text-emerald-islamic mb-2">Father Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-islamic/50" size={20} />
                    <input
                      type="text"
                      name="fatherName"
                      required
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="Enter father name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-emerald-100 focus:border-gold-islamic focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-bold text-emerald-islamic mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-islamic/50" size={20} />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-emerald-100 focus:border-gold-islamic focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-bold text-emerald-islamic mb-2">WhatsApp Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-islamic/50" size={20} />
                    <input
                      type="text"
                      name="whatsappNo"
                      required
                      value={formData.whatsappNo}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-emerald-100 focus:border-gold-islamic focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-bold text-emerald-islamic mb-2">Interested Class</label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-islamic/50" size={20} />
                  <select
                    name="interestedClass"
                    value={formData.interestedClass}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-emerald-100 focus:border-gold-islamic focus:outline-none transition-colors appearance-none bg-white"
                  >
                    <option>Noorani Qaida</option>
                    <option>Nazira with Tajweed</option>
                    <option>Hifz & Qiraat</option>
                    <option>Fehm ul Quran</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-emerald-islamic text-ivory py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-gold-islamic hover:text-emerald-islamic transition-all flex items-center justify-center space-x-2"
              >
                <span>Submit & Book Demo</span>
                <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
