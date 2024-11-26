import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DealerServiceRequest from './DealerServiceRequest'

interface DealerProfileProps {
  dealerId: number
}

const DealerProfile: React.FC<DealerProfileProps> = ({ dealerId }) => {
  // Mock data - replace with actual API call
  const dealer = {
    id: dealerId,
    name: "John's Tractors",
    description: "Specializing in John Deere tractors and implements.",
    services: ["Sales", "Repairs", "Parts"],
    rating: 4.5,
    reviews: [
      { id: 1, author: "Farmer Brown", content: "Great service and fair prices!" },
      { id: 2, author: "Jane Doe", content: "Always reliable and knowledgeable." },
    ],
    contact: {
      phone: "+1 (555) 123-4567",
      email: "info@johnstractors.com",
      address: "123 Farm Road, Cornville, Iowa, USA",
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dealer.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{dealer.description}</p>
        <h3 className="font-bold mb-2">Services:</h3>
        <ul className="list-disc list-inside mb-4">
          {dealer.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <h3 className="font-bold mb-2">Reviews:</h3>
        <div className="space-y-2 mb-4">
          {dealer.reviews.map(review => (
            <div key={review.id} className="bg-gray-100 p-2 rounded">
              <p className="font-semibold">{review.author}</p>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
        <h3 className="font-bold mb-2">Contact:</h3>
        <p>Phone: {dealer.contact.phone}</p>
        <p>Email: {dealer.contact.email}</p>
        <p>Address: {dealer.contact.address}</p>
        <DealerServiceRequest dealerId={dealer.id} />
      </CardContent>
    </Card>
  )
}

export default DealerProfile;
