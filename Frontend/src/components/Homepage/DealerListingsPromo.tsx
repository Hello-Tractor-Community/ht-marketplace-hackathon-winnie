import { Button } from "@/components/ui/button"
import { Store } from 'lucide-react'
import { Link } from 'react-router-dom';

export default function DealerListingsPromo() {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Trusted Dealers</h2>
        <p className="text-xl text-gray-600 mb-8">Connect with our network of verified tractor and agri-implement dealers</p>
        <Link to="/D ealerListings">
          <Button size="lg" className="inline-flex items-center">
            <Store className="mr-2 h-5 w-5" />
            Explore Dealer Listings
          </Button>
        </Link>
      </div>
    </section>
  )
}
