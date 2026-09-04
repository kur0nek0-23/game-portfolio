import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../theme.jsx'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <NavLink to="/" className="nav__logo">
          <span className="nav__mark">&gt;_</span>
          <span>min.zay.ya</span>
        </NavLink>
        <nav className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={handleNavClick}
              className={({ isActive }) => (isActive ? 'nav__link--active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            className="nav__theme"
            onClick={() => {
              toggleTheme()
              handleNavClick()
            }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <NavLink to="/contact" className="nav__cta" onClick={handleNavClick}>
            Hire me
          </NavLink>
        </nav>
        <button
          type="button"
          className="nav__burger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar