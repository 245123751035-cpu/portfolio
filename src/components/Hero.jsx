import ParticleBackground from './ParticleBackground'
import { person } from '../data'

export default function Hero() {
  return (
    <section id="top" className="slide slide-hero">
      <ParticleBackground />
      <div className="hero-glow" aria-hidden="true" />
      <div className="slide-inner hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow reveal" style={{ '--d': '0ms' }}>
            Student · Developer · Problem Solver
          </p>
          <h1 className="reveal" style={{ '--d': '120ms' }}>
            Hi, I&apos;m <span className="accent-grad">{person.name}</span>
          </h1>
          <p className="hero-lead reveal" style={{ '--d': '240ms' }}>
            {person.role} at {person.college}
          </p>
          <p className="hero-para reveal" style={{ '--d': '360ms' }}>
            Motivated and disciplined engineering student with strong problem-solving skills,
            leadership experience and creative abilities. Passionate about applying technical
            knowledge while continuously learning and contributing effectively to organizational
            growth.
          </p>
          <div className="hero-actions reveal" style={{ '--d': '480ms' }}>
            <a className="btn btn-cyber" href="#about">
              Explore My Work &#8595;
            </a>
            <a className="btn btn-glass" href="#contact">
              Get In Touch
            </a>
          </div>
          <ul className="hero-facts reveal" style={{ '--d': '600ms' }}>
            <li><span>Branch</span> CS &amp; IT</li>
            <li><span>Year</span> 3 / 4 · Sem 6</li>
            <li><span>CGPA</span> {person.cgpa}</li>
            <li><span>Location</span> Hyderabad</li>
          </ul>
        </div>
        <div className="hero-card-wrap reveal" style={{ '--d': '300ms' }}>
          <div className="hero-card">
            <div className="hero-avatar">SK</div>
            <h3>{person.name}</h3>
            <p className="sub">B.Tech CSIT · MVSR</p>
            <div className="hero-card-actions">
              <a href={`mailto:${person.email}`} className="hero-icon" title="Email" aria-label="Email">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
              </a>
              <a href={person.linkedinUrl} target="_blank" rel="noreferrer" className="hero-icon" title="LinkedIn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href={person.phoneHref} className="hero-icon" title="Phone" aria-label="Phone">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
