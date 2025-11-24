"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-12 bg-stone-100 dark:bg-stone-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Collections</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curated sets for the discerning individual.
          </p>
        </div>
      </div>
      <Section className="text-center py-24">
        <p className="text-xl text-muted-foreground">Coming Soon</p>
      </Section>
      <Footer />
    </main>
  );
}
