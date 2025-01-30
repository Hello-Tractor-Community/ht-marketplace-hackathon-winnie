import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative bg-green-50 py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(/Images/Hero-Tractor.jpg)' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight mb-4 text-shadow">
            Find Your Perfect Tractor
          </h1>
          <p className="text-xl mb-6 text-shadow">
            Buy and sell second-hand tractors and agri-implements with ease.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <Button
              size="lg"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none transition-all"
            >
              Start Browsing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-gray-100 focus:outline-none transition-all"
            >
              Sell Your Tractor
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500 h-6 w-6" />
              <span className="text-lg">10,000+ Listings</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500 h-6 w-6" />
              <span className="text-lg">Trusted Sellers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
