import Carousel from './Carousel'
import { certificates } from '../data'

export default function Certifications() {
  return (
    <section id="certifications" className="slide">
      <div className="slide-inner">
        <header className="slide-head reveal" style={{ '--d': '0ms' }}>
          <p className="eyebrow">Learning</p>
          <h2>Certifications</h2>
          <p className="lead">
            Proof of consistent learning — NPTEL courses, industry training and hands-on workshops.
          </p>
        </header>
        <div className="grid grid-2">
          {certificates.map((c, i) => (
            <article className="card cert-card reveal" key={c.name} style={{ '--d': `${150 + i * 100}ms` }}>
              {c.media.length > 0 ? (
                <Carousel
                  slides={c.media.map((src) => ({ src, href: c.link }))}
                  alt={c.name}
                  aspectRatio="4 / 3"
                />
              ) : (
                <div className="cert-placeholder">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
                  </svg>
                  <p>Certificate awarded</p>
                </div>
              )}
              <div className="card-body">
                <h3>{c.name}</h3>
                <p className="sub">{c.issuer}</p>
                <p>{c.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
