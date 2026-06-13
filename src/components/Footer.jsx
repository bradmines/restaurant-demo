function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

const navCols = [
  {
    heading: 'Explore',
    links: [
      { label: 'The Menu', href: '#menu' },
      { label: 'What\'s On Tap', href: '#on-tap' },
      { label: 'Upcoming Events', href: '#events' },
      { label: 'Our Story', href: '#about' },
    ],
  },
  {
    heading: 'Visit',
    links: [
      { label: 'Hours & Location', href: '#location' },
      { label: 'Reserve a Table', href: 'tel:+19055629000' },
      { label: 'Private Events', href: 'mailto:events@coppertap.ca' },
      { label: 'Gift Cards', href: '#' },
    ],
  },
]

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.49 0-1.955.928-1.955 1.878v2.257h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Untappd',
    href: '#',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.25 17.25l-1.5 1.5L12 15l-3.75 3.75-1.5-1.5L10.5 13.5 7.5 9.75 9 8.25l3 3.75 3-3.75 1.5 1.5-3 3.75 3.75 3.75z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <p className="footer__brand-name">The <span>Copper</span> Tap</p>
            <p className="footer__tagline">
              A craft beer pub and kitchen in the heart of<br />
              Fonthill, Niagara Peninsula, Ontario.
            </p>
            <div className="footer__socials">
              {socials.map(s => (
                <a
                  key={s.label}
                  className="footer__social"
                  href={s.href}
                  aria-label={s.label}
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {navCols.map(col => (
            <div className="footer__col" key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={l.href.startsWith('#') ? (e) => { e.preventDefault(); scrollTo(l.href) } : undefined}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h4>Contact</h4>
            <p>
              1247 Highway 20<br />
              Fonthill, ON L0S 1E0<br />
              <br />
              <a href="tel:+19055629000" style={{color:'var(--cream-2)'}}>
                (905) 562-9000
              </a><br />
              <a href="mailto:hello@coppertap.ca" style={{color:'var(--cream-2)'}}>
                hello@coppertap.ca
              </a>
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} The Copper Tap. All rights reserved. Fictional establishment — demo only.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
