import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-6 text-center relative overflow-hidden">
      {/* Floating Lights */}
      <motion.div
        className="absolute top-0 left-10 w-20 h-20 bg-white/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-20 h-20 bg-white/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 px-4 relative z-10">
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
          <motion.a
            href="mailto:anjalivce19@gmail.com"
            className="hover:text-yellow-300 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope /> anjalivce19@gmail.com
          </motion.a>
          <motion.a
            href="tel:+916005377803"
            className="hover:text-yellow-300 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
          >
            <FaPhone /> +91 6005377803
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-lg">
          <motion.a
            href="https://linkedin.com/in/anjalisharma042"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/AnjaliSharma2212"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
            whileHover={{ scale: 1.2, rotate: -5 }}
          >
            <FaGithub />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/90">
          © {new Date().getFullYear()} Anjali Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
