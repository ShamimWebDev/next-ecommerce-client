"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        toast.info("Item quantity updated in cart");
        return prev.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast.success("Added to cart");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item._id !== productId));
    toast.error("Removed from cart");
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item._id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Cart cleared");
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item._id === product._id)) {
        toast.info("Already in wishlist");
        return prev;
      }
      toast.success("Added to wishlist");
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item._id !== productId));
    toast.error("Removed from wishlist");
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
