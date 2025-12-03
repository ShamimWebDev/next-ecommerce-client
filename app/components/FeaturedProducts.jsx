"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Eye, ShoppingCart, Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, addToWishlist } = useShop();

  useEffect(() => {
    axios
      .get("https://next-ecommerce-server-eta.vercel.app/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-1/4 mx-auto"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-96 bg-muted rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of top-rated items. Quality and style in every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <Card key={p._id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-muted">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
                  variant="secondary"
                  size="icon"
                  className="absolute top-3 right-3 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => addToWishlist(p)}
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardHeader className="p-4 pb-2">
                <CardTitle className="line-clamp-1 text-lg group-hover:text-primary transition-colors">
                  {p.title}
                </CardTitle>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xl font-bold text-primary">${p.price}</span>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {p.shortDesc}
                </p>
              </CardContent>

              <CardFooter className="p-4 pt-0 gap-2">
                <Button asChild variant="outline" className="flex-1 gap-2">
                  <Link href={`/products/${p._id}`}>
                    <Eye className="h-4 w-4" /> Details
                  </Link>
                </Button>
                <Button className="flex-1 gap-2" onClick={() => addToCart(p)}>
                  <ShoppingCart className="h-4 w-4" /> Add
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
