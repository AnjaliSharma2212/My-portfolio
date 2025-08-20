import { motion } from "framer-motion";

export default function GithubStats() {
  const username = "AnjaliSharma2212";

  const cardClasses =
    "rounded-xl border border-white/20 shadow-lg backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 p-4 transition-transform duration-300 hover:scale-105";

  return (
    <section
      id="github-stats"
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

      {/* Section Title */}
      <motion.h2
        className="relative z-10 text-center text-4xl font-bold mb-12 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        GitHub Statistics
      </motion.h2>

      {/* Stats Container */}
      <div className="relative z-10 grid gap-8 max-w-6xl mx-auto px-6 lg:grid-cols-2">
        {/* GitHub Stats */}
        <motion.img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
          alt="GitHub Stats"
          className={`${cardClasses} hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* GitHub Streak */}
        <motion.img
          src={`https://streak-stats.demolab.com?user=${username}&theme=radical`}
          alt="GitHub Streak"
          className={`${cardClasses} hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Activity Graph */}
      <div className="relative z-10 mt-8 max-w-6xl mx-auto px-6">
        <motion.img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark`}
          alt="GitHub Activity Graph"
          className={`${cardClasses} hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Contribution Chart */}
      <motion.h3
        className="relative z-10 text-4xl font-bold mb-12 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        My GitHub Contributions
      </motion.h3>
      <div className="relative z-10 flex justify-center">
        <motion.img
          src={`https://ghchart.rshah.org/00ff00/${username}`}
          alt="GitHub Contribution Chart"
          className="rounded-lg shadow-lg bg-white p-4 dark:bg-gray-800 border border-white/10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
