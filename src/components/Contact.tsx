import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Nivodhit',
    };

    try {
      await emailjs.send(
        'service_kgb72dn',        // ✅ Your Service ID
        'template_brqs99m',       // ✅ Your Template ID
        templateParams,
        'btxn-mmB7GVz9cZyo'       // ✅ Your Public Key
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: any) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Error!',
        description: `Failed to send message. ${error?.text || 'Please try again later.'}`,
        variant: 'destructive',
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background/90 to-transparent"></div>
      <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-neon-purple/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-p">Get In <span className="text-gradient">Touch</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full section-p"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto section-p">
            Have a question or want to work together? Feel free to contact me through the form below or connect with me on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <p className="text-muted-foreground">
              I'm currently open to new opportunities, collaborations, and interesting projects. Let's connect and discuss how we can work together!
            </p>

            <div className="space-y-4">
              <a href="mailto:maliknivodhit@gmail.com" className="flex items-center group">
                <div className="p-3 bg-secondary/30 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">maliknivodhit@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/nivodhit-malik-18551223b/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="p-3 bg-secondary/30 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium group-hover:text-primary transition-colors">Nivodhit</p>
                </div>
              </a>

              <a href="https://github.com/maliknivodhit" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="p-3 bg-secondary/30 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <Github size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium group-hover:text-primary transition-colors">maliknivodhit</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/20 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="Hello Nivodhit, I'd like to discuss a project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-neon-purple to-neon-blue text-background neon-glow hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={18} className="mr-2" /> Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" /> Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
