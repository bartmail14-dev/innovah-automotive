import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyInnovah from './components/sections/WhyInnovah'
import Workshop from './components/sections/Workshop'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyInnovah />
        <Workshop />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
