import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Dealer {
  id: number
  name: string
  location: string
  rating: number
}

interface DealerCardProps {
  dealer: Dealer
  onSelect: () => void
}

const DealerCard: React.FC<DealerCardProps> = ({ dealer, onSelect }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{dealer.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">Location: {dealer.location}</p>
        <p className="mb-4">Rating: {dealer.rating} / 5</p>
        <Button onClick={onSelect}>View Profile</Button>
      </CardContent>
    </Card>
  )
}

export default DealerCard;
