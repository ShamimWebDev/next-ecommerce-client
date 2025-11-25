export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
            Welcome to <span className="text-indigo-600">Our Shop</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Discover the latest products at unbeatable prices. Shop smarter, faster, and easier with us.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/products"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md"
            >
              Browse Products
            </a>
            <a
              href="/register"
              className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
            >
              Join Now
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/hero-shopping.png" 
            alt="Shopping illustration"
            className="w-full max-w-md rounded-xl "
          />
        </div>
      </div>
    </section>
  );
}
