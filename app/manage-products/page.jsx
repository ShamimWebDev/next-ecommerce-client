"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function ManageProducts() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") signIn();
    if (status === "authenticated") loadProducts();
  }, [status]);

  const loadProducts = async () => {
    const res = await axios.get("https://next-ecommerce-server-eta.vercel.app/products");
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://next-ecommerce-server-eta.vercel.app/products/${id}`);
    loadProducts();
  };

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>;
  if (!session) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
        Manage Products
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-200 rounded-lg shadow-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">Title</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">Category</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">Price</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-2">{p.title}</td>
                <td className="px-4 py-2 capitalize">
                  {p.category ? (
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700">
                      {p.category}
                    </span>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>
                <td className="px-4 py-2 font-semibold text-indigo-600">${p.price}</td>
                <td className="px-4 py-2 space-x-2">
                  <Link
                    href={`/products/${p._id}`}
                    className="inline-block px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="inline-block px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
