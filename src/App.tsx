import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </Layout>
  );
}

export default App;
