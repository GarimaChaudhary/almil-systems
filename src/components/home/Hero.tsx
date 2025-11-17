import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/Hero-Image.jpg"
          alt="Almil Systems Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Global Aluminium Systems, Now in India
        </h1>

        <p className="text-xl md:text-2xl mb-4">Welcome to Almil Systems</p>

        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          For more than 15 years, Almil Systems has been a trusted global name
          in premium aluminium windows and doors systems, designed and
          engineered in the United States.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Explore Our Products
          </Link>
          <Link
            href="/why-almil"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Discover the Almil Advantage
          </Link>
        </div>

        <p className="text-xl md:text-2xl mt-12 italic font-light">
          Crafting Views, Shaping Spaces.
        </p>
      </div>
    </div>
  );
}
