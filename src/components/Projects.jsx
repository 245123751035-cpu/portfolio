import Carousel from './Carousel'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="slide">
      <div className="slide-inner">
        <header className="slide-head reveal" style={{ '--d': '0ms' }}>
          <p className="eyebrow">My Work</p>
          <h2>Projects</h2>
          <p className="lead">
            Ideas I turned into working software — from a social platform to AI-powered exam
            proctoring.
          </p>
        </header>
        <div className="grid grid-2">
          {projects.map((p, i) => (
            <article className="card project-card reveal" key={p.name} style={{ '--d': `${150 + i * 100}ms` }}>
              <Carousel slides={p.media} alt={p.name} aspectRatio="16 / 9" />
              <div className="card-body">
                <span className="tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
