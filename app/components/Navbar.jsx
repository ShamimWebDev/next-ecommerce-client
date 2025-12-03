"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { useState } from "react";
import { Menu, X, ShoppingBag, Heart, User, LogOut, Package, PlusCircle, Settings } from "lucide-react";
import { Button } from "@/app/components/ui/button";

/**
 * Navigation Bar Component
 * 
 * A responsive navigation bar with authentication support, mobile menu,
 * and role-based navigation links for admin users.
 * 
 * Features:
 * - Sticky header with backdrop blur effect
 * - Mobile-responsive hamburger menu
 * - User authentication state management
 * - Admin-specific navigation links
 * - Wishlist and cart quick access
 * 
 * @returns {JSX.Element} The navigation bar component
 */
export default function Navbar() {
  // Retrieve current user session from NextAuth
  const { data: session } = useSession();
  
  // State management for dropdown and mobile menu visibility
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Main navigation links configuration
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand Logo and Name */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary tracking-tight">
            <ShoppingBag className="h-6 w-6" />
            <span>NextShop</span>
          </Link>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Section - Auth & Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Wishlist Icon Button */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>

            {/* Shopping Cart Icon Button */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>

            {/* Conditional Rendering: User Menu or Login Button */}
            {session ? (
              <div className="relative">
                {/* User Avatar Button - Toggles Dropdown */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full"
                  onClick={() => setOpen(!open)}
                >
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>

                {/* User Dropdown Menu */}
                {open && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-background border shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-2 space-y-1">
                      
                      {/* User Info Display */}
                      <div className="px-3 py-2 border-b">
                        <p className="text-sm font-medium">{session.user?.name || "User"}</p>
                        <p className="text-xs text-muted-foreground truncate">{session.user?.email}</p>
                      </div>

                      {/* Admin-Only Navigation Links */}
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/add-product" className="flex items-center gap-2">
                          <PlusCircle className="h-4 w-4" />
                          Add Product
                        </Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/manage-products" className="flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          Manage Products
                        </Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/settings" className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          Settings
                        </Link>
                      </Button>

                      {/* Logout Button with Toast Notification */}
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => {
                          signOut();
                          toast.info("👋 Logged out successfully");
                          setOpen(false);
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Display Login and Register Buttons if User Not Authenticated
              <div className="flex items-center gap-2">
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu Panel - Slides in from top */}
        {mobileMenu && (
          <div className="md:hidden py-4 space-y-4">
            
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={() => setMobileMenu(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t pt-4 space-y-2">
              
              {/* Mobile Quick Access Links */}
              <Link
                href="/wishlist"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={() => setMobileMenu(false)}
              >
                <Heart className="h-5 w-5" />
                Wishlist
              </Link>
              <Link
                href="/cart"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={() => setMobileMenu(false)}
              >
                <ShoppingBag className="h-5 w-5" />
                Cart
              </Link>

              {/* Conditional Mobile Auth Section */}
              {session ? (
                <>
                  {/* Mobile Admin Links */}
                  <Link
                    href="/add-product"
                    className="flex items-center gap-2 px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md"
                    onClick={() => setMobileMenu(false)}
                  >
                    <PlusCircle className="h-5 w-5" />
                    Add Product
                  </Link>
                  <Link
                    href="/manage-products"
                    className="flex items-center gap-2 px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md"
                    onClick={() => setMobileMenu(false)}
                  >
                    <Package className="h-5 w-5" />
                    Manage Products
                  </Link>
                  
                  {/* Mobile Logout Option */}
                  <button
                    onClick={() => {
                      signOut();
                      toast.info("👋 Logged out successfully");
                      setMobileMenu(false);
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-base font-medium text-destructive hover:bg-destructive/10 rounded-md"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </>
              ) : (
                // Mobile Login and Register Links
                <>
                  <Link
                    href="/login"
                    className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md"
                    onClick={() => setMobileMenu(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block px-3 py-2 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-center"
                    onClick={() => setMobileMenu(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
