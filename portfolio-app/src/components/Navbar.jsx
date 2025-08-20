import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const fileId = "19RLDMKgfsRCP6yE8T-yfTWqTYov6b0bd";

  // ✅ Function to view & download resume
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

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=16pMNiC2_o2myjXxYx2lxJtiCo_kIPZ64";

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", onClick: handleResumeClick, external: true },
  ];

  return (
    <motion.nav
      className="fixed w-full z-50 backdrop-blur-md bg-white/60 shadow-lg"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-extrabold tracking-wide cursor-pointer bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          MyPortfolio
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={link.onClick ? link.onClick : undefined}
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  className="text-gray-900 font-medium transition-colors duration-300 hover:text-blue-500"
                >
                  {link.name}
                </a>
              ) : (
                <span className="text-gray-900 font-medium transition-colors duration-300 hover:text-blue-500">
                  {link.name}
                </span>
              )}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="md:hidden fixed top-0 right-0 h-screen w-3/4 bg-white/90 backdrop-blur-lg shadow-xl flex flex-col items-center justify-center gap-6"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-lg font-semibold text-gray-900 hover:text-blue-500"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
