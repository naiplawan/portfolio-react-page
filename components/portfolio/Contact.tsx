'use client'

import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Mail from '@/components/ui/icons/Mail';
import Send from '@/components/ui/icons/Send';
import { CheckCircle, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { trackEvent } from '@/lib/analytics';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing. Please set environment variables.');
      alert('Contact form is not configured. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    try {
      trackEvent('contact_form_submit', {
        subject: formData.subject,
        messageLength: formData.message.length
      });

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      }, publicKey);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      trackEvent('contact_form_success', { subject: formData.subject });
    } catch (error) {
      console.error('Email send failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      trackEvent('contact_form_error', { error: errorMessage });
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rachaphol.plo@gmail.com",
      href: "mailto:rachaphol.plo@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangkok, Thailand",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/naiplawan",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rachaphol-plookaom",
      label: "LinkedIn"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // Remove 'type' or use only spring properties
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-2">
            I'm actively seeking new opportunities to apply my frontend expertise and full-stack skills. 
            Let's discuss how I can help drive innovation at your company.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-4">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">✓ Available for Full-Time Roles</span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">✓ Frontend & Full-Stack Expert</span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">✓ Quick Response</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Let's Connect</h3>

              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                <strong>Looking for a developer who can:</strong><br/>
                • Build innovative user interfaces from scratch<br/>
                • Optimize performance and reduce costs<br/>
                • Work with modern tech stacks<br/>
                • Deliver results with measurable impact<br/><br/>
                Let's discuss how I can contribute to your team's success.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-medium text-gray-900">{info.title}</p>
                      <a
                        href={info.href}
                        className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 sm:pt-8 border-t border-gray-200 mt-6 sm:mt-8">
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Connect with me:</p>
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      asChild
                      className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl border-gray-200 hover:bg-blue-50 hover:border-blue-200"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Send Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 sm:py-8"
                >
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    Thank you for your message. I'll get back to you soon!
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="rounded-lg sm:rounded-xl text-sm sm:text-base"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 block">Name</label>
                      <Input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      rows={5}
                      className="border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-blue-500 resize-none text-sm sm:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg sm:rounded-xl py-2.5 sm:py-3 font-medium transition-all duration-200 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

