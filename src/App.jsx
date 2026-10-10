import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      </div>
  );
}

export default App;
