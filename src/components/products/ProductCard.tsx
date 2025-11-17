import React, { useState } from "react";
import Image from "next/image";

interface ProductProps {
  product: {
    id: string;
    title: string;
    description: string;
    images: string[];
    features: string[];
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="relative h-64 overflow-hidden group">
        <Image
          src={product.images[currentImageIndex]}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {product.images.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
          {product.title}
        </h3>
      </div>

      <div className="p-6">
        <p className="text-gray-700 mb-4">{product.description}</p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-[#1A2332] font-semibold hover:text-[#D97642] mb-4"
        >
          {showDetails ? "Hide" : "View"} Details
        </button>

        {showDetails && (
          <div className="bg-[#F7F3ED] p-4 rounded-md mb-4 border-l-4 border-[#1A2332]">
            <h4 className="font-semibold mb-3">Key Features</h4>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <svg
                    className="w-4 h-4 text-[#D97642] mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="w-full bg-[#1A2332] text-white py-3 rounded-md hover:bg-[#D97642] transition-colors font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
