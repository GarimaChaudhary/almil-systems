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
      "/images/products/Slider-1.jpg",
      "/images/products/Slider-2.jpg",
      "/images/products/Slim-Slider.jpg",
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
      "/images/products/Slim-Slider.jpg",
      "/images/products/Slider-1.jpg",
      "/images/products/Slider-2.jpg",
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
      "/images/products/Slider-2.jpg",
      "/images/products/Casement-Door-4.jpg",
      "/images/products/Casement-Door-5.jpg",
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
      "/images/products/Casement-Door-5.jpg",
      "/images/products/Casement-2.png",
      "/images/products/Casement-1.png",
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
      "/images/products/Casement-1.jpg",
      "/images/products/Casement-3.jpg",
      "/images/products/Casement-Door-4.jpg",
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
            className="text-[#FDB913] hover:text-[#C9A96E] font-semibold"
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
    <main className="min-h-screen pt-20">
      {/* Hero Section with Dark Background & Integrated Breadcrumb */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A2332] via-[#2D3142] to-[#3d4556]">
        {/* Animated Background Gradient */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(217, 118, 66, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(201, 169, 110, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(217, 118, 66, 0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * 800,
              }}
              animate={{
                y: [null, Math.random() * -200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 py-16"
        >
          <div className="container mx-auto px-6">
            {/* Breadcrumb Inside Hero */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center text-sm mb-12"
            >
              <Link
                href="/"
                className="text-white/70 hover:text-white transition font-medium"
              >
                Home
              </Link>
              <svg
                className="w-4 h-4 mx-2 text-white/40"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                href="/products"
                className="text-white/70 hover:text-white transition font-medium"
              >
                Products
              </Link>
              <svg
                className="w-4 h-4 mx-2 text-white/40"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[#FDB913] font-semibold">
                {product.name}
              </span>
            </motion.div>

            <div className="max-w-5xl mx-auto text-center">
              {/* Premium Badge with Shine Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase mb-8 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(90deg, #D97642, #C9A96E, #D97642)",
                  backgroundSize: "200% 100%",
                }}
              >
                <motion.div
                  animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ backgroundSize: "200% 100%" }}
                />
                <svg
                  className="w-4 h-4 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="relative z-10 text-white">
                  Premium Collection
                </span>
              </motion.div>

              {/* Product Name with Letter Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
              >
                {product.name.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.02 }}
                    className="inline-block text-white"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Tagline with Fade-in */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
              >
                {product.tagline}
              </motion.p>

              {/* CTA Buttons with Hover Glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap justify-center gap-4 mb-16"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D97642] to-[#FDB913] text-white rounded-xl font-semibold text-base overflow-hidden"
                >
                  {/* Animated shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  <span className="relative z-10">Request Quote</span>
                  <svg
                    className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
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
                </Link>
                <button
                  onClick={() => {
                    const gallery = document.getElementById("gallery");
                    if (gallery) {
                      const headerHeight = 120;
                      const elementPosition =
                        gallery.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - headerHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300"
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
                      strokeWidth={2.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>View Gallery</span>
                </button>
              </motion.div>

              {/* Stats Cards with Stagger Animation & Glass Morphism */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 1.2,
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="grid grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {[
                  { value: "5+", label: "Configurations", icon: "⚙️" },
                  { value: "10Y", label: "Warranty", icon: "🛡️" },
                  { value: "100%", label: "Premium", icon: "✨" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 transition-all duration-300 hover:bg-white/15 cursor-pointer overflow-hidden"
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D97642]/20 to-[#FDB913]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                        className="text-4xl mb-2"
                      >
                        {stat.icon}
                      </motion.div>
                      <div className="text-4xl font-bold text-[#FDB913] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/80 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

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
                      className={`relative h-24 md:h-32 rounded-2xl overflow-hidden transition-all ${
                        selectedImage === idx
                          ? "ring-4 ring-[#D97642] shadow-2xl shadow-[#D97642]/30"
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
                    className={`relative flex-1 px-6 py-4 rounded-xl font-semibold transition-all ${
                      activeTab === tab.key
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white"
                    }`}
                  >
                    {activeTab === tab.key && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-[#D97642] to-[#FDB913] rounded-xl shadow-lg"
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#1A2332] to-[#D97642] bg-clip-text text-transparent">
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D97642] to-[#FDB913] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
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
                        className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#D97642] hover:shadow-xl transition-all"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                          className="w-2 h-2 bg-gradient-to-br from-[#D97642] to-[#FDB913] rounded-full mt-2 flex-shrink-0"
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
                        className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#D97642] hover:shadow-xl transition-all"
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-2 h-2 bg-gradient-to-br from-[#D97642] to-[#FDB913] rounded-full mt-2 flex-shrink-0"
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
