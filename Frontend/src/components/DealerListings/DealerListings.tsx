import React, { useState } from 'react'
import DealerList from './DealerList'
import DealerProfile from './DealerProfile'
import DealerFilters from './DealerFilters'
import DealerMap from './DealerMap'
import DealerNotifications from './DealerNotifications'

const DealerListings: React.FC = () => {
  const [selectedDealer, setSelectedDealer] = useState<number | null>(null)
  const [filters, setFilters] = useState({})

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <DealerFilters onFilterChange={setFilters} />
        <DealerList filters={filters} onDealerSelect={setSelectedDealer} />
      </div>
      <div>
        <DealerMap />
        {selectedDealer && <DealerProfile dealerId={selectedDealer} />}
        <DealerNotifications />
      </div>
    </div>
  )
}

export default DealerListings;
