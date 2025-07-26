

'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration with EmailJS / backend API
    console.log('Form Submitted:', formData);
    alert('Thanks for reaching out!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white"
        >
          Let’s Connect
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 text-lg"
        >
          I’m open to Collab Drop a message or just say hi!
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-4 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-slate-100 dark:bg-slate-800 focus:outline-none"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-slate-100 dark:bg-slate-800 focus:outline-none"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded h-32 bg-slate-100 dark:bg-slate-800 focus:outline-none"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-6 rounded shadow-md"
          >
            Send Message
          </button>
        </motion.form>

        <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-700 dark:text-gray-300">
          <a href="mailto:marufsiddikig@gmail.com" className="hover:text-blue-600" aria-label="Email"><FaEnvelope /></a>
          <a href="https://github.com/MarufSiddikiGalib" target="_blank" className="hover:text-blue-600" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/maruf-siddiki-galib-7360092b5/" target="_blank" className="hover:text-blue-600" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}
