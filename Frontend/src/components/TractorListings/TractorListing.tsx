import React, { useState } from 'react'
import { Tractor } from './types'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, MapPin, Clock, DollarSign, Edit, Trash } from 'lucide-react'

interface TractorListingProps {
  tractor: Tractor;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TractorListing({ tractor, onEdit, onDelete }: TractorListingProps) {
  const [showContact, setShowContact] = useState(false)

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{tractor.title}</CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{tractor.location}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {tractor.images.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image} alt={`Tractor image ${index + 1}`} className="w-full h-64 object-cover rounded" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="mt-4 space-y-2">
          <p>{tractor.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{tractor.age} years old</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{tractor.hoursUsed} hours used</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4" />
            <span className="text-2xl font-bold">${tractor.price.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Contact Seller</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Seller Contact Information</DialogTitle>
              <DialogDescription>
                {showContact ? (
                  <div>
                    <p>Name: John Doe</p>
                    <p>Email: john@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                  </div>
                ) : (
                  <Button onClick={() => setShowContact(true)}>Show Contact Info</Button>
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={() => onEdit(tractor.id)}>
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => onDelete(tractor.id)}>
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
