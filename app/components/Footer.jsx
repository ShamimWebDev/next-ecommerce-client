import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">NextShop</h3>
          <p className="mt-3 text-sm">
            Your trusted destination for quality products and great deals.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/products" className="hover:text-white">All Products</a></li>
            <li><a href="/categories" className="hover:text-white">Categories</a></li>
            <li><a href="/deals" className="hover:text-white">Deals</a></li>
            <li><a href="/new" className="hover:text-white">New Arrivals</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/returns" className="hover:text-white">Returns & Refunds</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping Info</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
        &copy; 2025 NextShop. All rights reserved.
      </div>
    </footer>
  );
}
