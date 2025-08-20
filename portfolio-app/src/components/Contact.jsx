// import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function ContactSection() {
//   return (
//     <section
//       id="contact"
//       className="bg-gradient-to-r from-gray-100 via-gray-800 to-gray-600 py-16 px-6 md:px-20"
//     >
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Left Side - Contact Form */}
//         <div>
//           <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
//           <form
//             action="https://formspree.io/f/xjkoadkq"
//             method="POST"
//             className="space-y-4"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
//             />
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               required
//               className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
//             ></textarea>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all"
//             >
//               Send Message
//             </motion.button>
//           </form>
//         </div>

//         {/* Right Side - Contact Info */}
//         <div className="flex flex-col justify-center space-y-6">
//           <motion.div
//             animate={{ rotate: [0, 20, -20, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="text-4xl text-purple-400"
//           >
//             <FaPhoneAlt />
//           </motion.div>
//           <div>
//             <p className="flex items-center gap-3 text-lg">
//               <FaPhoneAlt className="text-blue-400" /> +91 6005377803
//             </p>
//             <p className="flex items-center gap-3 text-lg">
//               <FaEnvelope className="text-red-400" /> anjalivce19a@gmail.com
//             </p>
//             <p className="flex items-center gap-3 text-lg">
//               <FaLinkedin className="text-blue-500" />
//               <a
//                 href="https://linkedin.com/in/anjalisharma042"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 linkedin.com/in/anjalisharma042
//               </a>
//             </p>
//             <p className="flex items-center gap-3 text-lg">
//               <FaGithub className="text-gray-400" />
//               <a
//                 href="https://github.com/AnjaliSharma2212"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 github.com/AnjaliSharma2212
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-transparent backdrop-blur-sm  overflow-hidden"
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

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Side - Contact Form */}
        <div>
          <motion.h2
            className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <form
            action="https://formspree.io/f/xjkoadkq"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none backdrop-blur-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none backdrop-blur-md"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none backdrop-blur-md"
            ></textarea>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl text-purple-400"
          >
            <FaPhoneAlt />
          </motion.div>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-lg text-gray-600">
              <FaPhoneAlt className="text-blue-400" /> +91 6005377803
            </p>
            <p className="flex items-center gap-3 text-lg text-gray-600">
              <FaEnvelope className="text-red-400" /> anjalivce19@gmail.com
            </p>
            <p className="flex items-center gap-3 text-lg text-gray-600">
              <FaLinkedin className="text-blue-500" />
              <a
                href="https://linkedin.com/in/anjalisharma042"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/anjalisharma042
              </a>
            </p>
            <p className="flex items-center gap-3 text-lg text-gray-600">
              <FaGithub className="text-gray-400" />
              <a
                href="https://github.com/AnjaliSharma2212"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/AnjaliSharma2212
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
