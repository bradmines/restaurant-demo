const events = [
  {
    month: 'Jun',
    day: '18',
    dow: 'Wed',
    tag: 'Weekly',
    title: 'Pub Quiz Night',
    desc: 'Think you know it all? Test your knowledge across trivia categories from sports to pop culture. Teams of up to six. Prizes for the top three.',
    time: '7:00 PM – 10:00 PM · Free to enter',
  },
  {
    month: 'Jun',
    day: '20',
    dow: 'Fri',
    tag: 'Live Music',
    title: 'The River Cats',
    desc: 'Blues-roots duo bringing soulful originals and reimagined classics. Performing live on the back patio stage from their latest record.',
    time: '8:00 PM – 11:00 PM · No cover',
  },
  {
    month: 'Jun',
    day: '21',
    dow: 'Sat',
    tag: 'Tap Takeover',
    title: 'Niagara Brewing Co.',
    desc: "We're handing over six of our taps to the team at Niagara Brewing Co. Meet the brewer, sample exclusive and unreleased beers, and grab some merch.",
    time: '3:00 PM – 7:00 PM · Free admission',
  },
  {
    month: 'Jun',
    day: '22',
    dow: 'Sun',
    tag: 'Live Music',
    title: 'Sunday Jazz Sessions',
    desc: 'Acoustic jazz performed live every Sunday afternoon. The perfect pairing to our Sunday Roast menu. Walk-ins welcome.',
    time: '2:00 PM – 5:00 PM · No cover',
  },
  {
    month: 'Jun',
    day: '25',
    dow: 'Wed',
    tag: 'Weekly',
    title: 'Pub Quiz Night',
    desc: "Another round of Fonthill's favourite pub quiz. New questions, same great prizes. Reserve a table to guarantee your spot.",
    time: '7:00 PM – 10:00 PM · Free to enter',
  },
  {
    month: 'Jun',
    day: '28',
    dow: 'Sat',
    tag: 'Live Music',
    title: 'Vera & The Blue Notes',
    desc: "Soulful R&B and jazz-infused originals from one of Niagara's most beloved live acts. An unmissable Saturday night.",
    time: '8:30 PM – 11:30 PM · No cover',
  },
]

export default function Events() {
  return (
    <section id="events" className="events">
      <div className="container">
        <div className="events__header">
          <p className="section-label">What's On</p>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Live music, weekly trivia, tap takeovers, and more — always something worth coming out for.
          </p>
        </div>

        <div className="events__grid">
          {events.map(ev => (
            <div className="event-card" key={`${ev.day}-${ev.title}`}>
              <div className="event-card__date">
                <span className="event-card__month">{ev.month}</span>
                <span className="event-card__day">{ev.day}</span>
                <span className="event-card__dow">{ev.dow}</span>
              </div>
              <div className="event-card__divider" />
              <div className="event-card__body">
                <span className="event-card__tag">{ev.tag}</span>
                <h3 className="event-card__title">{ev.title}</h3>
                <p className="event-card__desc">{ev.desc}</p>
                <p className="event-card__time">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{flexShrink:0}}>
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                  {ev.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
