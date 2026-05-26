import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "sliding",
    name: "Sliding Windows & Doors",
    description: "Seamless transitions with smooth, effortless functionality",
    image: "/images/products/SLIDER.jpg",
  },
  {
    id: "casement",
    name: "Casement Windows & Doors",
    description: "Timeless design meets robust performance",
    image: "/images/products/CASEMENT DOOR.jpg",
  },
  {
    id: "lift-slide",
    name: "Lift & Slide Systems",
    description: "Luxury living with expansive glass openings",
    image: "/images/products/Lift and Slide 1.jpg",
  },
  {
    id: "fold-slide",
    name: "Fold & Slide Systems",
    description: "Flexible designs for modern living",
    image: "/images/products/SLIDE AND FOLD 1.jpg",
  },
  {
    id: "fixed",
    name: "Fixed Windows",
    description: "Minimalist elegance with maximum natural light",
    image: "/images/products/FIX WINDOW.jpg",
  },
  {
    id: "custom",
    name: "Customised Solutions",
    description: "Bespoke systems crafted for your vision",
    image: "/images/products/CUSTOMIZED SOLUTIONS.jpg",
  },
  {
    id: "facade",
    name: "Facade Systems",
    description: "High-performance building envelopes for modern architecture",
    image: "/images/products/facade-1.png",
  },
  {
    id: "railing",
    name: "Railing Systems",
    description: "Precision-engineered aluminium railing solutions for modern spaces",
    image: "/images/products/railing-1.jpg",
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
    title: "30+ Years Global",
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
    <main className="min-h-screen bg-white">
      {/* Hero Section - Immersive & Elegant */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Background Image with Parallax & Zoom Effect */}
        <motion.div
          style={{ y: heroY, scale: 1.05 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero/Hero-Image.jpg"
            alt="Almil Systems"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Lighter, softer gradient overlay - Better visibility for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 pt-24 pb-12 lg:pt-32 lg:pb-20 flex flex-col justify-center min-h-screen">
          <div className="max-w-4xl mt-auto mb-auto">
            {/* Badge - Minimalist */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 mb-4 lg:mb-6"
            >
              <span className="w-12 h-[2px] bg-alumil-yellow"></span>
              <span className="text-white font-medium tracking-widest uppercase text-sm drop-shadow-md">Global Excellence, Now in India</span>
            </motion.div>

            {/* Heading - Clean & Impactful */}
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold mb-4 lg:mb-6 leading-tight text-white tracking-tight drop-shadow-lg">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="block"
              >
                Crafting Views.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block text-alumil-yellow"
              >
                Shaping Spaces.
              </motion.span>
            </h1>

            {/* Subheading - Refined Typography */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-white mb-8 lg:mb-10 leading-relaxed max-w-2xl font-light drop-shadow-md"
            >
              US-engineered perfection. <strong className="font-semibold">30+ years</strong> of global legacy, introducing a new standard of luxury windows and doors to Indian architecture.
            </motion.p>

            {/* CTA Buttons - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 lg:gap-5 mb-10 lg:mb-16"
            >
              <Link
                href="/products"
                className="px-8 py-4 bg-alumil-yellow text-alumil-dark font-bold text-lg rounded-sm hover:bg-white transition-colors duration-300 shadow-xl"
              >
                Explore Collection
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-sm hover:bg-white hover:text-alumil-dark transition-all duration-300"
              >
                Request Consultation
              </Link>
            </motion.div>

            {/* Stats - Minimalist Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-wrap items-center gap-8 md:gap-12 lg:gap-16 pt-6 lg:pt-8 border-t border-white/10"
            >
              {[
                { value: "30+", label: "Years Global Legacy" },
                { value: "10Y", label: "Comprehensive Warranty" },
                { value: "100%", label: "US Engineered" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                  <div className="text-[10px] lg:text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 right-10 text-white/40 hidden md:flex items-center gap-4 rotate-90 origin-right translate-x-8"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to Discover</span>
          <div className="w-12 h-[1px] bg-white/40" />
        </motion.div>
      </section>

      {/* About Section - Redesigned */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          {/* Hero Statement - Short & Punchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-alumil-yellow/10 rounded-full mb-4">
              <span className="text-alumil-yellow font-bold text-xs tracking-wider">30+ YEARS OF EXCELLENCE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-alumil-dark max-w-4xl mx-auto leading-tight">
              Global Aluminium Leaders,<br />Now Crafting India's Future
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              US-engineered precision meets Indian innovation. <strong>ALMIL SYSTEMS INDIA</strong> brings three decades of global expertise to redefine luxury windows and doors.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 pb-8 border-b border-gray-200"
          >
            {[
              { number: "30+", label: "Years Global" },
              { number: "10Y", label: "Warranty" },
              { number: "100%", label: "US Engineered" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-alumil-yellow mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Vision & Values - Clean Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Our Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-alumil-yellow/10 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  🚀
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-alumil-dark mb-2">Our Vision</h3>
                  <div className="w-16 h-1 bg-alumil-yellow rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-alumil-yellow text-xl mt-1">✓</span>
                  <span>Redefine Indian spaces with <strong>style, strength & sustainability</strong></span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-alumil-yellow text-xl mt-1">✓</span>
                  <span>Deliver world-class solutions for Indian climate</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-alumil-yellow text-xl mt-1">✓</span>
                  <span>Set new benchmarks in quality & performance</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-alumil-yellow text-xl mt-1">✓</span>
                  <span>Build long-lasting relationships through <strong>trust & service</strong></span>
                </p>
              </div>
            </motion.div>

            {/* What We Stand For Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-alumil-yellow/10 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-alumil-dark mb-2">Our Values</h3>
                  <div className="w-16 h-1 bg-alumil-yellow rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "💡", title: "Innovation", desc: "Evolving designs" },
                  { icon: "🏆", title: "Durability", desc: "Built to last" },
                  { icon: "🌿", title: "Sustainability", desc: "Eco-friendly" },
                  { icon: "🤝", title: "Customer Focus", desc: "Your success" },
                ].map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="text-center group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{value.icon}</div>
                    <div className="font-bold text-alumil-dark text-sm mb-1">{value.title}</div>
                    <div className="text-xs text-gray-500">{value.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid - Dark Mode & Immersive */}
      <section className="py-24 bg-alumil-dark text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-alumil-yellow font-bold tracking-widest uppercase text-sm mb-4 block">Our Collection</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Designed for Perfection
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our range of US-engineered aluminium systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl ${idx === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-square"
                  }`}
              >
                <Link href={`/products/${product.id}`} className="block w-full h-full">
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-1 bg-alumil-yellow mb-4 w-0 group-hover:w-12 transition-all duration-500"></div>
                    <h3 className={`font-bold mb-2 ${idx === 0 ? "text-3xl md:text-4xl" : "text-xl"}`}>
                      {product.name}
                    </h3>
                    {idx === 0 && (
                      <p className="text-gray-300 text-lg mb-4 opacity-90 hidden md:block">
                        {product.description}
                      </p>
                    )}
                    <span className="inline-flex items-center text-alumil-yellow font-semibold text-sm tracking-wide uppercase">
                      Explore Series
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white text-white hover:text-alumil-dark border border-white/20 rounded-full transition-all duration-300 font-medium backdrop-blur-sm"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose - Bento Grid Layout */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-alumil-dark mb-6">Why Almil Systems?</h2>
            <div className="w-24 h-1.5 bg-alumil-yellow mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            {/* Feature 1 - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">
                🇺🇸
              </div>
              <div>
                <h3 className="text-2xl font-bold text-alumil-dark mb-4">US-Engineered Excellence</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Designed and engineered in the United States, our systems represent the pinnacle of fenestration technology. Every profile and component is tested to meet rigorous international standards for performance and safety.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 - Tall Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:row-span-2 bg-alumil-dark text-white p-10 rounded-3xl shadow-lg flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-4xl mb-6 backdrop-blur-sm">
                  🏆
                </div>
                <h3 className="text-2xl font-bold mb-4">30+ Years Global Legacy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Trusted worldwide for premium quality. Our legacy is built on decades of innovation and trust across continents.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-alumil-yellow/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-alumil-yellow/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-alumil-dark mb-3">10 Year Warranty</h3>
              <p className="text-gray-600">Complete peace of mind guaranteed with our comprehensive warranty coverage.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-alumil-yellow/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🌿
              </div>
              <h3 className="text-xl font-bold text-alumil-dark mb-3">Sustainable</h3>
              <p className="text-gray-600">Eco-friendly and energy efficient solutions for a greener future.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-alumil-yellow">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-alumil-dark mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-alumil-dark/80 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote from our expert team in India
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-alumil-dark text-white rounded font-bold hover:bg-white hover:text-alumil-dark transition-colors shadow-lg"
              >
                Contact Us Now
              </Link>
              <a
                href="tel:18008900154"
                className="px-8 py-3 bg-white text-alumil-dark rounded font-bold hover:bg-alumil-dark hover:text-white transition-colors shadow-lg"
              >
                1800-890-0154
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
