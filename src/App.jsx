import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import OnTap from './components/OnTap'
import FoodMenu from './components/FoodMenu'
import Events from './components/Events'
import Location from './components/Location'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <OnTap />
        <FoodMenu />
        <Events />
        <Location />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
