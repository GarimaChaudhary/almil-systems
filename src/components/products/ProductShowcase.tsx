import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "sliding",
    name: "Sliding Windows & Doors",
    image: "/images/products/Slider-1.jpg",
  },
  {
    id: "casement",
    name: "Casement Windows & Doors",
    image: "/images/products/Casement-1.png",
  },
  {
    id: "lift-slide",
    name: "Lift & Slide Systems",
    image: "/images/products/Slim-Slider.jpg",
  },
  {
    id: "fold-slide",
    name: "Fold & Slide Systems",
    image: "/images/products/Casement-Door-4.jpg",
  },
  {
    id: "fixed",
    name: "Fixed Windows",
    image: "/images/products/Casement-2.png",
  },
  {
    id: "custom",
    name: "Customised Solutions",
    image: "/images/products/Casement-3.png",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of premium aluminium windows and doors
            systems, designed and engineered in the United States.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Product Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <div className="flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
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
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
