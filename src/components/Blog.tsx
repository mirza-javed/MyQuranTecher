import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "The Importance of Tajweed",
      excerpt: "Discover why proper pronunciation is crucial for understanding the true meaning of the Quranic verses.",
      image: "https://picsum.photos/seed/quran/800/600",
      date: "March 10, 2024"
    },
    {
      title: "Tips for Quran Memorization",
      excerpt: "Effective techniques and spiritual habits to help you or your child memorize the Holy Quran efficiently.",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 05, 2024"
    },
    {
      title: "Benefits of Daily Recitation",
      excerpt: "How spending just 15 minutes a day with the Quran can transform your mental peace and spiritual life.",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "February 28, 2024"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-islamic text-4xl md:text-5xl font-bold mb-4">
            Our Latest <span className="text-gold-islamic">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gold-islamic mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all"
            >
              <div className="relative h-56 overflow-hidden bg-emerald-100">
                <img 
                  key={post.image}
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-gold-islamic text-emerald-islamic px-3 py-1 rounded-full text-xs font-bold">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-emerald-islamic text-xl font-bold mb-3 group-hover:text-gold-islamic transition-colors">
                  {post.title}
                </h3>
                <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center text-emerald-islamic font-bold hover:text-gold-islamic transition-colors">
                  Read More <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
