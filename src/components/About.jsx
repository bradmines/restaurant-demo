const pillars = [
  { label: 'Local on Tap', desc: 'Rotating taps from Niagara and Ontario craft breweries' },
  { label: 'Scratch Kitchen', desc: 'Everything made in-house, from the sauces to the buns' },
  { label: 'Live Music', desc: 'Local and regional acts every Friday and Saturday night' },
  { label: 'Community First', desc: 'Proudly rooted in Fonthill since our very first pour' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__text">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Built for Neighbours,<br />Brewed with Intention</h2>
            <div className="about__body">
              <p>
                The Copper Tap was born out of a simple idea: that a great local pub should feel like an extension of your living room — somewhere warm and unpretentious, where the beer is interesting and the food is worth talking about.
              </p>
              <p>
                Perched between the vineyards and orchards of the Niagara Peninsula, we draw inspiration from the land around us. Our kitchen works with regional farmers and producers, and our taps rotate through some of the finest craft breweries Ontario has to offer.
              </p>
              <p>
                Pull up a stool. Stay a while.
              </p>
            </div>

            <div className="about__pillars">
              {pillars.map(p => (
                <div className="about__pillar" key={p.label}>
                  <strong>{p.label}</strong>
                  <span>{p.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__image-wrap">
            <img
              className="about__image"
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
              alt="Warm, inviting pub interior with exposed brick and warm lighting"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
