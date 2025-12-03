import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                New Collection Available
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl">
                Discover Your <span className="text-primary">Style</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Shop the latest trends in fashion, electronics, and home decor. 
                Experience premium quality at unbeatable prices.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/products">
                  Browse Products <ShoppingBag className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="/register">
                  Join Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                     {/* Placeholder avatars */}
                     <div className="w-full h-full bg-slate-200" />
                  </div>
                ))}
              </div>
              <p>Trusted by 10k+ customers</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
            <div className="relative aspect-square w-full max-w-[500px] lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
              <Image
                src="/hero-shopping.png"
                alt="Shopping illustration"
                width={600}
                height={600}
                className="object-contain w-full h-full drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
