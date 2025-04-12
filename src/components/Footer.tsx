
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer absolute -top-6 left-1/2 transform -translate-x-1/2"
          >
            <div className="bg-secondary/80 p-3 rounded-full hover:bg-secondary transition-colors">
              <ArrowUp size={20} />
            </div>
          </Link>

          <div className="text-gradient text-2xl font-bold mb-4">NM</div>
          
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/maliknivodhit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nivodhit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:maliknivodhit@gmail.com" 
              className="p-2 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="mb-6 flex flex-wrap justify-center gap-4 text-sm">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
          
          <div className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Nivodhit. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
