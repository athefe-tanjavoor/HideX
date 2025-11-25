"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

const collections = [
  {
    title: "Icons",
    description: "Our signature pieces that define timeless elegance",
    image: "/images/collections/icons.jpg",
    href: "/shop",
  },
  {
    title: "Best Sellers",
    description: "Most loved by our customers",
    image: "/images/collections/bestsellers.jpg",
    href: "/shop",
  },
  {
    title: "East India",
    description: "Traditional craftsmanship meets modern design",
    image: "/images/collections/east-india.jpg",
    href: "/shop",
  },
  {
    title: "Atelier",
    description: "Premium handcrafted collection",
    image: "/images/collections/atelier.jpg",
    href: "/shop",
  },
  {
    title: "Wild West",
    description: "Rugged, adventure-inspired leather goods",
    image: "/images/collections/wild-west.jpg",
    href: "/shop",
  },
  {
    title: "Wabi Sabi",
    description: "Minimalist Japanese aesthetic",
    image: "/images/collections/wabi-sabi.jpg",
    href: "/shop",
  },
  {
    title: "On The Road",
    description: "Travel essentials for the modern explorer",
    image: "/images/collections/on-the-road.jpg",
    href: "/shop",
  },
  {
    title: "Sahara",
    description: "Desert-inspired warm tones and textures",
    image: "/images/collections/sahara.jpg",
    href: "/shop",
  },
  {
    title: "Rebels",
    description: "Bold designs for the unconventional",
    image: "/images/collections/rebels.jpg",
    href: "/shop",
  },
  {
    title: "Hipsters",
    description: "Contemporary urban style",
    image: "/images/collections/hipsters.jpg",
    href: "/shop",
  },
  {
    title: "Sports",
    description: "Active lifestyle essentials",
    image: "/images/collections/sports.jpg",
    href: "/shop",
  },
  {
    title: "Malasana",
    description: "Bohemian-inspired designs",
    image: "/images/collections/malasana.jpg",
    href: "/shop",
  },
];

export default function CollectionsPage() {
  return (
    <div className="relative min-h-screen pt-40 pb-16">
      {/* Hero Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our curated collections of handcrafted leather goods, each telling
            its own unique story of craftsmanship and design.
          </motion.p>
        </div>
      </Section>

      {/* Collections Grid */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Link href={collection.href}>
                <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-muted">
                  {/* Placeholder gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2 transform group-hover:translate-y-[-4px] transition-transform">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      {collection.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-w-3xl mx-auto text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our full range of products or get in touch for custom orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Shop All Products
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 border-2 border-border rounded-lg font-medium hover:bg-muted transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
