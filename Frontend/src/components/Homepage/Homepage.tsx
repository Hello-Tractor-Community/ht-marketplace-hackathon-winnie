import Header from './Header'
import HeroSection from './HeroSection'
import FeaturedListings from './FeaturedListings'
import Footer from './Footer'
import DealerListingsPromo from './DealerListingsPromo'

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedListings />
        <DealerListingsPromo />
      </main>
      <Footer />
    </div>
  )
}
