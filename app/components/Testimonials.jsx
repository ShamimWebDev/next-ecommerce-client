import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote: "The shoes I bought are super comfortable and stylish! Delivery was faster than expected.",
    name: "Ayesha Rahman",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
  },
  {
    quote: "Fast delivery and excellent customer service. Highly recommend this store for tech gadgets.",
    name: "John Smith",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 4,
  },
  {
    quote: "Great quality products at affordable prices. The return policy is very customer friendly.",
    name: "Maria Gonzalez",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of happy shoppers worldwide. Read their stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Avatar className="h-12 w-12 border-2 border-primary/10">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-foreground">{t.name}</h4>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary" className="text-[10px] px-1 py-0 h-5 gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      {t.role}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${j < t.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
