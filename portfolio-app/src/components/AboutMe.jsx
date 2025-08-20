import { motion, useMotionValue, useTransform } from "framer-motion";
import profile from "../assets/images/profile.jpg";
import { FaEye, FaDownload, FaProjectDiagram } from "react-icons/fa";
export default function About() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX - innerWidth / 2);
    mouseY.set(e.clientY - innerHeight / 2);
  };

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
      id="about"
      onMouseMove={handleMouseMove}
      className="relative py-20 bg-transparent backdrop-blur-sm overflow-hidden"
    >
      {/* Floating Gradient Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-purple-500/40 rounded-full mix-blend-screen filter blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/40 rounded-full mix-blend-screen filter blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 z-10">
        {/* Profile Image with 3D tilt */}
        <motion.div
          className="flex-shrink-0"
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={profile}
            alt="Profile"
            className="rounded-xl border-4 border-white/80 shadow-lg w-60 h-60 object-cover"
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
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <motion.p
            className="text-gray-700 dark:text-gray-500 leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hi, I'm{" "}
            <span className="font-semibold text-blue-500">Anjali Sharma</span>,
            a passionate Frontend Developer and MERN Stack enthusiast who loves
            crafting interactive, user-friendly, and visually appealing web
            experiences.
          </motion.p>

          <motion.p
            className="text-gray-700 dark:text-gray-500 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I specialize in React.js, Tailwind CSS, and JavaScript, with
            hands-on experience building responsive and dynamic web apps. My
            goal is to bridge the gap between design and technology, delivering
            pixel-perfect solutions that perform flawlessly.
          </motion.p>

          {/* Buttons Container */}
          <div className="flex flex-wrap gap-4 mt-6">
            {/* View Projects */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
               text-white font-semibold rounded-lg shadow-lg 
               hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] 
               transition-all duration-300"
            >
              <FaProjectDiagram className="text-lg" />
              View My Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeClick}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 
               text-white font-semibold rounded-lg shadow-lg 
               hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] 
               transition-all duration-300"
            >
              <FaProjectDiagram className="text-lg" />
              Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
