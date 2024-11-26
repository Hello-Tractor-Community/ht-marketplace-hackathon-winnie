import React, { useState } from 'react'
import TractorForm from './TractorForm'
import TractorList from './TractorList'
import { Tractor, TractorFormData } from './types'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function TractorListings() {
  const [tractors, setTractors] = useState<Tractor[]>([])
  const [editingTractor, setEditingTractor] = useState<Tractor | null>(null)

  const handleSubmit = (data: TractorFormData) => {
    if (editingTractor) {
      setTractors(prevTractors =>
        prevTractors.map(tractor =>
          tractor.id === editingTractor.id ? { ...tractor, ...data } : tractor
        )
      )
      setEditingTractor(null)
    } else {
      const newTractor: Tractor = {
        ...data,
        id: Date.now().toString(),
        sellerId: 'user123' // This should be the actual user ID in a real application
      }
      setTractors(prevTractors => [...prevTractors, newTractor])
    }
  }

  const handleEdit = (id: string) => {
    const tractor = tractors.find(t => t.id === id)
    if (tractor) {
      setEditingTractor(tractor)
    }
  }

  const handleDelete = (id: string) => {
    setTractors(prevTractors => prevTractors.filter(tractor => tractor.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tractor Listings</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mb-4">Add New Listing</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{editingTractor ? 'Edit Listing' : 'Add New Listing'}</DialogTitle>
            <DialogDescription>
              Fill in the details of your tractor listing below.
            </DialogDescription>
          </DialogHeader>
          <TractorForm onSubmit={handleSubmit} initialData={editingTractor || undefined} />
        </DialogContent>
      </Dialog>
      <TractorList tractors={tractors} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}
