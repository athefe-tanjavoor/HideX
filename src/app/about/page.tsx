"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-12 bg-stone-100 dark:bg-stone-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The story behind HideX.
          </p>
        </div>
      </div>
      <Section className="text-center py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            HideX was born from a passion for authentic craftsmanship and timeless design. 
            We believe that leather goods should not only be functional but also tell a story—your story.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every piece is handcrafted by skilled artisans using the finest full-grain leathers, 
            ensuring that it ages gracefully and lasts a lifetime.
          </p>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
