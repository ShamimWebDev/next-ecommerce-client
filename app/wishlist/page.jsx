"use client";

import { useShop } from "@/context/ShopContext";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/app/components/ui/badge";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center">
            <Heart className="h-12 w-12 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Your wishlist is empty</h1>
        <p className="text-muted-foreground mb-8">Save items you love to buy later.</p>
        <Button asChild size="lg">
          <Link href="/products">Explore Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Wishlist ({wishlist.length})</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((p) => (
          <Card key={p._id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-square overflow-hidden bg-muted">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  No Image
                </div>
              )}
              {p.category && (
                <Badge className="absolute top-3 left-3 uppercase text-[10px] tracking-wider" variant="secondary">
                  {p.category}
                </Badge>
              )}
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-3 right-3 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeFromWishlist(p._id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <CardHeader className="p-4">
              <CardTitle className="line-clamp-1 text-lg group-hover:text-primary transition-colors">
                {p.title}
              </CardTitle>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold text-primary">${p.price}</span>
              </div>
            </CardHeader>
            
            <CardFooter className="p-4 pt-0 gap-2">
              <Button 
                className="w-full gap-2" 
                onClick={() => {
                  addToCart(p);
                  removeFromWishlist(p._id);
                }}
              >
                <ShoppingCart className="h-4 w-4" /> Move to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
