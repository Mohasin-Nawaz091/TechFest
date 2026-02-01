import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="contact-heading">Get in Touch</h1>

          <div className="contact-params">
            <div className="info-item">
              <div className="icon-wrapper">
                <Mail size={24} />
              </div>
              <span>techfest@imsciences.edu.pk</span>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <Phone size={24} />
              </div>
              <span>+1 (555) 123-4567</span>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <MapPin size={24} />
              </div>
              <span>Peshawar,<br />Hayatabad,Phase 7</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/company/techfest26" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/techfest26/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/share/14UQAYQdLmB/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={24} />
            </a>
          </div>

        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form className="glass-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Ahmed Khan" />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="ahmedkhan@example.com" />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Your message here..."></textarea>
            </div>

            <button type="submit" className="btn-large" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Send size={20} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        className="map-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <iframe
          src="https://maps.google.com/maps?q=Institute%20of%20Management%20Sciences%20Peshawar&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="map-frame"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Event Location"
        ></iframe>
      </motion.div>
    </div>
  );
};
export default Contact;
