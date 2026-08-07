import { person, education, skills } from '../data'

const facts = [
  ['Name', person.name],
  ['Current', 'Pursuing B.Tech · CS & IT'],
  ['College', person.college],
  ['Email', person.email],
  ['Phone', person.phone],
  ['Address', person.location],
]

export default function About() {
  return (
    <section id="about" className="slide">
      <div className="slide-inner">
        <header className="slide-head reveal" style={{ '--d': '0ms' }}>
          <p className="eyebrow">Who I Am</p>
          <h2>About Me</h2>
          <p className="lead">
            A disciplined CS &amp; IT student who turns curiosity into working software — one
            project, one problem, one win at a time.
          </p>
        </header>

        <div className="about-grid">
          <div className="about-copy reveal" style={{ '--d': '120ms' }}>
            <p>
              I am a third-year Computer Science &amp; Information Technology student at{' '}
              <strong>{person.college}</strong> with a current CGPA of <strong>{person.cgpa}</strong>.
              My journey combines academic learning with hands-on projects, national-level training,
              and a passion for building things that solve real problems.
            </p>
            <p>
              From web applications like a mini Instagram clone and a solar savings calculator to
              applying CNNs for online exam proctoring, I enjoy turning ideas into working software.
              Beyond coding, I bring discipline from my NCC training, competitive spirit from
              district-level skating, and responsibility from leading my class as Class
              Representative.
            </p>
            <div className="skill-chips">
              {skills.map((s) =>
                s.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))
              )}
            </div>
          </div>

          <dl className="about-facts reveal" style={{ '--d': '240ms' }}>
            {facts.map(([label, value]) => (
              <div className="fact" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="edu-row">
          {education.map((e, i) => (
            <article className="card edu-card reveal" key={e.degree} style={{ '--d': `${200 + i * 100}ms` }}>
              <div className="edu-top">
                <h3>{e.degree}</h3>
                <span className="score">{e.score}</span>
              </div>
              <p className="sub">{e.institution}</p>
              <p>{e.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
