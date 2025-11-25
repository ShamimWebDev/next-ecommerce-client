const testimonials = [
  {
    quote: "The shoes I bought are super comfortable and stylish!",
    name: "Ayesha Rahman",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/100?img=1", r
    rating: 5,
  },
  {
    quote: "Fast delivery and excellent customer service. Highly recommend this store!",
    name: "John Smith",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 4,
  },
  {
    quote: "Great quality products at affordable prices. Will shop again!",
    name: "Maria Gonzalez",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900">What Our Customers Say</h2>
        <p className="mt-2 text-slate-600">Trusted by thousands of happy shoppers worldwide.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-amber-500 text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 italic leading-relaxed">“{t.quote}”</p>

              {/* User Info */}
              <div className="mt-6 flex flex-col items-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <p className="mt-3 font-semibold text-slate-900">{t.name}</p>

                {/* Verified Badge */}
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-green-600"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 011.414-1.414l4.122 4.122 6.657-6.657a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified Buyer
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
