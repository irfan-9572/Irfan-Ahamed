import './App.css';
import Contact from "../../Portfolio/src/Sections/Contacts/Contacts";
import Footer from './Sections/Footer/Footer';
import Hero from './Sections/Hero/Hero';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;