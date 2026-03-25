import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      course: "Noorani Qaida",
      days: "5 Days",
      duration: "30 Mins",
      fee: "40 USD"
    },
    {
      course: "Nazira (Tajweed)",
      days: "5 Days",
      duration: "30 Mins",
      fee: "40 USD",
      featured: true
    },
    {
      course: "Hifz & Qiraat",
      days: "5 Days",
      duration: "90 Mins",
      fee: "150 USD"
    },
    {
      course: "Fehm ul Quran",
      days: "4 Days",
      duration: "40 Mins",
      fee: "35 USD"
    }
  ];

  const whatsappLink = "https://wa.me/923003673980?text=Hi, I am interested in starting a free Quran trial for ";

  return (
    <section id="pricing" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-islamic text-4xl md:text-5xl font-bold mb-4">
            Fee & <span className="text-gold-islamic">Schedule</span>
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Affordable and flexible plans designed to fit your schedule. Start your journey today with a 3-day free trial.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-2xl">
            <thead>
              <tr className="bg-emerald-islamic text-ivory">
                <th className="px-6 py-4 text-left">Course</th>
                <th className="px-6 py-4 text-center">Days / Week</th>
                <th className="px-6 py-4 text-center">Duration</th>
                <th className="px-6 py-4 text-center">Monthly Fee</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-100 hover:bg-emerald-50 transition-colors ${plan.featured ? 'bg-gold-islamic/5' : ''}`}
                >
                  <td className="px-6 py-6 font-bold text-emerald-islamic flex items-center">
                    {plan.course}
                    {plan.featured && <Star size={16} className="ml-2 text-gold-islamic fill-gold-islamic" />}
                  </td>
                  <td className="px-6 py-6 text-center text-charcoal">{plan.days}</td>
                  <td className="px-6 py-6 text-center text-charcoal">{plan.duration}</td>
                  <td className="px-6 py-6 text-center font-bold text-emerald-islamic">{plan.fee}</td>
                  <td className="px-6 py-6 text-center">
                    <a
                      href={`${whatsappLink}${plan.course}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-emerald-islamic text-ivory px-4 py-2 rounded-full text-sm font-bold hover:bg-gold-islamic transition-all"
                    >
                      Start Free Trial
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-emerald-islamic rounded-2xl p-8 text-center text-ivory relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              📢 Special Offer: 10% Discount for Siblings!
            </h3>
            <p className="text-ivory/80">
              Encourage your family to learn together and save on monthly fees.
            </p>
          </div>
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-islamic/10 rounded-full -mr-32 -mt-32"></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
