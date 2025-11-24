"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
}

const categories = ["All", "Bags", "Wallets", "Accessories", "Travel"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data.success) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Fallback mock data if API is empty
  const displayProducts = products.length > 0 ? products : [
    {
      _id: "1",
      name: "The Executive Satchel",
      price: 295,
      images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop"],
      category: "Bags",
    },
    {
      _id: "2",
      name: "Classic Bifold Wallet",
      price: 85,
      images: ["https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop"],
      category: "Wallets",
    },
    {
      _id: "3",
      name: "Heritage Belt",
      price: 65,
      images: ["https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2070&auto=format&fit=crop"],
      category: "Accessories",
    },
    {
      _id: "4",
      name: "Weekender Duffel",
      price: 450,
      images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop"],
      category: "Travel",
    },
    {
      _id: "5",
      name: "Minimalist Cardholder",
      price: 45,
      images: ["https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop"],
      category: "Wallets",
    },
    {
      _id: "6",
      name: "Laptop Sleeve",
      price: 120,
      images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop"],
      category: "Accessories",
    },
  ];

  const filteredProducts = activeCategory === "All"
    ? displayProducts
    : displayProducts.filter(p => p.category === activeCategory);

  if (loading) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-12 bg-stone-100 dark:bg-stone-900">
          <div className="container mx-auto px-4 text-center">
            <div className="h-12 w-64 bg-stone-200 dark:bg-stone-800 rounded animate-pulse mx-auto mb-4" />
            <div className="h-6 w-96 bg-stone-200 dark:bg-stone-800 rounded animate-pulse mx-auto" />
          </div>
        </div>
        <Section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[4/5] bg-stone-200 dark:bg-stone-800 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </Section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-stone-100 dark:bg-stone-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Shop Collection</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our range of premium leather goods, designed for longevity and style.
          </p>
        </div>
      </div>

      <Section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Link href={`/product/${product._id}`} key={product._id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-200 mb-4">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <h3 className="font-serif font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <p className="text-sm font-medium text-primary mt-1">${product.price}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
