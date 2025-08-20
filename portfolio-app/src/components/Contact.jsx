import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false); // modal state
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("https://formspree.io/f/xjkoadkq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setLoading(false);
    if (res.ok) {
      setFormData({ name: "", email: "", message: "" });
      setSuccess(true); // show modal
    } else {
      toast.error("Failed to send, please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-20 backdrop-blur-sm">
      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
            <h2 className="text-2xl text-black font-bold text-green-400">
              ✅ Sent Successfully! 🙂
            </h2>
            <p className="mt-2 text-gray-800 ">
              Thank you for reaching out. I'll get back to you soon.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:scale-105 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Form & Info */}
      <div className="relative z-10 max-w-6xl mx-auto  grid md:grid-cols-2 gap-30 px-6">
        <div>
          <motion.h2 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
            Get In Touch
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 dark:bg-gray-800/20 border focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 dark:bg-gray-800/20 border focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 dark:bg-gray-800/20 border focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
            />
            <motion.button
              whileHover={!loading ? { scale: 1.05 } : {}}
              whileTap={!loading ? { scale: 0.95 } : {}}
              disabled={loading}
              type="submit"
              className={`w-full py-3 flex items-center justify-center gap-2
    ${loading ? "opacity-70 cursor-not-allowed" : ""}
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
    text-white font-semibold rounded-lg shadow-lg`}
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl text-purple-400"
          >
            <FaPhoneAlt />
          </motion.div>
          {/* Info */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FaPhoneAlt className="text-blue-500" />,
                text: "+91 6005377803",
              },
              {
                icon: <FaEnvelope className="text-red-500" />,
                text: "anjalivce19@gmail.com",
              },
              {
                icon: <FaLinkedin className="text-blue-600" />,
                text: "linkedin.com/anjalisharma042",
                link: "https://www.linkedin.com/in/anjalisharma042",
              },
              {
                icon: <FaGithub className="text-gray-700 text-gray-300" />,
                text: "github.com/AnjaliSharma2212",
                link: "https://github.com/AnjaliSharma2212",
              },
            ].map((item, i) => (
              <motion.p
                key={i}
                className="flex items-center gap-3 text-lg font-semibold text-gray-800 "
                whileHover={{ scale: 1.05, x: 5 }}
              >
                {item.icon}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-500"
                  >
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
