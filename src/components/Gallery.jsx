const photos = [
  {
    // From Unsplash craft beer search — beer pour/tap scene
    src: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&w=900&q=80',
    alt: 'Craft beer being poured at the bar',
  },
  {
    // From Unsplash craft beer search — craft beer glass
    src: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=600&q=80',
    alt: 'Craft beer pint glass on a wooden table',
  },
  {
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    alt: 'Gourmet pub burger with cheese and fresh toppings',
  },
  {
    // From Unsplash pub food search
    src: 'https://images.unsplash.com/photo-1519233991914-26a44330ccd7?auto=format&fit=crop&w=600&q=80',
    alt: 'Pub food plate with fries and sides',
  },
  {
    // Fills the grid gap at col 4 row 2 — from Unsplash pub food search
    src: 'https://images.unsplash.com/photo-1611698529138-c5968262a080?auto=format&fit=crop&w=600&q=80',
    alt: 'Hearty pub dish served on a rustic plate',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    alt: 'Warm pub dining room with candles and atmosphere',
  },
  {
    src: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80',
    alt: 'Close up of beer being poured from a tap',
  },
  {
    // From Unsplash craft beer search — amber ale
    src: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80',
    alt: 'Craft beer glass with golden amber ale',
  },
  {
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80',
    alt: 'Loaded pub burger with fries on a wooden board',
  },
  {
    src: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=600&q=80',
    alt: 'Crispy chicken wings with sauces',
  },
  {
    src: 'https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?auto=format&fit=crop&w=600&q=80',
    alt: 'Hearty pub main course plated to serve',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__header">
          <p className="section-label">The Atmosphere</p>
          <h2 className="section-title">Food, Beer &amp; Good Vibes</h2>
        </div>

        <div className="gallery__grid">
          {photos.map((p, i) => (
            <div className="gallery__item" key={i}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
