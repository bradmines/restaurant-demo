const beers = [
  {
    name: 'Harvest Gold Lager',
    style: 'American Lager',
    abv: '4.8%',
    ibu: '18 IBU',
    desc: 'Crisp and clean with a gentle honey sweetness and a dry, refreshing finish. The perfect session opener.',
    color: 'linear-gradient(90deg, #f5c842, #e8a020)',
  },
  {
    name: 'Copper Creek IPA',
    style: 'New England IPA',
    abv: '6.2%',
    ibu: '55 IBU',
    desc: 'Hazy and unfiltered with an abundance of tropical citrus, ripe mango, and soft pine on the nose.',
    color: 'linear-gradient(90deg, #e07820, #c45a10)',
  },
  {
    name: 'Ironstone Stout',
    style: 'Oatmeal Stout',
    abv: '5.4%',
    ibu: '32 IBU',
    desc: 'Rich, velvety, and deeply satisfying — notes of dark chocolate, espresso, and a whisper of vanilla.',
    color: 'linear-gradient(90deg, #3a2418, #1e1008)',
  },
  {
    name: 'Ridgeway Red',
    style: 'Irish Red Ale',
    abv: '4.6%',
    ibu: '22 IBU',
    desc: 'Malt-forward with a subtle caramel sweetness, light toasted bread character, and a smooth, easy finish.',
    color: 'linear-gradient(90deg, #9a2810, #6e1808)',
  },
  {
    name: 'Blossom Wheat',
    style: 'Hefeweizen',
    abv: '4.9%',
    ibu: '14 IBU',
    desc: 'Light and refreshing with classic banana ester and gentle clove spice. Unfiltered and naturally hazy.',
    color: 'linear-gradient(90deg, #f0d870, #d4b030)',
  },
  {
    name: 'Midnight Porter',
    style: 'Robust Porter',
    abv: '5.8%',
    ibu: '38 IBU',
    desc: 'Bold roasted malt backbone with bittersweet chocolate, a hint of vanilla, and a silky smooth body.',
    color: 'linear-gradient(90deg, #5a3018, #301808)',
  },
]

export default function OnTap() {
  return (
    <section id="on-tap" className="on-tap">
      <div className="container">
        <div className="on-tap__header">
          <p className="section-label">Rotating Craft Selection</p>
          <h2 className="section-title">What's On Tap</h2>
          <p className="section-subtitle">
            Our taps rotate seasonally — supporting Ontario's finest independent breweries alongside our own house favourites.
          </p>
        </div>

        <div className="on-tap__grid">
          {beers.map(beer => (
            <div className="beer-card" key={beer.name}>
              <div className="beer-card__swatch" style={{ background: beer.color }} />
              <p className="beer-card__style">{beer.style}</p>
              <h3 className="beer-card__name">{beer.name}</h3>
              <p className="beer-card__desc">{beer.desc}</p>
              <div className="beer-card__meta">
                <span className="beer-card__abv">{beer.abv} ABV</span>
                <span className="beer-card__ibu">{beer.ibu}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
