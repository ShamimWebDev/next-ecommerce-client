"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://next-ecommerce-server-eta.vercel.app/products/${id}`)
      .then((res) => {
        console.log("Fetched product:", res.data);
        setProduct(res.data);
      });
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Large image/banner */}
      <div className="w-full h-64 md:h-96 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center mb-8">
        {(() => {
          console.log("Image URL:", product.image);
          return product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              width={800}
              height={600}
              unoptimized
            />
          ) : (
            <span className="text-slate-400">No Image Available</span>
          );
        })()}
      </div>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        {product.title}
      </h2>

      <p className="text-slate-700 leading-relaxed mb-6">{product.fullDesc}</p>

      <div className="flex flex-wrap gap-6 text-slate-600 mb-8">
        <span className="font-semibold text-indigo-600">
          💲 Price: ${product.price}
        </span>
        {product.date && <span>📅 Date: {product.date}</span>}
        {product.priority && (
          <span className="capitalize">⚡ Priority: {product.priority}</span>
        )}
        {product.category && (
          <span className="capitalize">🏷️ Category: {product.category}</span>
        )}
      </div>

      <Link
        href="/products"
        className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        ← Back to Products
      </Link>
    </div>
  );
}
