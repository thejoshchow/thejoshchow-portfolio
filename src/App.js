import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
