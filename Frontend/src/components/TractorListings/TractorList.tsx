import React, { useState } from 'react'
import { Tractor } from './types'
import TractorListing from './TractorListing'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TractorListProps {
  tractors: Tractor[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TractorList({ tractors, onEdit, onDelete }: TractorListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('price')

  const filteredAndSortedTractors = tractors
    .filter(tractor => 
      tractor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tractor.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'age') return a.age - b.age
      return 0
    })

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <Input
          placeholder="Search tractors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="age">Age</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        {filteredAndSortedTractors.map(tractor => (
          <TractorListing
            key={tractor.id}
            tractor={tractor}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}
