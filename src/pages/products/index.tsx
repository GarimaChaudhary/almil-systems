import React from "react";
import { motion } from "framer-motion";
import ProductGrid from "@/components/products/ProductGrid";

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1A2332] via-[#2D3142] to-[#1A2332] text-white overflow-hidden">
        {/* Animated background pattern */}
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-5 py-2 bg-[#C9A96E] text-[#1A2332] rounded-full text-sm font-semibold mb-6"
            >
              Our Products
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Premium Systems
              <br />
              <span className="text-[#C9A96E]">Windows & Doors</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Discover our complete range of premium aluminium windows and doors
              systems, designed and engineered in the United States.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <ProductGrid />
    </>
  );
}
