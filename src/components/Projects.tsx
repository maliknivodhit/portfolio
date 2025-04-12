import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { Project } from '@/types/project';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard built with modern web technologies to visualize complex datasets. Features include filterable charts and downloadable reports.",
      longDescription: "This comprehensive dashboard solution transforms complex data into actionable insights through interactive visualizations. Built with React and D3.js, it features dynamic filtering, customizable views, and export capabilities. Users can analyze trends, compare metrics, and generate detailed reports with just a few clicks. The responsive design ensures accessibility across all devices, making data-driven decision making easier than ever.",
      tags: ["Python", "D3.js", "Data Analysis", "Pandas"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      githubLink: "https://github.com/maliknivodhit",
      liveLink: "#"
    },
    {
      id: 2,
      title: "E-Commerce Analytics Platform",
      description: "Advanced analytics solution for e-commerce businesses with sales tracking, customer segmentation, and predictive modeling.",
      longDescription: "This analytics platform helps e-commerce businesses transform their raw data into strategic insights. Built with Python and Power BI, it provides comprehensive analysis of sales patterns, customer behavior, and inventory management. The platform features predictive algorithms that forecast future sales trends and identify potential market opportunities. The interactive dashboards make complex data accessible to stakeholders at all levels.",
      tags: ["Python", "SQL", "Power BI", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
      githubLink: "https://github.com/maliknivodhit"
    },
    {
      id: 3,
      title: "Student Performance Analytics",
      description: "Comprehensive system for tracking student data, attendance, and performance with reporting features using Python and SQL database.",
      longDescription: "This educational analytics tool helps institutions track and improve student outcomes through data-driven insights. By combining attendance records, assessment scores, and engagement metrics, it provides a holistic view of student performance. Educators can identify at-risk students, recognize patterns in learning behaviors, and tailor interventions accordingly. The system includes automated reporting features and visualizations that make complex educational data accessible and actionable.",
      tags: ["Python", "SQL", "Data Management", "Statistical Analysis"],
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop",
      githubLink: "https://github.com/maliknivodhit"
    },
    {
      id: 4,
      title: "Financial Analysis Tool",
      description: "Data-driven application for tracking expenses, income, and financial goals with advanced visualization components.",
      longDescription: "This financial analysis tool empowers users to take control of their finances through comprehensive tracking and visualization. It features expense categorization, budget planning, and goal tracking with predictive scenarios. The interactive charts and graphs make it easy to identify spending patterns and opportunities for savings. Built with Python and Excel integration, it provides both intuitive interfaces for everyday users and powerful analysis capabilities for financial professionals.",
      tags: ["Excel", "Python", "Data Visualization", "Financial Modeling"],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
      githubLink: "https://github.com/maliknivodhit"
    },
    {
      id: 5,
      title: "Blockchain Data Analytics",
      description: "Advanced platform for analyzing blockchain transactions, market trends, and smart contract metrics.",
      longDescription: "This blockchain analytics platform provides deep insights into distributed ledger transactions and market dynamics. It features real-time monitoring of network activity, smart contract analysis, and wallet behavior tracking. The tool can identify patterns in transaction flows, detect anomalies, and provide market intelligence through custom dashboards. Built with Python and specialized blockchain libraries, it bridges the gap between complex blockchain data and actionable business intelligence for investors and developers.",
      tags: ["Blockchain", "Python", "Data Mining", "Predictive Analytics"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
      githubLink: "https://github.com/maliknivodhit"
    }
  ];

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-neon-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-p">My <span className="text-gradient">Projects</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full section-p"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto section-p">
            Here are some of my recent projects that showcase my skills and interests in data analysis and blockchain technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => handleOpenProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute top-2 right-2">
                  <span className="p-2 bg-secondary/70 backdrop-blur-sm rounded-full text-primary flex items-center">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary/30 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={loadMoreProjects}
              className="px-6 py-3 bg-secondary/50 neon-border rounded-lg text-foreground font-medium transition-all duration-300 hover:bg-primary/10"
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
