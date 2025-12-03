"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent } from "@/app/components/ui/card";
import { ArrowLeft, ShoppingCart, Heart, Share2, Truck, ShieldCheck, Clock } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://next-ecommerce-server-eta.vercel.app/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-[400px] bg-muted rounded-xl animate-pulse" />
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-muted rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
            <div className="h-24 w-full bg-muted rounded animate-pulse" />
            <div className="h-10 w-1/3 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Button asChild className="mt-4">
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" className="mb-6 gap-2" onClick={() => router.back()}>
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden border">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              No Image Available
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {product.category && (
                <Badge variant="secondary" className="uppercase tracking-wider">
                  {product.category}
                </Badge>
              )}
              {product.priority && (
                <Badge variant="outline" className="uppercase tracking-wider">
                  {product.priority} Priority
                </Badge>
              )}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-2">
              {product.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">${product.price}</span>
              {/* Placeholder for rating if available later */}
              {/* <div className="flex items-center text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-foreground ml-1 text-sm font-medium">4.5 (120 reviews)</span>
              </div> */}
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {product.description || product.shortDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 gap-2">
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Heart className="h-5 w-5" /> Wishlist
            </Button>
            <Button size="lg" variant="ghost" className="px-3">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <Card className="bg-muted/30 border-none">
            <CardContent className="p-4 grid gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-6 w-6 text-primary" />
                <span className="text-xs font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="text-xs font-medium">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-xs font-medium">30 Days Return</span>
              </div>
            </CardContent>
          </Card>
          
          {product.date && (
            <p className="text-xs text-muted-foreground text-center">
              Listed on {new Date(product.date).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
