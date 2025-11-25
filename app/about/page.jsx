"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">About Us</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Learn more about our mission, vision, and the values that drive our work.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mission */}
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
          <p className="text-slate-700 leading-relaxed">
            We aim to deliver high-quality products and services that empower businesses
            and individuals to achieve more. Our focus is on innovation, reliability,
            and customer satisfaction.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Vision</h2>
          <p className="text-slate-700 leading-relaxed">
            To be a trusted global partner recognized for excellence in technology,
            design, and user experience. We envision a future where our solutions
            make life simpler and smarter.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 md:col-span-2">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Innovation and creativity in every project</li>
            <li>Commitment to quality and reliability</li>
            <li>Customer-first approach with transparency</li>
            <li>Collaboration and teamwork across all levels</li>
          </ul>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
