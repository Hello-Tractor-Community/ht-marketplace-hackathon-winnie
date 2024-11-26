import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { TractorFormData } from './types'

const tractorTypes = [
  "Compact Tractor",
  "Utility Tractor",
  "Row Crop Tractor",
  "Garden Tractor",
  "Orchard Tractor",
  "Other"
]

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters long" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters long" }),
  age: z.number().min(0, { message: "Age must be a positive number" }),
  hoursUsed: z.number().min(0, { message: "Hours used must be a positive number" }),
  price: z.number().min(0, { message: "Price must be a positive number" }),
  location: z.string().min(3, { message: "Location must be at least 3 characters long" }),
  type: z.string().min(1, { message: "Please select a tractor type" }),
  images: z.array(z.string()).min(1, { message: "Please upload at least one image" }),
  specifications: z.record(z.string())
})

interface TractorFormProps {
  onSubmit: (data: TractorFormData) => void;
  initialData?: Partial<TractorFormData>;
}

export default function TractorForm({ onSubmit, initialData }: TractorFormProps) {
  const [images, setImages] = useState<string[]>(initialData?.images || [])

  const form = useForm<TractorFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: '',
      description: '',
      age: 0,
      hoursUsed: 0,
      price: 0,
      location: '',
      type: '',
      images: [],
      specifications: {}
    }
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file))
      setImages(prevImages => [...prevImages, ...newImages])
      form.setValue('images', [...images, ...newImages])
    }
  }

  const handleSubmit = (data: TractorFormData) => {
    onSubmit(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter tractor title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your tractor" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age (years)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} onChange={e => field.onChange(+e.target.value)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hoursUsed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hours Used</FormLabel>
                <FormControl>
                  <Input type="number" {...field} onChange={e => field.onChange(+e.target.value)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price ($)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} onChange={e => field.onChange(+e.target.value)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tractor Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a tractor type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {tractorTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Input type="file" multiple onChange={handleImageUpload} />
              </FormControl>
              <FormDescription>Upload images of your tractor (max 5)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Tractor image ${index + 1}`} className="w-full h-40 object-cover rounded" />
            ))}
          </div>
        )}

        <Button type="submit">Submit Listing</Button>
      </form>
    </Form>
  )
}
