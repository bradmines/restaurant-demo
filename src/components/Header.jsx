import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Beer', href: '#on-tap' },
  { label: 'Events', href: '#events' },
  { label: 'Visit', href: '#location' },
]

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setMenuOpen(false)
    setTimeout(() => scrollTo(href), 10)
  }

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="header__inner">
            <a
              className="header__logo"
              href="#hero"
              onClick={e => { e.preventDefault(); scrollTo('#hero') }}
            >
              The <span>Copper</span> Tap
            </a>

            <nav className="header__nav">
              {navLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={e => { e.preventDefault(); scrollTo(l.href) }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              className="header__cta"
              href="tel:+19055629000"
            >
              Reserve a Table
            </a>

            <button
              className={`header__hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`header__mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.label} href={l.href} onClick={() => handleNav(l.href)}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-primary" href="tel:+19055629000" onClick={() => setMenuOpen(false)}>
          Reserve a Table
        </a>
      </div>
    </>
  )
}
