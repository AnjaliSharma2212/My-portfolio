import { motion, useMotionValue, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";

import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profile from "../assets/images/profile.jpg";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
  const fileId = "19RLDMKgfsRCP6yE8T-yfTWqTYov6b0bd";
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
      mouseX.set(x - rect.width / 2);
      mouseY.set(y - rect.height / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const handleResumeClick = () => {
    const fileId = "19RLDMKgfsRCP6yE8T-yfTWqTYov6b0bd";

    // 1. Open Google Drive in a new tab (must be first so popup isn't blocked)
    window.open(
      `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
      "_blank"
    );

    // 2. Trigger download
    const downloadLink = document.createElement("a");
    downloadLink.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    downloadLink.download = "Anjali-Sharma-Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 text-center overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-gradient-x opacity-90"></div>

      {/* Floating Tech Icons using react-icons */}
      <motion.div
        className="absolute top-20 left-6 text-3xl text-cyan-300 opacity-70"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaReact />
      </motion.div>
      <motion.div
        className="absolute top-28 right-12 text-3xl text-green-400 opacity-70"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <FaNodeJs />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-16 text-3xl text-green-600 opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <SiMongodb />
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-10 text-3xl text-blue-400 opacity-70"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <FaCss3Alt />
      </motion.div>

      {/* Particle Field */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(250px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 70%)`,
        }}
      />

      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Profile"
        className="rounded-full border-4 border-white/80 shadow-lg w-60 h-60 object-cover"
        animate={{
          scale: [1, 1.03, 1],
          boxShadow: [
            "0 0 20px rgba(59,130,246,0.4)",
            "0 0 40px rgba(236,72,153,0.6)",
            "0 0 20px rgba(59,130,246,0.4)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        whileHover={{ scale: 1.05 }}
      />

      {/* Name Reveal */}
      <motion.div
        className="relative z-10 overflow-hidden"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-300 text-transparent bg-clip-text">
          Hi, I'm Anjali Sharma
        </h1>
      </motion.div>

      {/* Typewriter Text */}
      <motion.h2
        className="relative z-10 text-lg md:text-xl mb-2 text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Typewriter
          words={[
            "Frontend Developer",
            "MERN Stack Enthusiast",
            "Creative Coder",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
        />
      </motion.h2>

      {/* Short Intro */}
      <motion.p
        className="relative z-10 text-sm md:text-base text-gray-200 max-w-xl mt-2 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Passionate about building interactive and engaging web applications with
        a deep love for clean design and dynamic user experiences. Always eager
        to learn and grow.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="relative z-10 flex gap-4 flex-wrap justify-center"
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <a href="#projects">
          <motion.button
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-100 transition border-2 border-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </a>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleResumeClick}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 
                       text-white font-semibold rounded-lg shadow-lg 
                       hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] 
                       transition-all duration-300"
        >
          Resume
        </motion.button>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        className="absolute bottom-6 flex flex-col items-center text-gray-300 text-sm"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>Scroll Down</span>
        <div className="w-[2px] h-8 bg-gray-300 mt-1" />
      </motion.div>
    </section>
  );
}
