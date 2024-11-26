import React from 'react'
import DealerCard from './DealerCard'

interface Dealer {
  id: number
  name: string
  location: string
  rating: number
}

interface DealerListProps {
  filters: Record<string, any>
  onDealerSelect: (dealerId: number) => void
}

const DealerList: React.FC<DealerListProps> = ({ filters, onDealerSelect }) => {
  // Mock data - replace with actual API call
  const dealers: Dealer[] = [
    { id: 1, name: "John's Tractors", location: "Iowa, USA", rating: 4.5 },
    { id: 2, name: "Singh Agro Implements", location: "Punjab, India", rating: 4.2 },
    { id: 3, name: "Maple Leaf Machinery", location: "Ontario, Canada", rating: 4.8 },
  ]

  // Apply filtering based on 'filters' prop
  const filteredDealers = dealers.filter(dealer => {
    // Example: filter by location if filter exists
    if (filters.location && dealer.location !== filters.location) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-4">
      {filteredDealers.map(dealer => (
        <DealerCard key={dealer.id} dealer={dealer} onSelect={() => onDealerSelect(dealer.id)} />
      ))}
    </div>
  )
}

export default DealerList;
