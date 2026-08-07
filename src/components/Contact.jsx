import { person } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="slide">
      <div className="slide-inner">
        <header className="slide-head reveal" style={{ '--d': '0ms' }}>
          <p className="eyebrow">Connect</p>
          <h2>Get In Touch</h2>
          <p className="lead">
            Have an opportunity, a project, or just want to say hi? My inbox is always open.
          </p>
        </header>
        <div className="contact-grid">
          {[
            {
              label: 'Email',
              value: person.email,
              href: `mailto:${person.email}`,
              icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
            },
            {
              label: 'Phone',
              value: person.phone,
              href: person.phoneHref,
              icon: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" /></>,
            },
            {
              label: 'LinkedIn',
              value: person.linkedin,
              href: person.linkedinUrl,
              external: true,
              icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
            },
            {
              label: 'Location',
              value: person.location,
              href: null,
              icon: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
            },
          ].map((c, i) => {
            const inner = (
              <>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </span>
                <h3>{c.label}</h3>
                <p>{c.value}</p>
              </>
            )
            return c.href ? (
              <a
                className="card contact-card reveal"
                key={c.label}
                href={c.href}
                style={{ '--d': `${150 + i * 90}ms` }}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
              >
                {inner}
              </a>
            ) : (
              <div className="card contact-card reveal" key={c.label} style={{ '--d': `${150 + i * 90}ms` }}>
                {inner}
              </div>
            )
          })}
        </div>
        <footer className="slide-footer reveal" style={{ '--d': '500ms' }}>
          &copy; {new Date().getFullYear()} Hiremut Sai Kshitij &middot; Built with React &amp; Vite
        </footer>
      </div>
    </section>
  )
}
