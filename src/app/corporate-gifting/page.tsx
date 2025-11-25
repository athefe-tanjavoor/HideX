"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Package, Gift, Users, TrendingUp, Award, CreditCard } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Customization",
    description:
      "With decades of experience, we understand your needs. As a vertically integrated company, we can customize our products to suit your requirements, from leathers to designs. Personalize our products with your brand name on our leathers or in our packaging.",
  },
  {
    icon: Gift,
    title: "Packaging",
    description:
      "HideX has stayed true to its core values of quality and elegance. Our premium packaging ensures your corporate gifts make a lasting impression.",
  },
  {
    icon: Users,
    title: "Conferences",
    description:
      "Make your convention memorable with a gift your audience will use regularly. Our leather goods are perfect for creating lasting brand impressions.",
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description:
      "Reward your top customers with a brand they will recognize for its elegance and luxury. HideX represents prestige and value.",
  },
  {
    icon: Award,
    title: "HR",
    description:
      "Honor the loyalty and hard work of your workforce with a gift they will cherish. Show appreciation with timeless leather craftsmanship.",
  },
  {
    icon: CreditCard,
    title: "Gift Cards",
    description:
      "There's nothing nicer than the gift of choice. HideX gift cards are easy for your teams to manage and distribute, while giving the receiver freedom to choose what they love.",
  },
];

export default function CorporateGiftingPage() {
  return (
    <div className="relative min-h-screen pt-40 pb-16">
      {/* Hero Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            For Corporates
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-serif mb-6 text-primary"
          >
            Partner with HideX
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            All successful businesses share a common philosophy: &apos;Never settle for
            less than the best.&apos; Which is probably why, when the time comes to reward
            achievement or honor loyalty, the best-known names in the corporate world
            turn to HideX. An acclaimed leather goods brand, crafted to perfection,
            HideX is a gift of prestige and value.
          </motion.p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Elevate Your Corporate Gifting?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how HideX can help you create memorable corporate gifts
            that reflect your brand&apos;s excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg">
                Get in Touch
              </Button>
            </Link>
            <Link href="/collections">
              <Button size="lg" variant="outline" className="text-lg">
                Explore Collections
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* Features Section */}
      <Section>
        <div className="max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">45+</h3>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Corporate Partners</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-muted-foreground">Handcrafted Quality</p>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
