import Header from './components/Header';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
// import ProjectReflections from './components/ProjectReflections';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <TechStack />
        <Projects />
        {/* <ProjectReflections /> */}
        <Contact />
      </main>
      </div>
  );
}

export default App;
