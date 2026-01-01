import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "sliding",
    name: "Sliding Windows & Doors",
    description: "Seamless transitions with smooth, effortless functionality",
    image: "/images/products/Slider-1.jpg",
  },
  {
    id: "casement",
    name: "Casement Windows & Doors",
    description: "Timeless design meets robust performance",
    image: "/images/products/Casement-1.png",
  },
  {
    id: "lift-slide",
    name: "Lift & Slide Systems",
    description: "Luxury living with expansive glass openings",
    image: "/images/products/Slim-Slider.jpg",
  },
  {
    id: "fold-slide",
    name: "Fold & Slide Systems",
    description: "Flexible designs for modern living",
    image: "/images/products/Slider-2.jpg",
  },
  {
    id: "fixed",
    name: "Fixed Windows",
    description: "Minimalist elegance with maximum natural light",
    image: "/images/products/Casement-Door-5.jpg",
  },
  {
    id: "custom",
    name: "Customised Solutions",
    description: "Bespoke systems crafted for your vision",
    image: "/images/products/Casement-3.png",
  },
];

const features = [
  {
    icon: "🇺🇸",
    title: "US-Engineered",
    description: "Designed and engineered in the United States",
  },
  {
    icon: "🏆",
    title: "15+ Years Global",
    description: "Trusted worldwide for premium quality",
  },
  {
    icon: "🛡️",
    title: "10 Year Warranty",
    description: "Complete peace of mind guaranteed",
  },
  {
    icon: "🌿",
    title: "Sustainable",
    description: "Eco-friendly and energy efficient",
  },
];

export default function Home() {
  const { scrollY } = useScroll();

  // Subtle parallax - hero image moves slower than content
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <main className="min-h-screen bg-[#F7F3ED]">
      {/* Hero Section - FITS PERFECTLY IN VIEWPORT */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero/Hero-Image.jpg"
            alt="Almil Systems"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Elegant gradient overlay - deep navy to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/75 to-transparent"></div>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Badge - Subtle entrance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A96E] text-[#1A2332] rounded-full text-sm font-semibold mb-8 shadow-lg"
            >
              ✨ Global Aluminium Systems, Now in India
            </motion.div>

            {/* Heading - Fade in */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white"
            >
              Crafting Views,
              <br />
              <span className="text-[#C9A96E]">Shaping Spaces</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
            >
              For over 30 Years,{" "}
              <span className="font-semibold text-white">Almil Systems</span>{" "}
              has been a trusted global brand in premium aluminium windows and
              doors, designed and engineered in the United States.
            </motion.p>

            {/* CTA Buttons - Clean design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FDB913] hover:bg-[#C9A96E] text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Products
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Get Free Quote
              </Link>
            </motion.div>

            {/* Stats - Simple and elegant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: "15+", label: "Years Global" },
                { value: "10Y", label: "Warranty" },
                { value: "100%", label: "US-Engineered" },
                { value: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#C9A96E] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating Rating Badge - Elegant positioning */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#FDB913] rounded-xl flex items-center justify-center text-white text-2xl">
                ⭐
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-gray-300">Customer Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Clean and spacious */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A2332]">
              Welcome to Almil Systems
            </h2>
            <p className="text-lg md:text-xl text-[#2D3142]/70 max-w-3xl mx-auto leading-relaxed">
              With our entry into India, we bring world-class quality, modern
              aesthetics, and enduring performance to elevate residential,
              commercial, and architectural spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 bg-[#F7F3ED] rounded-2xl border border-[#C9A96E]/20 hover:border-[#C9A96E]/40 transition-all duration-300"
            >
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-4">
                Our Vision
              </h3>
              <p className="text-[#2D3142]/70 leading-relaxed text-lg">
                To redefine the way India experiences living and working spaces
                by offering innovative aluminium window and door solutions that
                blend design, durability, and sustainability.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 md:p-10 bg-[#F7F3ED] rounded-2xl border border-[#C9A96E]/20 hover:border-[#C9A96E]/40 transition-all duration-300"
            >
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-6">
                Our Mission in India
              </h3>
              <ul className="space-y-4">
                {[
                  "Provide world-class aluminium solutions tailored to Indian lifestyles and climate",
                  "Set new benchmarks in quality, aesthetics, and performance",
                  "Build long-term relationships through innovation, trust, and service excellence",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#2D3142]/70"
                  >
                    <span className="text-[#D97642] text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid - CLEAN, NO CRAZY EFFECTS */}
      <section className="py-24 md:py-32 bg-[#1A2332]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our Premium Collection
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our range of US-engineered aluminium systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#C9A96E] transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-gray-200 text-sm opacity-90">
                        {product.description}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FDB913] hover:bg-[#C9A96E] text-white rounded-lg font-semibold transition-all duration-300"
            >
              View All Products
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose - Elegant cards */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A2332]">
              Why Choose Almil?
            </h2>
            <p className="text-lg md:text-xl text-[#2D3142]/70 max-w-2xl mx-auto">
              Excellence in every detail, backed by 15+ years of global
              expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-8 bg-[#F7F3ED] rounded-2xl border border-[#C9A96E]/20 hover:border-[#C9A96E]/40 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#1A2332] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#2D3142]/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#1A2332]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10">
              Get a free consultation and quote from our expert team in Jaipur
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#FDB913] hover:bg-[#C9A96E] text-white rounded-lg font-semibold transition-all duration-300 text-lg"
              >
                Contact Us Now
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="tel:+919024268374"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300 text-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 9024268374
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
