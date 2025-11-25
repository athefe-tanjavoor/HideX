import { Hero } from "@/components/home/Hero";
import { ProductShowcase } from "@/components/home/ProductShowcase";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary selection:text-white">
      <Hero />
      <ProductShowcase />
    </main>
  );
}
