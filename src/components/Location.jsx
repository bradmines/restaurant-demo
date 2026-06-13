const hours = [
  { day: 'Monday', time: 'Closed', closed: true },
  { day: 'Tuesday', time: '3:00 pm – 11:00 pm' },
  { day: 'Wednesday', time: '3:00 pm – 11:00 pm' },
  { day: 'Thursday', time: '3:00 pm – 11:00 pm' },
  { day: 'Friday', time: '3:00 pm – 1:00 am' },
  { day: 'Saturday', time: '12:00 pm – 1:00 am' },
  { day: 'Sunday', time: '12:00 pm – 10:00 pm' },
]

const TODAY_INDEX = new Date().getDay() // 0=Sun, 1=Mon...
const dayMap = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 }
const todayRow = dayMap[TODAY_INDEX]

function openMaps() {
  window.open('https://maps.google.com/?q=1247+Highway+20+Fonthill+Ontario', '_blank', 'noopener')
}

export default function Location() {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="location__inner">
          <div className="location__info">
            <p className="section-label">Find Us</p>
            <h2 className="section-title">Hours &amp; Location</h2>

            <table className="hours-table" aria-label="Opening hours">
              <tbody>
                {hours.map((h, i) => (
                  <tr key={h.day} className={i === todayRow ? 'today' : ''}>
                    <td>{h.day}{i === todayRow ? ' ✦' : ''}</td>
                    <td className={h.closed ? 'closed' : ''}>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="location__address">
              <strong>Address</strong>
              <p>
                1247 Highway 20<br />
                Fonthill, Ontario<br />
                L0S 1E0<br />
                <br />
                <a
                  href="tel:+19055629000"
                  style={{ color: 'var(--copper)', transition: 'opacity .2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '.75'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  (905) 562-9000
                </a>
                <br />
                <a
                  href="mailto:hello@coppertap.ca"
                  style={{ color: 'var(--copper)', transition: 'opacity .2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '.75'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  hello@coppertap.ca
                </a>
              </p>
            </div>
          </div>

          <div
            className="map-placeholder"
            onClick={openMaps}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && openMaps()}
            aria-label="Open location in Google Maps"
          >
            <div className="map-grid" />
            <div className="map-roads" />
            <div className="map-pin">
              <div className="map-pin__icon" />
              <div className="map-pin__label">The Copper Tap</div>
              <div className="map-pin__sub">1247 Hwy 20, Fonthill ON</div>
            </div>
            <span className="map-placeholder__cta">Open in Maps →</span>
          </div>
        </div>
      </div>
    </section>
  )
}
