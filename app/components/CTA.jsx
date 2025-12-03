import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ShieldCheck, Truck, Users } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
      
      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ready to Shop Smarter?
          </h2>
          <p className="text-lg text-primary-foreground/90 sm:text-xl">
            Join thousands of happy customers enjoying exclusive deals, fast delivery, and secure shopping.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild className="font-semibold">
              <Link href="/products">Browse Products</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold" asChild>
              <Link href="/register">Join Free Today</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 text-sm font-medium">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full bg-white/10 p-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span>Secure Payments</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full bg-white/10 p-3">
                <Users className="h-6 w-6" />
              </div>
              <span>Trusted by 10k+ Shoppers</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full bg-white/10 p-3">
                <Truck className="h-6 w-6" />
              </div>
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
