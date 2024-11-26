import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'

export default function FiltersSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Find Your Ideal Tractor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
            <Select id="brand">
              <option>All Brands</option>
              <option>John Deere</option>
              <option>Massey Ferguson</option>
              <option>New Holland</option>
              <option>Kubota</option>
            </Select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <Input id="location" placeholder="Enter city or region" />
          </div>
          <div>
            <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <Slider
              id="price-range"
              defaultValue={[0, 100000]}
              max={100000}
              step={1000}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>$100,000+</span>
            </div>
          </div>
          <div className="flex items-end">
            <Button className="w-full">Apply Filters</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
