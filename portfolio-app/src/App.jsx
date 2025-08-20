import "./App.css";
import StarsBackground from "./components/StarsBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/AboutMe";
import TechStack from "./components/TechStacks";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <StarsBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <GithubStats />
          <ContactSection />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
