import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'

interface DealerFiltersProps {
  onFilterChange: (filters: Record<string, any>) => void
}

const DealerFilters: React.FC<DealerFiltersProps> = ({ onFilterChange }) => {
  const [location, setLocation] = useState('')
  const [dealerType, setDealerType] = useState('')
  const [rating, setRating] = useState([0, 5])

  const handleApplyFilters = () => {
    onFilterChange({ location, dealerType, rating })
  }

  return (
    <div className="space-y-4 mb-6">
      <Input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Select value={dealerType} onValueChange={setDealerType}>
        <option value="">All Types</option>
        <option value="sales">Sales</option>
        <option value="service">Service</option>
        <option value="parts">Parts</option>
      </Select>
      <div>
        <label className="block text-sm font-medium mb-2">Rating</label>
        <Slider
          min={0}
          max={5}
          step={0.5}
          value={rating}
          onValueChange={setRating}
        />
        <div className="flex justify-between text-sm mt-1">
          <span>{rating[0]}</span>
          <span>{rating[1]}</span>
        </div>
      </div>
      <Button onClick={handleApplyFilters} className="w-full">Apply Filters</Button>
    </div>
  )
}

export default DealerFilters;
