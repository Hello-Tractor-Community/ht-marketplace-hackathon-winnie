import Header from './Header'
import HeroSection from './HeroSection'
import FeaturedListings from './FeaturedListings'
import FiltersSection from './FiltersSection'
import Footer from './Footer'

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedListings />
        <FiltersSection />
      </main>
      <Footer />
    </div>
  )
}