import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-gray-400">
              TractorTrade is your trusted platform for buying and selling second-hand tractors and agri-implements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/dealers" className="hover:text-white">Find Dealers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p>Email: <a href="mailto:support@tractortrade.com" className="hover:text-white">support@tractortrade.com</a></p>
            <p>Phone: <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a></p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-10 bg-gray-800 py-6 px-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 text-sm">Get the latest tractor listings and offers straight to your inbox.</p>
          <form className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-64 rounded-l-lg border border-gray-600 bg-gray-700 text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p>&copy; 2024 TractorTrade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
