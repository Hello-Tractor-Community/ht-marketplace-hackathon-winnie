import React from 'react'
import DealerListings from '../components/DealerListings/DealerListings'

const DealerListingsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dealer Listings</h1>
      <DealerListings />
    </div>
  )
}

export default DealerListingsPage;
