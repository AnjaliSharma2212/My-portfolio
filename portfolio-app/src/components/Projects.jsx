import { motion } from "framer-motion";
import { useState } from "react";
import projectMeme from "../assets/images/projectMeme.png";
import projectVirtual from "../assets/images/projectVirtual.png";
import projectFarm from "../assets/images/projectFarm.png";
import crowdfunding from "../assets/images/crowdfunding.png";
import rick from "../assets/images/rick.png";
export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Meme-Hub Website",
      description:
        "Meme-Hub a project which helps to create memes and also post like Social Media.",
      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase",
        "React-Router",
      ],
      github: "https://github.com/AnjaliSharma2212/MemeHub-Project-",
      Check: "https://jokejunction-memehub-44acfd.netlify.app",
      image: `${projectMeme}`,
    },
    {
      title: "FreshRoots App",
      description:
        "Farm app with authentication and payments Consumer can order the fresh consuming things right away directly from Farm.",
      tech: ["React", "Node.js", "Firestore", "Firebase", "DOM"],
      github: "https://github.com/AnjaliSharma2212/FarmToKitchen",
      Check: "https://farmtokitchen-app.netlify.app",
      image: `${projectFarm}`,
    },
    {
      title: "Virtual Dashboard",
      description:
        "A application where a user can create a session like virtual classroom and chit chat in realtime.",
      tech: [
        "React",
        "Tailwind",
        "API Integration",
        "MONGODB",
        "Express",
        "Mongoose",
        "Postman",
      ],
      github: "https://github.com/AnjaliSharma2212/Virtual-classroom",
      Check: "https://virtual-classroom-vir.netlify.app",
      image: `${projectVirtual}`,
    },
    {
      title: "Another Cool Project",
      description:
        "A web-based crowdfunding application that allows users to create campaigns, manage patient details, and authenticate users securely. This application is built with a clear separation of concerns, utilizing HTML, CSS, JavaScript,DOM and Firebase Firestore.",
      tech: ["HTML", "CSS3", "JavaScript"],
      github: "https://github.com/AnjaliSharma2212/CrowdFunding",
      Check: "https://crowdfundingsite20.netlify.app/",
      image: `${crowdfunding}`,
    },
    {
      title: "Rick-Morty",
      description: "Rick Morty Api i fetch from and then show info about it.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/AnjaliSharma2212/Rick-Morty",
      Check: "https://rickandmortyapi234.netlify.app/",
      image: `${rick}`,
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative py-20 bg-transparent backdrop-blur-sm overflow-hidden"
    >
      {/* Background blobs */}
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
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {displayedProjects.map((p, index) => (
          <motion.div
            key={p.title}
            className="group relative rounded-xl overflow-hidden bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <motion.img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {p.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                {p.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    whileHover={{ scale: 1.1 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={p.github}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={p.Check}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-medium shadow hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="text-center mt-10 relative z-10">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "Show Less" : "Show More"}
        </motion.button>
      </div>
    </section>
  );
}
