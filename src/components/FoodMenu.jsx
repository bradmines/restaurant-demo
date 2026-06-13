import { useState } from 'react'

const menu = {
  Shareables: {
    note: null,
    items: [
      { name: 'Copper Tap Wings', desc: 'Crispy chicken wings, choice of sauce — buffalo, honey garlic, or dry rub. Served with house blue cheese.', price: '$18' },
      { name: 'Warm Pretzel Board', desc: 'Three soft pretzels, whole grain mustard, beer cheese dip, and pickled jalapeños.', price: '$14' },
      { name: 'Smoked Whitefish Dip', desc: 'House-smoked Ontario whitefish, pickled cucumber, capers, grilled flatbread.', price: '$17' },
      { name: 'The Copper Poutine', desc: 'Hand-cut fries, slow-braised beef gravy, squeaky cheese curds, crispy shallots.', price: '$15' },
      { name: 'Mushroom Flatbread', desc: 'Wild mushroom blend, caramelised onion, goat cheese, thyme, arugula finish.', price: '$16' },
      { name: 'Charcuterie Board', desc: 'Selection of Ontario charcuterie, aged cheddar, pickles, grain mustard, house crackers.', price: '$24' },
    ],
  },
  Mains: {
    note: null,
    items: [
      { name: 'Braised Short Rib', desc: '12-hour braised beef short rib, roasted garlic mash, seasonal vegetables, red wine jus.', price: '$34' },
      { name: 'Beer-Battered Fish & Chips', desc: 'Fresh Ontario walleye, hand-cut fries, house tartar sauce, lemon, malt vinegar.', price: '$26' },
      { name: 'Pan-Seared Salmon', desc: 'Atlantic salmon, lemon caper butter, roasted fingerling potatoes, haricots verts.', price: '$32' },
      { name: "Shepherd's Pie", desc: 'Slow-cooked lamb and root vegetable filling, whipped potato crown, side green salad.', price: '$27' },
      { name: 'Grain Bowl', desc: 'Farro, roasted squash, pickled red onion, feta, toasted seeds, lemon tahini dressing.', price: '$21' },
      { name: 'Steak Frites', desc: '8oz Ontario striploin, hand-cut fries, peppercorn sauce, roasted garlic butter.', price: '$42' },
    ],
  },
  Burgers: {
    note: 'All burgers served on a toasted brioche bun with house fries or a side salad.',
    items: [
      { name: 'The Copper Classic', desc: '6oz beef patty, aged white cheddar, bread and butter pickles, shredded lettuce, house sauce.', price: '$20' },
      { name: 'Mushroom & Brie', desc: 'Beef patty, sautéed wild mushrooms, double cream brie, arugula, whole grain Dijon.', price: '$22' },
      { name: 'The Smokehouse', desc: 'Beef patty, smoked double-smoked bacon, crispy fried onions, BBQ aioli, sharp cheddar.', price: '$21' },
      { name: 'Garden Patty', desc: 'House-made black bean and roasted vegetable patty, avocado, roasted red pepper, micro greens.', price: '$18' },
    ],
  },
  'Sunday Roast': {
    note: 'Available Sundays only, from 12pm until sold out.',
    items: [
      { name: 'Prime Rib of Beef', desc: 'Slow-roasted prime rib, Yorkshire pudding, roasted potatoes, seasonal vegetables, au jus.', price: '$38' },
      { name: 'Roasted Half Chicken', desc: 'Herb-brined free-range chicken, sage and onion stuffing, roast potatoes, roasting gravy.', price: '$29' },
      { name: 'Pork Belly', desc: 'Crispy-skinned pork belly, apple and fennel compote, dauphinoise potato, seasonal greens.', price: '$32' },
      { name: "Vegetarian Wellington", desc: 'Mushroom and lentil duxelles in golden puff pastry, red wine reduction, roasted root veg.', price: '$26' },
    ],
  },
}

const categories = Object.keys(menu)

export default function FoodMenu() {
  const [active, setActive] = useState('Shareables')
  const { note, items } = menu[active]

  return (
    <section id="menu" className="food-menu">
      <div className="container">
        <div className="food-menu__header">
          <p className="section-label">Kitchen</p>
          <h2 className="section-title">The Menu</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Scratch-made from local ingredients. Dishes change with the seasons — what's listed is what's on.
          </p>
        </div>

        <div className="food-menu__tabs" role="tablist">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              className={`food-menu__tab${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
              aria-selected={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {note && <p className="food-menu__category-note">{note}</p>}

        <div className="menu-grid" role="tabpanel">
          {items.map(item => (
            <div className="menu-item" key={item.name}>
              <div className="menu-item__info">
                <p className="menu-item__name">{item.name}</p>
                <p className="menu-item__desc">{item.desc}</p>
              </div>
              <span className="menu-item__price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
