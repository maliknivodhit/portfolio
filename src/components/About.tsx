
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
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
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-neon-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-p">About <span className="text-gradient">Me</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full section-p"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground section-p">
              Hello! I'm <span className="text-foreground font-medium">Nivodhit</span>, a second-year BCA student at Chandigarh University with a graduation date of 2026. I'm passionate about data analytics, technology, and building solutions that make an impact.
            </p>
            
            <p className="text-lg text-muted-foreground section-p">
              As an aspiring Data Analyst, I'm focused on developing my skills in data processing, visualization, and extracting meaningful insights. My education is providing me with a strong foundation in computer applications while I pursue additional learning in specialized analytics tools and programming languages.
            </p>
            
            <p className="text-lg text-muted-foreground section-p">
              Beyond the world of data and code, I have a keen interest in fitness and maintaining a healthy lifestyle. I believe in a balanced approach to life and work, which fuels my creativity and problem-solving abilities.
            </p>
            
            <p className="text-lg text-muted-foreground section-p">
              I'm eager to explore international opportunities that will expose me to diverse perspectives and challenges in the tech industry. My goal is to continuously grow as a professional while contributing to meaningful projects.
            </p>
          </div>
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 space-y-5"
            >
              <h3 className="text-2xl font-bold text-gradient">Quick Info</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm uppercase text-muted-foreground font-medium mb-1">Education</h4>
                  <p className="font-medium">BCA @ Chandigarh University</p>
                  <p className="text-sm text-muted-foreground">2023 - 2026</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-muted-foreground font-medium mb-1">Career Focus</h4>
                  <p className="font-medium">Data Analytics</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-muted-foreground font-medium mb-1">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary/50 rounded-full text-sm">Data Analysis</span>
                    <span className="px-3 py-1 bg-secondary/50 rounded-full text-sm">Business Problem Solving</span>
                    <span className="px-3 py-1 bg-secondary/50 rounded-full text-sm">Data Visualization</span>
                    <span className="px-3 py-1 bg-secondary/50 rounded-full text-sm">Market Research</span>
                    <span className="px-3 py-1 bg-secondary/50 rounded-full text-sm">Strategic Consulting</span>
                    <span className="px-3 py-1 bg-secondary/50 rounded-full text-sm">Continuous Learning</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
