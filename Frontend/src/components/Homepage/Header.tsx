import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tractor, User, MessageSquare, Bell, Search, ChevronDown, ShoppingCart } from 'lucide-react';

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Tractor className="h-8 w-8 text-orange-600" />
          <span className="text-xl font-bold text-gray-800">TractorTrade</span>
        </Link>
        
        {/* Center: Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search by model, brand, location…"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-orange-600"
          />
          <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 text-white rounded-full p-2">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          {/* Sell Button */}
          <Link to="/sell">
            <Button className="bg-orange-600 text-white px-4 py-2 rounded-lg">Sell a Tractor</Button>
          </Link>

          {/* Messaging Icon */}
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-6 w-6 text-gray-700" />
          </Button>
          
          {/* Notifications Dropdown */}
          <div className="relative">
            <Button variant="ghost" size="icon" onClick={() => setNotificationsOpen(!isNotificationsOpen)}>
              <Bell className="h-6 w-6 text-gray-700" />
            </Button>
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-md rounded-md p-3">
                <p className="text-sm text-gray-600">No new notifications</p>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <Button variant="outline" onClick={() => setProfileOpen(!isProfileOpen)}>
              <User className="h-5 w-5 mr-2" /> Sign In
            </Button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md p-3">
                <Link to="/login" className="block text-gray-700 hover:text-orange-600 py-2">Login</Link>
                <Link to="/register" className="block text-gray-700 hover:text-orange-600 py-2">Register</Link>
                <Link to="/dashboard" className="block text-gray-700 hover:text-orange-600 py-2">Dashboard</Link>
                <Link to="/wishlist" className="block text-gray-700 hover:text-orange-600 py-2">Wishlist</Link>
                <Link to="/messages" className="block text-gray-700 hover:text-orange-600 py-2">Messages</Link>
                <Link to="/settings" className="block text-gray-700 hover:text-orange-600 py-2">Settings</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
