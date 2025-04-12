
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-neon-purple/30 max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.tags.map((tag, i) => (
              <span key={i} className="inline-block px-2 py-1 mr-2 mb-2 bg-secondary/30 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 pt-2">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Project Overview</h3>
            <p className="text-muted-foreground">{project.description}</p>
            
            {project.longDescription && (
              <p className="text-muted-foreground">{project.longDescription}</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
