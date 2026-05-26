import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const productData = {
  sliding: {
    name: "Sliding Windows & Doors",
    tagline: "Seamless transitions between indoor and outdoor spaces",
    description:
      "Our sliding systems are designed for smooth, effortless functionality and wide openings that connect indoor and outdoor spaces seamlessly. With their sleek frames and easy operation, they maximize natural light and create a sense of openness, making them ideal for both modern homes and commercial spaces.",
    technicalAdvantages: [
      "Thermal Performance: Precision-engineered aluminium profiles with multi-chamber design and EPDM gaskets ensure airtight sealing, minimizing thermal transmittance (U-value).",
      "Structural Integrity: High-strength aluminium alloys provide stability for wide-span openings without deformation under load.",
      "Operational Efficiency: Ball-bearing rollers allow frictionless sliding and extended service life.",
      "Corrosion Resistance: Powder-coated and anodized finishes enhance resistance against oxidation, moisture, and saline environments.",
    ],
    specifications: [
      "Profile options: Slimline and heavy-duty sections",
      "Glazing compatibility: Single, double, and laminated glass",
      "Air-tightness: Compliant with international EN/ASTM standards",
      "Locking mechanism: Multipoint or single-point options for enhanced security",
    ],
    images: [
      "/images/products/SLIDER.jpg",
      "/images/products/Slider-1.jpg",
    ],
  },
  casement: {
    name: "Casement Windows & Doors",
    tagline: "Timeless design with robust performance",
    description:
      "A timeless choice, our casement systems combine classic design with robust performance. Built with precision-engineered aluminium, they offer excellent ventilation, durability, and security while complementing every style of architecture from traditional to contemporary.",
    technicalAdvantages: [
      "Maximum Ventilation: Outward or inward opening sash design enables optimal airflow.",
      "High Sealing Performance: EPDM gaskets and multipoint locking ensure Class 4 air permeability and Class E1200 water tightness.",
      "Load Resistance: Robust hinges tested for high cyclic performance and sash weights up to 120 kg.",
      "Energy Efficiency: Thermal break technology available for improved insulation.",
    ],
    specifications: [
      "Opening types: Side-hung, top-hung, French casement",
      "Glazing thickness: 5 mm to 32 mm",
      "Hardware: Heavy-duty concealed or exposed hinges",
      "Finish options: Powder coating (60–80 microns) and anodizing",
    ],
    images: [
      "/images/products/CASEMENT DOOR.jpg",
      "/images/products/Casement-1.png",
      "/images/products/Casement-2.png",
      "/images/products/Casement-3.png",
      "/images/products/Casement-Door-4.jpg",
      "/images/products/Casement-Door-5.jpg",
    ],
  },
  "lift-slide": {
    name: "Lift & Slide Systems",
    tagline: "Luxury living with expansive glass openings",
    description:
      "For those who seek luxury and expansive views, our lift & slide systems are the perfect solution. With advanced engineering, large glass panels glide effortlessly, creating uninterrupted views and seamless transitions between interiors and exteriors.",
    technicalAdvantages: [
      "Wide Span Applications: Supports glass panels up to 3 meters in height and 300 kg per sash.",
      "Smooth Operation: Advanced lift mechanism disengages gaskets during sliding for minimal friction, ensuring effortless handling.",
      "Enhanced Insulation: Multi-point locking and continuous gaskets improve energy performance and acoustic insulation (Rw values up to 45 dB).",
      "Durability: Designed for heavy-duty use in premium residential and commercial projects.",
    ],
    specifications: [
      "Track systems: Single, double, or triple-track configurations",
      "Thermal performance: Uw ≤ 1.6 W/m²K with double glazing",
      "Glass options: Toughened, laminated, low-E, or acoustic glazing",
      "Weather resistance: Compliant with Class 9A (EN12208)",
    ],
    images: [
      "/images/products/Lift and Slide 1.jpg",
      "/images/products/Lift and Slide 2.jpg",
      "/images/products/Slim-Slider.jpg",
    ],
  },
  "fold-slide": {
    name: "Fold & Slide Systems",
    tagline: "Flexible designs for modern living",
    description:
      "Our fold & slide systems are crafted for flexibility and modern living. Designed to fold neatly to one side, they open up entire walls, creating versatile spaces that adapt easily to gatherings, entertainment, or everyday comfort.",
    technicalAdvantages: [
      "Space Optimization: Multi-panel folding mechanism allows complete opening of wall sections.",
      "High Stability: Top-hung or bottom-rolling configurations engineered for smooth stacking.",
      "Sealing & Safety: EPDM gaskets and multi-point locking ensure secure closure with high air and water resistance.",
      "Flexibility: Panels can be stacked internally or externally, with odd/even panel combinations for greater versatility.",
    ],
    specifications: [
      "Panel height: Up to 3 meters",
      "Panel width: 600 mm – 1200 mm",
      "Max panel weight: 120 kg",
      "Glass compatibility: 6 mm – 32 mm",
    ],
    images: [
      "/images/products/SLIDE AND FOLD 1.jpg",
      "/images/products/SLIDE AND FOLD 2 .jpg",
      "/images/products/SLIDE AND FOLD 3 .jpg",
      "/images/products/SLIDE AND FOLD 4.jpg",
    ],
  },
  fixed: {
    name: "Fixed Windows",
    tagline: "Minimalist elegance with maximum natural light",
    description:
      "Designed for minimalist elegance, our fixed windows invite abundant natural light while framing outdoor views like living art. With slim profiles and maximum glass surface, they add sophistication and brightness to any space.",
    technicalAdvantages: [
      "Structural Performance: Capable of supporting large spans of glass with slim aluminium mullions.",
      "Daylight Optimization: Maximized visible light transmission (VLT) with minimal frame visibility.",
      "Thermal & Acoustic Efficiency: Supports insulated glazing units (IGU) for superior performance.",
      "Low Maintenance: No moving parts, reducing wear and service requirements.",
    ],
    specifications: [
      "Glass options: Single, double, laminated, acoustic, or solar control glass",
      "Frame depths: 45 mm – 100 mm (depending on span)",
      "Performance standards: Meets IS/EN standards for wind load resistance",
      "Finish: Powder coating, anodizing, or wood-grain sublimation",
    ],
    images: [
      "/images/products/FIX WINDOW.jpg",
      "/images/products/Casement-Door-5.jpg",
      "/images/products/Casement-2.png",
      "/images/products/Casement-1.png",
    ],
  },
  louvers: {
    name: "Operable Aluminium Louvers",
    tagline: "Engineered airflow with style",
    description:
      "Our operable aluminium louvers provide precise control over natural ventilation and daylight. Designed for functionality and modern aesthetics, they enhance air circulation while maintaining privacy and security, making them ideal for facades, partitions, and privacy screens.",
    technicalAdvantages: [
      "Adjustable Ventilation: Louvered blades can be adjusted for controlled airflow and optimal temperature regulation.",
      "Weather Protection: Engineered to deflect rain while maintaining airflow, ideal for tropical and coastal environments.",
      "Energy Efficiency: Reduces dependence on mechanical HVAC systems by promoting natural ventilation.",
      "Corrosion Resistance: High-quality aluminium with powder-coated or anodized finishes for long-lasting durability.",
    ],
    specifications: [
      "Blade angles: 0° to 90° (manual or motorized operation)",
      "Blade thickness: 1.2 mm – 2.0 mm aluminium",
      "Frame options: Fixed or operable configurations",
      "Finish: Powder coating in RAL or custom colors, anodizing available",
    ],
    images: [
      "/images/products/LOUVERS 1.jpg",
      "/images/products/LOUVERS 2.jpg",
      "/images/products/LOUVERS 3.jpg",
    ],
  },
  custom: {
    name: "Customised Solutions",
    tagline: "Bespoke aluminium systems crafted for you",
    description:
      "Every project is unique, and so are our solutions. With custom-designed aluminium systems, we craft windows and doors tailored to your architectural vision, lifestyle, and functional needs. From size and finish to performance features, we make sure your system is truly one of a kind.",
    technicalAdvantages: [
      "Tailor-Made Profiles: Engineered profiles for non-standard dimensions, shapes, or façade integrations.",
      "System Compatibility: Designed to integrate seamlessly with curtain wall, skylight, and structural glazing systems.",
      "Advanced Engineering: FEM (Finite Element Method) analysis applied for structural and wind load calculations.",
      "Special Coatings: Availability of PVDF and marine-grade finishes for coastal projects.",
    ],
    specifications: [
      "Glazing thickness: 4 mm – 42 mm",
      "Thermal break profiles for high-performance insulation",
      "Customized hardware solutions for oversized panels",
      "Compliant with ASTM, EN, and Indian Standards (IS)",
    ],
    images: [
      "/images/products/CUSTOMIZED SOLUTIONS.jpg",
      "/images/products/BUNGLOW.jpg",
      "/images/products/FRONT PIC.jpg",

    ],
  },
  facade: {
    name: "Facade Systems",
    tagline: "High-performance building envelopes for modern architecture",
    description:
      "Our facade systems are designed to enhance building exteriors with strength, performance, and modern aesthetics. Engineered using precision aluminium profiles, they support large spans and contemporary elevations while ensuring durability and long-term reliability.\n\nWith clean lines, flexible design options, and seamless integration of glass and cladding materials, these systems improve natural light, weather protection, and overall building performance, making them ideal for modern commercial and institutional projects.",
    technicalAdvantages: [
      "Thermal Performance: Precision-engineered aluminium profiles with optimized system design help reduce heat transfer and support improved energy efficiency.",
      "Structural Integrity: High-strength aluminium alloys provide stability for large-span and high-rise facades without deformation under load.",
      "Design Flexibility: Compatible with glass, ACP, HPL, and other architectural cladding materials for diverse facade applications.",
      "Corrosion Resistance: Powder-coated and anodized finishes enhance resistance against oxidation, moisture, and harsh environmental conditions.",
    ],
    specifications: [
      "Profile options: Slimline and heavy-duty aluminium facade sections",
      "Cladding compatibility: Glass, ACP, HPL, and other materials",
      "Air tightness: Designed to comply with relevant Indian, ASTM, and EN standards",
      "Water tightness: Engineered in accordance with applicable Indian, ASTM, and EN guidelines",
      "Wind load resistance: System performance evaluated as per Indian, ASTM, and EN requirements",
      "Finish options: Powder coated / anodized aluminium as per relevant Indian, ASTM, and EN standards",
    ],
    images: [
      "/images/products/facade-1.png",
      "/images/products/facade-2.png",
      "/images/products/facade-3.png",
      "/images/products/facade-4.png",
    ],
  },
  railing: {
    name: "Railing Systems",
    tagline: "Precision-engineered aluminium railing solutions for modern architectural spaces",
    description:
      "Almil Railing Systems are designed to deliver superior safety, durability, and contemporary aesthetics for residential and commercial applications. Manufactured using high-quality aluminium profiles and compatible infill materials, these systems provide long-term structural stability while enhancing visual openness.\n\nWith slim sightlines, modular configurations, and seamless integration with glass and metal components, the railing systems ensure secure protection without compromising architectural elegance. Suitable for balconies, staircases, terraces, atriums, and open corridors, they support both functional performance and refined design.",
    technicalAdvantages: [
      "High-strength aluminium profiles for reliable load performance",
      "Minimalistic design for modern architectural aesthetics",
      "Compatibility with glass, aluminium, stainless steel, and custom infill materials",
      "Corrosion-resistant powder-coated and anodized surface finishes",
      "Flexible mounting options for diverse site conditions",
      "Low maintenance with long service life",
    ],
    specifications: [
      "System material: Precision-extruded aluminium profiles",
      "Profile configurations: Slimline and heavy-duty railing sections",
      "Infill options: Toughened glass, aluminium balusters, stainless steel, decorative panels",
      "Mounting types: Top-mounted, side-mounted, floor-fixed systems",
      "Safety compliance: Designed as per relevant Indian and international safety standards",
      "Finish options: Powder coated and anodized aluminium finishes",
    ],
    images: [
      "/images/products/railing-1.jpg",
      "/images/products/railing-2.jpg",
      "/images/products/railing-3.jpg",
      "/images/products/railing-4.jpg",
    ],
  },
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isFullscreen) return;
      if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isFullscreen, selectedImage]);

  if (!id || !productData[id as keyof typeof productData]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/products"
            className="text-alumil-yellow hover:text-alumil-yellow/80 font-semibold"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const product = productData[id as keyof typeof productData];

  const nextImage = () =>
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () =>
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );

  return (
    <main className="min-h-screen">
      {/* Hero Section - Standardized */}
      <motion.section
        className="relative pt-32 pb-20 bg-alumil-dark text-white overflow-hidden"
      >
        {/* Animated background pattern */}
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-alumil-yellow/20 blur-3xl"
              style={{
                width: Math.random() * 300 + 200,
                height: Math.random() * 300 + 200,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

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
              className="inline-block px-5 py-2 bg-alumil-yellow text-alumil-dark rounded-full text-sm font-semibold mb-6"
            >
              Product Details
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {product.name}
              <br />
              <span className="text-alumil-yellow">{product.tagline}</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              {product.description}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content - Gallery & Tabs */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
        id="gallery"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Sticky Gallery */}
            <div className="lg:sticky lg:top-32">
              {/* Main Image with Magnetic Effect */}
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-6 cursor-pointer bg-gray-100"
                  onClick={() => setIsFullscreen(true)}
                >
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-6 right-6 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold shadow-xl text-gray-900 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    Click to expand
                  </motion.div>
                </motion.div>

                {/* Thumbnails with Hover Scale */}
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((img, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative h-24 md:h-32 rounded-2xl overflow-hidden transition-all ${selectedImage === idx
                        ? "ring-4 ring-alumil-yellow shadow-2xl shadow-alumil-yellow/30"
                        : "opacity-60 hover:opacity-100 shadow-lg ring-2 ring-gray-200"
                        } bg-gray-100`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Tabs with Smooth Transitions */}
            <div>
              <div className="flex gap-3 mb-8 p-2 bg-gray-50 rounded-2xl border border-gray-100">
                {[
                  { key: "overview", label: "Overview" },
                  { key: "features", label: "Features" },
                  { key: "specifications", label: "Specs" },
                ].map((tab) => (
                  <motion.button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex-1 px-6 py-4 rounded-xl font-semibold transition-all ${activeTab === tab.key
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white"
                      }`}
                  >
                    {activeTab === tab.key && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-alumil-yellow rounded-xl shadow-lg"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-100"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-alumil-dark">
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-alumil-yellow text-alumil-dark hover:bg-alumil-dark hover:text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                    >
                      Get a Quote
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
                )}
                {activeTab === "features" && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {product.technicalAdvantages.map((advantage, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 6, scale: 1.01 }}
                        className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-alumil-yellow hover:shadow-xl transition-all"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                          className="w-2 h-2 bg-alumil-yellow rounded-full mt-2 flex-shrink-0"
                        />
                        <p className="text-gray-700 leading-relaxed">
                          {advantage}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                {activeTab === "specifications" && (
                  <motion.div
                    key="specifications"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {product.specifications.map((spec, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 6, scale: 1.01 }}
                        className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-alumil-yellow hover:shadow-xl transition-all"
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-2 h-2 bg-alumil-yellow rounded-full mt-2 flex-shrink-0"
                        />
                        <p className="text-gray-700 leading-relaxed">{spec}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Fullscreen Modal - Keep as before */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4"
          >
            <div
              className="relative w-full h-full max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition"
                  >
                    <svg
                      className="w-8 h-8"
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
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold">
                {selectedImage + 1} / {product.images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
