
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [scrollY, setScrollY] = useState(0);
  const [patternClass, setPatternClass] = useState('bg-pattern');

  // Handle scroll events to update background pattern
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Change pattern based on scroll position with more frequent changes
      if (window.scrollY < 300) {
        setPatternClass('bg-pattern');
      } else if (window.scrollY < 800) {
        setPatternClass('bg-pattern-2');
      } else if (window.scrollY < 1400) {
        setPatternClass('bg-pattern-3');
      } else if (window.scrollY < 2000) {
        setPatternClass('bg-pattern');
      } else if (window.scrollY < 2600) {
        setPatternClass('bg-pattern-2');
      } else {
        setPatternClass('bg-pattern-3');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore and reach out if you have any questions.",
      });
    }, 1500);
  }, [toast]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen bg-black ${patternClass} text-foreground overflow-x-hidden`}
      style={{ 
        backgroundPosition: `${scrollY * 0.15}px ${scrollY * 0.15}px`
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default Index;
