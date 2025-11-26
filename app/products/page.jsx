"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

// Helper function to highlight search matches
function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://next-ecommerce-server-eta.vercel.app/products")
      .then((res) => {
        console.log("Products fetched:", res.data);
        setProducts(res.data);
      });
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category
      ? p.category.toLowerCase() === category.toLowerCase()
      : true;
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Page title + description */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-slate-900">Our Products</h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Explore our latest collection. Use search or filter to find what you
          need.
        </p>
      </div>

      {/* Search + Category filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          <option value="sports">Sports</option>
          <option value="books">Books</option>
        </select>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((p) => (
          <div
            key={p._id}
            className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="h-40 bg-slate-100 flex items-center justify-center">
              {(() => {
                // console.log("Image URL:", p.image);
                return p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    // width={400}
                    // height={300}
                    // unoptimized
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-slate-400">No Image</span>
                );
              })()}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3
                className="text-lg font-semibold text-slate-900 truncate"
                dangerouslySetInnerHTML={{
                  __html: highlightText(p.title, search),
                }}
              ></h3>

              <p className="mt-2 text-slate-600 line-clamp-2">{p.shortDesc}</p>
              <p className="mt-2 font-bold text-indigo-600">${p.price}</p>

              {p.category && (
                <span className="mb-2 inline-block px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded">
                  {p.category}
                </span>
              )}

              <Link
                href={`/products/${p._id}`}
                className="mt-auto inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
