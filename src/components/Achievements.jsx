import Carousel from './Carousel'
import { achievements } from '../data'

export default function Achievements() {
  return (
    <section id="achievements" className="slide">
      <div className="slide-inner">
        <header className="slide-head reveal" style={{ '--d': '0ms' }}>
          <p className="eyebrow">Milestones</p>
          <h2>Achievements</h2>
          <p className="lead">
            Beyond the classroom — leadership, discipline and a district-level championship.
          </p>
        </header>
        <div className="grid grid-2">
          {achievements.map((a, i) => (
            <article className="card achievement-card reveal" key={a.name} style={{ '--d': `${150 + i * 100}ms` }}>
              <Carousel slides={a.media} alt={a.name} aspectRatio="4 / 3" />
              <div className="card-body">
                <h3>{a.name}</h3>
                <p className="sub">{a.issuer}</p>
                <p>{a.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
