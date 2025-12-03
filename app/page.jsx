import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Features from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <Categories />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
