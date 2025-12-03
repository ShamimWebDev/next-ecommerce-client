import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">NextShop</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your trusted destination for quality products and great deals. 
            Experience the future of shopping with us.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-blue-500 hover:bg-blue-500/10 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-pink-500 hover:bg-pink-500/10 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-sky-400 hover:bg-sky-400/10 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Shop</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/products" className="hover:text-primary transition-colors">All Products</Link></li>
            <li><Link href="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
            <li><Link href="/deals" className="hover:text-primary transition-colors">Deals</Link></li>
            <li><Link href="/new" className="hover:text-primary transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            <li><Link href="/returns" className="hover:text-primary transition-colors">Returns & Refunds</Link></li>
            <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Info</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
          <p className="text-sm text-slate-400 mb-4">
            Subscribe to our newsletter for exclusive deals and updates.
          </p>
          <div className="flex flex-col gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-primary"
            />
            <Button className="w-full gap-2">
              Subscribe <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} NextShop. All rights reserved.</p>
      </div>
    </footer>
  );
}
