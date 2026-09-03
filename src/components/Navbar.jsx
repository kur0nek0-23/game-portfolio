import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/recognition', label: 'Education & Awards' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <NavLink to="/" className="nav__logo">
          <span className="nav__mark">&gt;_</span>
          <span>min.zay.ya</span>
        </NavLink>
        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'nav__link--active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav__cta">
            Hire me
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar