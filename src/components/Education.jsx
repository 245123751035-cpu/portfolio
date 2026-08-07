import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <header className="section-head">
          <h2>Education</h2>
          <p>My academic journey so far</p>
        </header>
        <div className="timeline">
          {education.map((e) => (
            <article className="timeline-item" key={e.degree}>
              <div className="timeline-marker" />
              <div className="card timeline-card">
                <div className="timeline-row">
                  <h3>{e.degree}</h3>
                  <span className="score">{e.score}</span>
                </div>
                <p className="sub">{e.institution}</p>
                <p>{e.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
