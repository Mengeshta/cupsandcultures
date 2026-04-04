import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import TastingMenu from './components/TastingMenu'
import CultureGallery from './components/CultureGallery'
import InaugurationMenu from './components/InaugurationMenu'
import EventTeaser from './components/EventTeaser'
import Community from './components/Community'
import SocialFeed from './components/SocialFeed'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <Hero />
      <Manifesto />
      <TastingMenu />
      <CultureGallery />
      <InaugurationMenu />
      <EventTeaser />
      <Community />
      <SocialFeed />
      <Footer />
    </div>
  )
}
