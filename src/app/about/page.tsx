"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

export default function AboutPage() {
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The story behind HideX.
          </motion.p>
        </div>
      </Section>

      {/* Story Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              HideX was born from a passion for authentic craftsmanship and timeless
              design. We believe that leather goods should not only be functional but
              also tell a story—your story.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every piece is handcrafted by skilled artisans using the finest
              full-grain leathers, ensuring that it ages gracefully and lasts a
              lifetime.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <div className="max-w-4xl mx-auto mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <h3 className="text-xl font-serif font-semibold mb-3">
                Craftsmanship
              </h3>
              <p className="text-muted-foreground">
                Every piece is meticulously handcrafted by skilled artisans who take
                pride in their work.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <h3 className="text-xl font-serif font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We use only the finest full-grain leathers that age beautifully and
                last for generations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center"
            >
              <h3 className="text-xl font-serif font-semibold mb-3">
                Sustainability
              </h3>
              <p className="text-muted-foreground">
                We believe in creating products that stand the test of time, reducing
                waste and promoting sustainable consumption.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
