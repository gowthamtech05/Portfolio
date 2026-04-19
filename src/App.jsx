import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <section id="hero">
            <Hero />
          </section>

          <section id="about" className="scroll-mt-16">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>
          <section id="education" className="scroll-mt-16">
            <Education />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
