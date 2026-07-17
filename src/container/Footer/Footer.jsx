import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => (
  <div id="contact" className="app__footer-wrapper">
    <motion.p
      whileInView={{ opacity: [0, 1], y: [-16, 0] }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.6 }}
      className="app__footer-tagline"
    >
      Take a coffee &amp; chat with me
    </motion.p>

    <motion.div
      whileInView={{ opacity: [0, 1], y: [30, 0] }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
      viewport={{ once: false, amount: 0.4 }}
      className="app__footer-card"
    >
      {/* Left — name */}
      <div className="app__footer-left">
        <span className="app__footer-name">Usama Ilyas</span>
        <span className="app__footer-copy">© {new Date().getFullYear()} All rights reserved</span>
      </div>

      {/* Center — contact links */}
      <div className="app__footer-center">
        <a href="mailto:devusama818@gmail.com" className="app__footer-icon" title="Email">
          <HiMail />
        </a>
        <a href="tel:+923197026592" className="app__footer-icon" title="Phone">
          <HiPhone />
        </a>
        <a href="https://wa.me/923197026592" target="_blank" rel="noopener noreferrer" className="app__footer-icon app__footer-icon--wa" title="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>

      {/* Right — socials */}
      <div className="app__footer-right">
        <a href="https://www.linkedin.com/in/usama-ilyas-ab5b67257" target="_blank" rel="noopener noreferrer" className="app__footer-icon app__footer-icon--li" title="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/usamailyas007" target="_blank" rel="noopener noreferrer" className="app__footer-icon app__footer-icon--gh" title="GitHub">
          <FaGithub />
        </a>
      </div>
    </motion.div>
  </div>
);

export default Footer;
