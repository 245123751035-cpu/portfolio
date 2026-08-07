import { useEffect, useState } from 'react'
import { person } from '../data'

const links = [
  ['about', 'About'],
  ['projects', 'Projects'],
  ['certifications', 'Certifications'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact'],
]

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const overDark = active === 'top'

  useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${overDark ? ' nav-over-dark' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          KS<span className="nav-brand-dot">.</span>
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={`#${href}`}
                className={active === href ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-primary nav-cta" href={`mailto:${person.email}`}>
          Hire Me
        </a>
        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
