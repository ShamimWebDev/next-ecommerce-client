"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Search, SlidersHorizontal, Eye, ShoppingCart, Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

// Helper function to highlight search matches
function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark class='bg-yellow-200 rounded-sm'>$1</mark>");
}

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("all");
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

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category
      ? p.category?.toLowerCase() === category.toLowerCase()
      : true;
    
    let matchPrice = true;
    if (priceRange === "under-50") matchPrice = p.price < 50;
    else if (priceRange === "50-100") matchPrice = p.price >= 50 && p.price <= 100;
    else if (priceRange === "over-100") matchPrice = p.price > 100;

    return matchSearch && matchCategory && matchPrice;
  });

  const categories = ["electronics", "fashion", "home", "sports", "books"];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5" /> Filters
            </h3>
            
            {/* Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c} className="capitalize">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="all">All Prices</option>
                <option value="under-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="over-100">Over $100</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Our Products</h1>
            <p className="text-muted-foreground mt-2">
              Showing {filteredProducts.length} results
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-muted rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <Card key={p._id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      <span dangerouslySetInnerHTML={{ __html: highlightText(p.title, search) }} />
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
          ) : (
            <div className="text-center py-20 bg-muted/30 rounded-xl">
              <h3 className="text-lg font-semibold">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
              <Button 
                variant="link" 
                onClick={() => { setSearch(""); setCategory(""); setPriceRange("all"); }}
                className="mt-4"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
