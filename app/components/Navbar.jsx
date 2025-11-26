"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold text-indigo-600">
          NextShop
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-slate-700 hover:text-slate-900">Home</Link>
          <Link href="/products" className="text-slate-700 hover:text-slate-900">Products</Link>
          <Link href="/about" className="text-slate-700 hover:text-slate-900">About</Link>
          <Link href="/contact" className="text-slate-700 hover:text-slate-900">Contact</Link>

          {session ? (
            <div className="relative">
              {/* User button */}
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-sm"
              >
                <span className="text-slate-700">{session.user?.name}</span>
                <svg
                  className="w-4 h-4 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  <div className="px-4 py-2 text-sm text-slate-600 border-b">
                    {session.user?.email}
                  </div>
                  <Link
                    href="/add-product"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    onClick={() => setOpen(false)}
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/manage-products"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    onClick={() => setOpen(false)}
                  >
                    Manage Products
                  </Link>
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: "/login" });
                      toast.info("👋 Logged out successfully");
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="text-slate-700 hover:text-slate-900">Login</Link>
              <Link
                href="/register"
                className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 text-sm"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-slate-100"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <svg
            className="w-6 h-6 text-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2">
          <Link href="/" className="block text-slate-700 hover:text-slate-900">Home</Link>
          <Link href="/products" className="block text-slate-700 hover:text-slate-900">Products</Link>
          <Link href="/about" className="block text-slate-700 hover:text-slate-900">About</Link>
          <Link href="/contact" className="block text-slate-700 hover:text-slate-900">Contact</Link>

          {session ? (
            <>
              <Link href="/add-product" className="block text-slate-700 hover:text-slate-900">Add Product</Link>
              <Link href="/manage-products" className="block text-slate-700 hover:text-slate-900">Manage Products</Link>
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/login" });
                  toast.info("👋 Logged out successfully");
                  setMobileMenu(false);
                }}
                className="block w-full text-left text-red-600 hover:text-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block text-slate-700 hover:text-slate-900">Login</Link>
              <Link
                href="/register"
                className="block px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 text-sm mt-2"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
