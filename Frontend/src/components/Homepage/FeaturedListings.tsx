import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const featuredListings = [
  { id: 1, title: 'John Deere 5075E', price: 35000, location: 'Iowa, USA', image: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Massey Ferguson 240', price: 12000, location: 'Punjab, India', image: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'New Holland T6.180', price: 85000, location: 'Ontario, Canada', image: '/placeholder.svg?height=200&width=300' },
  { id: 4, title: 'Kubota M7060', price: 42000, location: 'Texas, USA', image: '/placeholder.svg?height=200&width=300' },
]

export default function FeaturedListings() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <Card key={listing.id}>
              <CardContent className="p-0">
                {/* Replace Image component with <img> */}
                <img src={listing.image} alt={listing.title} width={300} height={200} className="w-full h-48 object-cover" />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <h3 className="text-lg font-semibold mb-2">{listing.title}</h3>
                <p className="text-green-600 font-bold mb-2">${listing.price.toLocaleString()}</p>
                <Badge variant="secondary">{listing.location}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
