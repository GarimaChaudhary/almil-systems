import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: "sliding",
    name: "Sliding Windows & Doors",
    tagline: "Seamless transitions between spaces",
    image: "/images/products/Slider-1.jpg",
  },
  {
    id: "casement",
    name: "Casement Windows & Doors",
    tagline: "Timeless design meets performance",
    image: "/images/products/Casement-Door-4.jpg",
  },
  {
    id: "lift-slide",
    name: "Lift & Slide Systems",
    tagline: "Luxury living with expansive views",
    image: "/images/products/Slim-Slider.jpg",
  },
  {
    id: "fold-slide",
    name: "Fold & Slide Systems",
    tagline: "Flexible designs for modern spaces",
    image: "/images/products/Slider-2.jpg",
  },
  {
    id: "fixed",
    name: "Fixed Windows",
    tagline: "Minimalist elegance and natural light",
    image: "/images/products/Casement-Door-5.jpg",
  },
  {
    id: "custom",
    name: "Customised Solutions",
    tagline: "Bespoke systems crafted for you",
    image: "/images/products/Casement-1.png",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/products/${product.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 block"
              >
                {/* Product Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/90 via-[#1A2332]/40 to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-200 mb-4 text-sm">
                    {product.tagline}
                  </p>

                  <div className="flex items-center text-[#C9A96E] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Learn More</span>
                    <svg
                      className="w-5 h-5"
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
      </div>
    </section>
  );
}
