const photos = [
  {
    src: 'https://images.unsplash.com/photo-1574096115613-8a84bfedab76?auto=format&fit=crop&w=900&q=80',
    alt: 'Craft beer taps lined up at the bar',
  },
  {
    src: 'https://images.unsplash.com/photo-1567696911980-2eed69a46e3b?auto=format&fit=crop&w=600&q=80',
    alt: 'Two amber craft beer pints on a wooden table',
  },
  {
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    alt: 'Gourmet pub burger with cheese and fresh toppings',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76538d4c194?auto=format&fit=crop&w=600&q=80',
    alt: 'Classic beer-battered fish and chips',
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
    src: 'https://images.unsplash.com/photo-1608270586636-6bc64f2c7f25?auto=format&fit=crop&w=600&q=80',
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
    src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80',
    alt: 'Elegantly plated pub main course dish',
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
