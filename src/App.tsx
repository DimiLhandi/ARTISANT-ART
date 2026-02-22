/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Brush, 
  Hammer, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Atelier / Studio', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Réalisations', id: 'gallery' },
    { name: 'Devis', id: 'quote' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-primary/5">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-text-intense font-bold text-xl tracking-tighter">
          JEAN DUPONT
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="text-text-intense hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </button>
          ))}
          <button 
            onClick={() => onNavigate('quote')}
            className="bg-primary text-white px-6 py-2 rounded-[8px] hover:bg-accent transition-all"
          >
            Devis
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-text-intense" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-primary/5 px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsOpen(false);
                }}
                className="text-left text-text-intense text-lg"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                onNavigate('quote');
                setIsOpen(false);
              }}
              className="bg-primary text-white px-6 py-3 rounded-[8px] text-center"
            >
              Devis
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const name = "JEAN DUPONT";
  
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-bg-pale z-[100] flex flex-col items-center justify-center"
    >
      <div className="flex gap-2 mb-12">
        {name.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-text-intense text-5xl md:text-7xl font-bold tracking-tighter"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={onComplete}
        className="bg-primary text-white px-12 py-4 rounded-[8px] text-lg tracking-widest hover:bg-accent transition-all transform hover:scale-105"
      >
        ACCÉDER
      </motion.button>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-bg-pale px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-12"
      >
        <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center shadow-xl border border-primary/5">
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Brush size={64} className="text-primary" />
          </motion.div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-lg">
          <Sparkles size={20} />
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mb-6"
      >
        L’expression du savoir-faire.
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-text-intense/60 italic font-display"
      >
        Des créations uniques, façonnées avec passion.
      </motion.p>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <img 
            src="https://picsum.photos/seed/artisan/800/1000" 
            alt="Artisan at work" 
            className="rounded-[8px] shadow-2xl w-full object-cover aspect-[4/5]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[8px] shadow-xl hidden lg:block">
            <p className="text-primary font-bold text-4xl">10</p>
            <p className="text-text-intense/60 uppercase text-xs tracking-widest">Ans d'expérience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-text-intense">Votre Artisan d’Art</h2>
          <div className="space-y-6 text-lg text-text-intense/80 leading-relaxed">
            <p>
              Mon parcours est celui d'une quête perpétuelle de la beauté et de l'équilibre. 
              Chaque pièce qui sort de mon atelier est le fruit d'une sensibilité créative 
              nourrie par des années d'observation et de pratique.
            </p>
            <p>
              Je travaille sur mesure, en étroite collaboration avec mes clients, pour donner vie 
              à des visions uniques. Ma maîtrise technique s'allie à une attention portée aux 
              moindres détails et finitions, garantissant des œuvres d'une qualité exceptionnelle.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              "Créations uniques",
              "Approche personnalisée",
              "Engagement qualité",
              "Savoir-faire ancestral"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Création sur mesure",
      desc: "Des pièces uniques conçues spécifiquement pour votre espace et vos envies.",
      icon: <Palette size={32} />
    },
    {
      title: "Restauration d’œuvres",
      desc: "Redonner vie à vos trésors avec respect et fidélité aux techniques d'origine.",
      icon: <Hammer size={32} />
    },
    {
      title: "Conception artistique",
      desc: "Accompagnement créatif pour vos projets d'aménagement et de décoration.",
      icon: <Brush size={32} />
    },
    {
      title: "Commandes personnalisées",
      desc: "Réalisation de séries limitées ou de cadeaux d'exception sur demande.",
      icon: <Sparkles size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          Nos Services
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[8px] bg-bg-pale border border-primary/5 hover:shadow-xl transition-all group"
            >
              <div className="text-primary mb-6 group-hover:text-accent transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-intense">{s.title}</h3>
              <p className="text-text-intense/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://picsum.photos/seed/art1/800/800",
    "https://picsum.photos/seed/art2/800/800",
    "https://picsum.photos/seed/art3/800/800",
    "https://picsum.photos/seed/art4/800/800",
    "https://picsum.photos/seed/art5/800/800",
    "https://picsum.photos/seed/art6/800/800",
    "https://picsum.photos/seed/art7/800/800",
    "https://picsum.photos/seed/art8/800/800",
    "https://picsum.photos/seed/art9/800/800",
  ];

  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        Réalisations
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square overflow-hidden rounded-[8px] group cursor-pointer"
          >
            <img 
              src={img} 
              alt={`Work ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
                Voir le projet
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const QuoteForm = () => {
  return (
    <section id="quote" className="py-24 bg-bg-pale px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-16 rounded-[8px] shadow-2xl"
        >
          <h2 className="text-center mb-4">Demander un Devis</h2>
          <p className="text-center text-text-intense/60 mb-12">
            Gratuit, sans engagement. Réponse sous 24–48h.
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-text-intense/40">Nom & Prénom</label>
                <input type="text" className="w-full p-4 bg-bg-pale rounded-[8px] border-none focus:ring-2 focus:ring-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-text-intense/40">Email</label>
                <input type="email" className="w-full p-4 bg-bg-pale rounded-[8px] border-none focus:ring-2 focus:ring-accent outline-none transition-all" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-text-intense/40">Téléphone</label>
                <input type="tel" className="w-full p-4 bg-bg-pale rounded-[8px] border-none focus:ring-2 focus:ring-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-text-intense/40">Type de projet</label>
                <select className="w-full p-4 bg-bg-pale rounded-[8px] border-none focus:ring-2 focus:ring-accent outline-none transition-all appearance-none">
                  <option>Création sur mesure</option>
                  <option>Restauration</option>
                  <option>Conseil artistique</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-text-intense/40">Description du projet</label>
              <textarea rows={4} className="w-full p-4 bg-bg-pale rounded-[8px] border-none focus:ring-2 focus:ring-accent outline-none transition-all resize-none" />
            </div>
            
            <button className="w-full bg-primary text-white py-5 rounded-[8px] font-bold text-lg hover:bg-accent transition-all shadow-lg">
              Envoyer ma demande
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <h2 className="text-text-intense">Contactez-nous</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Atelier</h4>
                <p className="text-text-intense/60">12 Rue des Artisans, 75011 Paris</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Téléphone</h4>
                <p className="text-text-intense/60">01 23 45 67 89</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email</h4>
                <p className="text-text-intense/60">contact@jeandupont.art</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="h-[400px] bg-slate-200 rounded-[8px] overflow-hidden grayscale"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3746!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzIzLjgiTiAywrAyMicyOC42IkU!5e0!3m2!1sen!2sfr!4v1620000000000!5m2!1sen!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white py-16 px-6 border-t border-primary/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="text-text-intense font-bold text-2xl tracking-tighter">
          JEAN DUPONT
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-text-intense/40 hover:text-accent transition-colors"><Instagram size={24} /></a>
          <a href="#" className="text-text-intense/40 hover:text-accent transition-colors"><Facebook size={24} /></a>
          <a href="#" className="text-text-intense/40 hover:text-accent transition-colors"><Linkedin size={24} /></a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-text-intense/40">
          <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
          <span>© 2026 Jean Dupont. Tous droits réservés.</span>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-all shadow-lg"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar onNavigate={handleNavigate} />
          <main>
            <Hero />
            <About />
            <Services />
            <Gallery />
            <QuoteForm />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
