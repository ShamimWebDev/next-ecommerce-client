"use client";

import { useShop } from "@/context/ShopContext";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useShop();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg">
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart ({cart.length} items)</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 space-y-4">
          {cart.map((item) => (
            <Card key={item._id} className="flex flex-col sm:flex-row overflow-hidden">
              <div className="relative w-full sm:w-40 h-40 bg-muted">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    No Image
                  </div>
                )}
              </div>
              
              <div className="flex-1 flex flex-col justify-between p-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                  </div>
                  <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2 border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 gap-1"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Remove</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
          
          <div className="flex justify-end pt-4">
            <Button variant="outline" onClick={clearCart} className="text-muted-foreground">
              Clear Cart
            </Button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="w-full lg:w-80">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
