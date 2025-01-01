import { Button } from '@/components/ui/button'
import { Tractor, User, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Tractor className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-gray-800">TractorTrade</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/buy" className="text-gray-600 hover:text-green-600">Buy</Link></li>
            <li><Link to="/sell" className="text-gray-600 hover:text-green-600">Sell</Link></li>
            <li><Link to="/parts" className="text-gray-600 hover:text-green-600">Parts</Link></li>
            <li><Link to="/operators" className="text-gray-600 hover:text-green-600">Operators</Link></li>
            <li><Link to="/DealerListings" className="text-gray-600 hover:text-green-600">Dealers</Link></li>/
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="outline">
            <User className="h-5 w-5 mr-2" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}
