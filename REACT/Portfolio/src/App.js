import './App.css';
import { useState } from 'react';
import Home from './screens/home/Home';
import Navbar from './components/navbar/Navbar';
import Skills from './screens/skills/Skills';
import Resume from './screens/resume/Resume';
import Projects from './screens/projects/Projects';
import Contact from './screens/contact/Contact';
import Footer from './components/footer/Footer';
import {themeContext} from './context/themeContext';
import { useContext } from 'react';


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div style={{
      background: darkMode? "var(--black-bg)" : "var(--light-orange)",
      color: darkMode? "var(--white-text)": "var(--black-text)"
    }}
    onClick={isOpen ? toggle : ''}
    >
      <Navbar  isOpen={isOpen} toggle={toggle}/>
      <Home />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
