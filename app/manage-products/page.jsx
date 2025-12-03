"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Trash2, Eye, Edit, Package } from "lucide-react";

export default function ManageProducts() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") signIn();
    if (status === "authenticated") loadProducts();
  }, [status]);

  const loadProducts = async () => {
    try {
      const res = await axios.get("https://next-ecommerce-server-eta.vercel.app/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to load products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await axios.delete(`https://next-ecommerce-server-eta.vercel.app/products/${id}`);
      loadProducts();
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="container mx-auto px-4 py-16 space-y-4">
        <div className="h-10 w-48 bg-muted rounded animate-pulse mx-auto" />
        <div className="h-64 w-full bg-muted rounded-xl animate-pulse" />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Package className="h-6 w-6" /> Manage Products
          </CardTitle>
          <Button asChild>
            <Link href="/add-product">Add New Product</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-muted-foreground font-medium">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-4 py-8 text-center text-muted-foreground">
                      No products found.
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr key={p._id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 font-medium">{p.title}</td>
                      <td className="px-4 py-3">
                        {p.category ? (
                          <Badge variant="secondary" className="capitalize">
                            {p.category}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 font-semibold">${p.price}</td>
                      <td className="px-4 py-3 text-right space-x-2">
                        <Button size="icon" variant="ghost" asChild>
                          <Link href={`/products/${p._id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => handleDelete(p._id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
