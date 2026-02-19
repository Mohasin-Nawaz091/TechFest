import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen px-4 lg:px-40 py-20 bg-gray-50 text-gray-900 font-sans flex flex-col gap-16 justify-center">
      <div className="max-w-[1200px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-8 leading-tight">
            Get in <span className="text-gradient">Touch</span>
          </h1>

          <div className="flex flex-col gap-8 text-lg">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Mail size={24} />
              </div>
              <span className="font-medium text-gray-700">techfest@imsciences.edu.pk</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Phone size={24} />
              </div>
              <span className="font-medium text-gray-700">+1 (555) 123-4567</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <MapPin size={24} />
              </div>
              <span className="font-medium text-gray-700">Peshawar,<br />Hayatabad, Phase 7</span>
            </div>
          </div>

          <div className="mt-12 flex gap-6">
            <a href="https://www.linkedin.com/company/techfest26" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-full bg-primary/10 text-primary hover:-translate-y-2 hover:bg-primary/20 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/techfest26/?hl=en" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-full bg-primary/10 text-primary hover:-translate-y-2 hover:bg-primary/20 transition-all duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/share/14UQAYQdLmB/" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-full bg-primary/10 text-primary hover:-translate-y-2 hover:bg-primary/20 transition-all duration-300">
              <Facebook size={24} />
            </a>
          </div>

        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-500 ml-1">Name</label>
              <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder="John Doe" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-500 ml-1">Email</label>
              <input type="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder="johndoe@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-500 ml-1">Message</label>
              <textarea className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 h-32 resize-y focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder="Your message here..."></textarea>
            </div>

            <button type="submit" className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-tech-purple text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        className="w-full max-w-[1200px] mx-auto h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <iframe
          src="https://maps.google.com/maps?q=Institute%20of%20Management%20Sciences%20Peshawar&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Event Location"
        ></iframe>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};
export default Contact;
