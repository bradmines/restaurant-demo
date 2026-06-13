function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" role="img" aria-label="Warm pub interior at dusk" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">Fonthill, Niagara Region</p>

        <h1 className="hero__title">
          Honest Beer.<br />
          <em>House-Made</em> Food.<br />
          Good Company.
        </h1>

        <p className="hero__sub">
          A neighbourhood craft beer pub and kitchen nestled in the heart of the Niagara Peninsula — where local taps flow freely and every plate is made from scratch.
        </p>

        <div className="hero__actions">
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('#menu')}
          >
            View Menu
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollTo('#on-tap')}
          >
            See What's On Tap
          </button>
        </div>
      </div>

      <button
        className="hero__scroll"
        onClick={() => scrollTo('#about')}
        aria-label="Scroll down"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        <span>Discover</span>
      </button>
    </section>
  )
}
