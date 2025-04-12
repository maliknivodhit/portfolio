import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LineChart, PieChart, School } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

const Skills = () => {
  // Technical skills with icons
  const technicalSkills = [
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'Excel', level: 85 },
    { name: 'Power BI', level: 70 },
    { name: 'Data Visualization', level: 75 },
    { name: 'Statistical Analysis', level: 65 }
  ];

  // Certifications
  const certifications = [
    {
      name: 'Data Analyst Roadmap Certificate',
      issuer: 'DataCamp',
      date: '2025',
      description: 'Comprehensive training in data analysis fundamentals, SQL, Python, and visualization techniques.'
    },
    {
      name: 'Data Analyst Virtual Experience',
      issuer: 'Deloitte',
      date: '2025',
      description: 'Hands-on experience with real-world data analysis challenges and business intelligence solutions.'
    },
    {
      name: 'Excel & Power BI for Data Analysis',
      issuer: 'Microsoft',
      date: '2025',
      description: 'Advanced techniques for data manipulation, analysis and visualization using Microsoft tools.'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-1/4 h-1/4 bg-neon-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-p">My <span className="text-gradient">Skills</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full section-p"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center mb-6">
              <Code2 className="text-neon-purple mr-3" size={24} />
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="glass-card border-neon-purple/30 w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gradient">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {skill.name === 'Python' && 'Proficient in data manipulation, analysis and visualization using NumPy, Pandas and Matplotlib.'}
                        {skill.name === 'SQL' && 'Experience with complex queries, data extraction, and database management for analytical purposes.'}
                        {skill.name === 'Excel' && 'Expert in spreadsheet modeling, data analysis, pivot tables and advanced formulas for business analytics.'}
                        {skill.name === 'Power BI' && 'Skilled in creating interactive dashboards and reports for business intelligence and data visualization.'}
                        {skill.name === 'Data Visualization' && 'Ability to transform complex data into clear, compelling visual stories that drive insights.'}
                        {skill.name === 'Statistical Analysis' && 'Knowledge of statistical methods, hypothesis testing and regression analysis for data-driven decision making.'}
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center mb-6">
              <LineChart className="text-neon-purple mr-3" size={24} />
              <h3 className="text-2xl font-bold">Analytics Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/40 transition-colors">
                <PieChart className="text-neon-purple mb-2" size={24} />
                <h4 className="font-semibold mb-1">Data Analysis</h4>
                <p className="text-sm text-muted-foreground">Experience in extracting insights from complex datasets using statistical methods.</p>
              </div>
              
              <div className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/40 transition-colors">
                <Database className="text-neon-purple mb-2" size={24} />
                <h4 className="font-semibold mb-1">Data Management</h4>
                <p className="text-sm text-muted-foreground">Skilled in organizing, cleaning and processing data for analytical purposes.</p>
              </div>
              
              <div className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/40 transition-colors">
                <LineChart className="text-neon-purple mb-2" size={24} />
                <h4 className="font-semibold mb-1">Business Intelligence</h4>
                <p className="text-sm text-muted-foreground">Ability to translate data into strategic insights for business decision-making.</p>
              </div>
              
              <div className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/40 transition-colors">
                <PieChart className="text-neon-purple mb-2" size={24} />
                <h4 className="font-semibold mb-1">Predictive Modeling</h4>
                <p className="text-sm text-muted-foreground">Experience with forecasting and statistical modeling techniques.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center justify-center mb-10">
            <School className="text-neon-purple mr-3" size={24} />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="certification-card hover:neon-glow transition-all duration-300"
              >
                <h4 className="font-bold mb-2">{cert.name}</h4>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-primary">{cert.issuer}</span>
                  <span className="text-muted-foreground">{cert.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
