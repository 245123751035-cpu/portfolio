import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SlideDots from './components/SlideDots'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import './index.css'

const slideIds = ['top', 'about', 'projects', 'certifications', 'achievements', 'contact']

function App() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const slides = document.querySelectorAll('.slide')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            setActive(entry.target.id)
          }
        }
      },
      { threshold: 0.05 }
    )
    slides.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar active={active} />
      <main className="deck">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <SlideDots ids={slideIds} active={active} onSelect={goTo} />
    </>
  )
}

export default App
