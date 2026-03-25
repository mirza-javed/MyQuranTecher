import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';

function App() {
  return (
    <div className="min-h-screen bg-ivory selection:bg-gold-islamic selection:text-emerald-islamic">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Pricing />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

export default App;
