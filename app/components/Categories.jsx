"use client";

import Link from "next/link";
import { Card, CardContent } from "@/app/components/ui/card";
import { Smartphone, Shirt, Home, Activity } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    href: "/products?category=electronics",
    icon: Smartphone,
    color: "bg-blue-500/10 text-blue-600",
    description: "Latest gadgets & accessories",
  },
  {
    name: "Fashion",
    href: "/products?category=fashion",
    icon: Shirt,
    color: "bg-pink-500/10 text-pink-600",
    description: "Trendy clothing & style",
  },
  {
    name: "Home & Living",
    href: "/products?category=home",
    icon: Home,
    color: "bg-amber-500/10 text-amber-600",
    description: "Decor for your space",
  },
  {
    name: "Sports",
    href: "/products?category=sports",
    icon: Activity,
    color: "bg-emerald-500/10 text-emerald-600",
    description: "Gear for your active life",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for. Browse our wide range of collections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group block">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className={`p-4 rounded-full ${category.color} transition-transform duration-300 group-hover:scale-110`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
