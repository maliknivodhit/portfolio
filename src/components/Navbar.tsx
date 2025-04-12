
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine which section is in view
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <div className="flex items-center">
            <div className="font-bold text-2xl mr-2 text-gradient">
              NM
            </div>
            <span className="hidden sm:block text-lg font-medium">
              Nivodhit
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary cursor-pointer relative px-2 py-1.5",
                activeSection === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
              {activeSection === item.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-lg p-4 space-y-4">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={cn(
                "block py-2 px-4 text-base font-medium hover:bg-secondary/30 rounded-md transition-colors",
                activeSection === item.href ? "text-primary" : "text-muted-foreground"
              )}
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
