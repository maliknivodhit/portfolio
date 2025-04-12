
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const sentenceRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('.section-p');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95"></div>
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-neon-purple/10 to-neon-blue/5 blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-tr from-neon-purple/10 to-neon-blue/5 blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm sm:text-base font-medium text-primary/80"
          >
            Welcome to my portfolio
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span>Hi, I'm </span>
            <span className="text-gradient">Nivodhit</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mb-8 text-lg md:text-xl text-muted-foreground"
          >
            <div className="typing-container w-full sm:w-auto">
              Aspiring Data Analyst & Tech Enthusiast
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg text-background font-medium neon-glow transition-all duration-300 hover:shadow-lg"
              >
                View My Work
              </motion.button>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-transparent neon-border rounded-lg text-foreground font-medium transition-all duration-300 hover:bg-primary/10"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="p-2 rounded-full border border-foreground/20 bg-background/50 hover:bg-background"
            >
              <ArrowDown size={20} className="text-primary" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
