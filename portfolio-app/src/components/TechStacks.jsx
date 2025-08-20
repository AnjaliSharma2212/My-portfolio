import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800" />,
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-transparent backdrop-blur-sm overflow-hidden"
    >
      {/* Floating Gradient Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h2
        className="relative z-10 text-4xl font-bold mb-12 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tech Stack & Tools
      </motion.h2>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-10 max-w-6xl mx-auto px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 dark:bg-gray-800/20 shadow-lg backdrop-blur-md border border-white/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-6xl"
              whileHover={{
                textShadow:
                  "0 0 15px rgba(59,130,246,0.8), 0 0 30px rgba(236,72,153,0.8)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
            <p className="mt-4 font-medium text-gray-500 ">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
