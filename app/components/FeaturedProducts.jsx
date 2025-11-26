"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://next-ecommerce-server-eta.vercel.app/products")
      .then((res) => {
        // console.log("Featured products fetched:", res.data);
        setProducts(res.data);
      });
  }, []);

  return (
    <section className="bg-slate-50 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
        <p className="mt-2 text-slate-600">Browse some of our latest items</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, 6).map((p) => (
          <div
            key={p._id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col"
          >
            {/* Image */}
            <div className="h-40 bg-slate-100 flex items-center justify-center mb-4">
              {(() => {
                // console.log("Image URL:", p.image);
                return p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={300}
                    unoptimized
                    className="object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-slate-400">No Image</span>
                );
              })()}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-slate-900 truncate">
              {p.title}
            </h3>
            <p className="mt-2 text-slate-600 line-clamp-2">{p.shortDesc}</p>

            {/* Price + Category */}
            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold text-indigo-600">${p.price}</span>
              {p.category && (
                <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700">
                  {p.category}
                </span>
              )}
            </div>

            {/* CTA */}
            <Link
              href={`/products/${p._id}`}
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
