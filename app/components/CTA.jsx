export default function CTA() {
  return (
    <section className="bg-indigo-600 py-20 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cta-bg.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold tracking-tight">
          Ready to Shop Smarter?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join thousands of happy customers enjoying exclusive deals, fast delivery, and secure shopping.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-slate-100 transition"
          >
            Browse Products
          </a>
          <a
            href="/register"
            className="px-8 py-3 border border-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Join Free Today
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-indigo-100">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 011.414-1.414l4.122 4.122 6.657-6.657a1 1 0 011.414 0z" />
            </svg>
            Secure Payments
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09L5.64 12.18.76 8.09l6.09-.88L10 2l3.15 5.21 6.09.88-4.88 4.09 1.52 5.91z" />
            </svg>
            Trusted by 10k+ Shoppers
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
            </svg>
            Fast Delivery
          </span>
        </div>
      </div>
    </section>
  );
}
