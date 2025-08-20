import { useState, useRef, useEffect } from "react";

export default function AnimatedSection({ children, className }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>

      {/* Spotlight Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 70%)`,
        }}
      ></div>

      {/* Overlay for Dark Mode */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
