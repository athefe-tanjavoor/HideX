"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
}

// Hardcoded products
const products: Product[] = [
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
];

export function ProductShowcase() {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Featured Collection
            </h2>
            <p className="text-muted-foreground max-w-md">
              Discover our most coveted pieces, handcrafted with precision and passion.
            </p>
          </div>
          <Link href="/shop">
            <Button variant="outline" className="hidden md:inline-flex">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-200 mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button size="sm" className="shadow-xl">
                      Quick View
                    </Button>
                  </motion.div>
                </div>
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 via-transparent to-primary/50 blur-sm" />
                </div>
              </div>
              <motion.h3 
                className="font-serif font-medium text-lg text-foreground group-hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {product.name}
              </motion.h3>
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <p className="text-sm font-medium text-primary mt-1">${product.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/shop">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
