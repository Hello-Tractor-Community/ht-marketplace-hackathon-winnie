import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Tractor, User, MessageSquare, Bell, Search, ChevronDown, ShoppingCart, Heart, Globe, MapPin, Layers
} from 'lucide-react';

export default function Header() {
  const [dropdowns, setDropdowns] = useState({
    profile: false,
    notifications: false,
    country: false,
    language: false,
    categories: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      profile: false,
      notifications: false,
      country: false,
      language: false,
      categories: false,
      [key]: !prev[key],
    }));
  };

  const closeDropdowns = (event) => {
    if (!event.target.closest(".dropdown")) {
      setDropdowns({ profile: false, notifications: false, country: false, language: false, categories: false });
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Categories Dropdown */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <Tractor className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-800">TractorTrade</span>
          </Link>
          <div className="relative dropdown">
            <Button variant="ghost" onClick={() => toggleDropdown('categories')} className="flex items-center">
              <Layers className="h-6 w-6 text-gray-700 mr-2" /> Categories <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            {dropdowns.categories && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-md rounded-md p-3">
                <Link to="/tractors" className="block py-2 hover:text-orange-600">Tractors</Link>
                <Link to="/parts" className="block py-2 hover:text-orange-600">Spare Parts</Link>
                <Link to="/implements" className="block py-2 hover:text-orange-600">Implements</Link>
                <Link to="/dealers" className="block py-2 hover:text-orange-600">Dealers & Technicians</Link>
                <Link to="/trending" className="block py-2 hover:text-orange-600">Trending</Link>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar with Filters */}
        <div className="relative w-1/3 flex items-center">
          <input
            type="text"
            placeholder="Search tractors, parts, dealers…"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-orange-600"
          />
          <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 text-white rounded-full p-2">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link to="/sell">
            <Button className="bg-orange-600 text-white px-4 py-2 rounded-lg">Sell a Tractor</Button>
          </Link>

          {/* Notifications Dropdown */}
          <div className="relative dropdown">
            <Button variant="ghost" size="icon" onClick={() => toggleDropdown('notifications')}>
              <Bell className="h-6 w-6 text-gray-700" />
            </Button>
            {dropdowns.notifications && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-md rounded-md p-3">
                <p className="text-sm text-gray-600">No new notifications</p>
              </div>
            )}
          </div>
          
          {/* Profile Dropdown */}
          <div className="relative dropdown">
            <Button variant="outline" onClick={() => toggleDropdown('profile')}>
              <User className="h-5 w-5 mr-2" /> Sign In
            </Button>
            {dropdowns.profile && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md p-3">
                <Link to="/dashboard" className="block py-2 hover:text-orange-600">Dashboard</Link>
                <Link to="/my-listings" className="block py-2 hover:text-orange-600">My Listings</Link>
                <Link to="/wishlist" className="block py-2 hover:text-orange-600">Wishlist</Link>
                <Link to="/messages" className="block py-2 hover:text-orange-600">Messages</Link>
                <Link to="/settings" className="block py-2 hover:text-orange-600">Settings</Link>
                <Link to="/logout" className="block py-2 hover:text-orange-600">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
