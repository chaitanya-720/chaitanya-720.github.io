import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Internship from './components/Internship'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Internship />
      <Contact />
    </div>
  )
}

export default App
