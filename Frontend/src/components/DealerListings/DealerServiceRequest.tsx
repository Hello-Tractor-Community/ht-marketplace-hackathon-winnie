import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface DealerServiceRequestProps {
  dealerId: number
}

const DealerServiceRequest: React.FC<DealerServiceRequestProps> = ({ dealerId }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send to API)
    console.log('Service request submitted:', { dealerId, name, email, message })
    // Reset form
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h3 className="font-bold mb-4">Request Service</h3>
      <div className="space-y-4">
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          placeholder="Describe the service you need"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">Submit Request</Button>
      </div>
    </form>
  )
}

export default DealerServiceRequest;
