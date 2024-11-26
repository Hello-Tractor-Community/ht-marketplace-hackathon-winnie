import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="bg-green-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Tractor</h1>
        <p className="text-xl text-gray-600 mb-8">Buy and sell second-hand tractors and agri-implements with ease</p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">Start Browsing</Button>
          <Button size="lg" variant="outline">Sell Your Tractor</Button>
        </div>
      </div>
    </section>
  )
}
