import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, DollarSign, Star } from 'lucide-react';

const featuredListings = [
  { id: 1, title: 'John Deere 5075E', price: 35000, location: 'Iowa, USA', image: '/images/john-deere-5075e.jpg', category: 'Tractor' },
  { id: 2, title: 'Massey Ferguson 240', price: 12000, location: 'Punjab, India', image: '/images/massey-ferguson-240.jpg', category: 'Tractor' },
  { id: 3, title: 'New Holland T6.180', price: 85000, location: 'Ontario, Canada', image: '/images/new-holland-t6180.jpg', category: 'Tractor' },
  { id: 4, title: 'Kubota M7060', price: 42000, location: 'Texas, USA', image: '/images/kubota-m7060.jpg', category: 'Tractor' },
];

export default function FeaturedListings() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Featured Listings</h2>
        <p className="text-center text-gray-600 mb-10">Explore top deals on second-hand tractors and agricultural equipment.</p>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredListings.map((listing) => (
            <Card
              key={listing.id}
              className="shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden bg-white border border-gray-200"
            >
              <CardContent className="relative p-0">
                {/* Featured Tag */}
                <Badge className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 text-xs font-semibold rounded-md">
                  Featured
                </Badge>
                <img 
                  src={listing.image} 
                  alt={listing.title} 
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                />
              </CardContent>

              <CardFooter className="p-4 flex flex-col space-y-3">
                {/* Category Badge */}
                <Badge className="bg-gray-100 text-gray-800 text-xs px-2 py-1">{listing.category}</Badge>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">{listing.title}</h3>

                {/* Price */}
                <div className="flex items-center text-green-600 font-bold">
                  <DollarSign className="h-5 w-5 mr-1" />
                  <span>${listing.price.toLocaleString()}</span>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-5 w-5 mr-1 text-gray-500" />
                  <span>{listing.location}</span>
                </div>

                {/* CTA Button */}
                <div className="mt-4 flex justify-center w-full">
                  <Button size="sm" className="bg-orange-600 text-white hover:bg-orange-700 w-full">
                    View Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-10">
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3">
            Explore More Listings
          </Button>
        </div>
      </div>
    </section>
  );
}
