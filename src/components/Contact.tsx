"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast"; // Make sure this file exists

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    // Check if environment variables are set
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not configured");
      toast({
        title: "Configuration Error!",
        description: "Email service is not properly configured. Please contact the administrator.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: "Nivodhit",
        },
        publicKey
      );

      console.log("Email sent successfully:", result);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get In <span className="text-gradient">Touch</span></h2>
          <p className="mt-4 text-muted-foreground">
            Have a question or want to work together? Feel free to contact me through the form below or connect with me on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <a href="mailto:maliknivodhit@gmail.com" className="flex items-center mb-4">
              <Mail className="mr-3 text-primary" />
              maliknivodhit@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/nivodhit-malik-18551223b/" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4">
              <Linkedin className="mr-3 text-primary" />
              linkedin.com/in/nivodhit
            </a>
            <a href="https://github.com/maliknivodhit" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-3 text-primary" />
              github.com/maliknivodhit
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-secondary/10 p-6 rounded-lg space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label className="block mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-2">Your Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                isSubmitted
                  ? "bg-green-600 text-white"
                  : "bg-gradient-to-r from-neon-purple to-neon-blue text-white"
              }`}
            >
              {isSubmitting ? (
                "Sending..."
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="mr-2" size={18} /> Sent Successfully
                </>
              ) : (
                <>
                  <Send className="mr-2" size={18} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
