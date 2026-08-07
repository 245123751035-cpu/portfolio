import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <header className="section-head">
          <h2>Technical Skills</h2>
          <p>Languages, technologies and core abilities I work with</p>
        </header>
        <div className="grid grid-3">
          {skills.map((s) => (
            <article className="card skill-card" key={s.title}>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>
                    <span className="check" aria-hidden="true">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
