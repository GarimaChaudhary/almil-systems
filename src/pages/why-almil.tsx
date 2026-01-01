import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Head from "next/head";

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "We listen, understand, and assess your unique requirements to offer the right solutions.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Planning & Designing",
    desc: "Our team collaborates with architects, builders, and homeowners to design customised aluminium systems that perfectly fit your space.",
    icon: "📐",
  },
  {
    number: "03",
    title: "Surface Coating",
    desc: "Using advanced U.S. coating technology, we ensure durable finishes that withstand weather, wear, and time.",
    icon: "🎨",
  },
  {
    number: "04",
    title: "Production",
    desc: "Precision-driven manufacturing delivers products that meet international quality standards with zero compromise.",
    icon: "🏭",
  },
  {
    number: "05",
    title: "Installation",
    desc: "Our trained experts provide seamless installation with attention to every detail.",
    icon: "🔧",
  },
  {
    number: "06",
    title: "After-Sales Support",
    desc: "Our commitment doesn't end at installation — we ensure long-lasting performance with dedicated service and support.",
    icon: "🛡️",
  },
];

// Animated Counter Component
function AnimatedCounter({
  end,
  suffix = "",
}: {
  end: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-5xl md:text-6xl font-bold text-[#FDB913]"
    >
      {end}
      {suffix}
    </motion.div>
  );
}

// Process Step Card with 3D Tilt
function ProcessStepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="relative group"
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-[#C9A96E] transition-colors duration-300"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glowing effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D97642]/0 via-[#C9A96E]/0 to-[#D97642]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />

        {/* Circle Indicator */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D97642] to-[#FDB913] rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-2xl mb-6 relative z-10"
          style={{
            transform: "translateZ(40px)",
          }}
        >
          {step.icon}
        </motion.div>

        {/* Number */}
        <div
          className="text-5xl font-bold text-[#FDB913] mb-3 text-center"
          style={{
            transform: "translateZ(30px)",
          }}
        >
          {step.number}
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-bold text-[#1A2332] mb-4 text-center"
          style={{
            transform: "translateZ(20px)",
          }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p
          className="text-gray-600 leading-relaxed text-center"
          style={{
            transform: "translateZ(10px)",
          }}
        >
          {step.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D97642] to-[#FDB913] origin-left z-50"
    />
  );
}

export default function WhyAlmil() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <>
      <Head>
        <title>Why Choose Almil | Premium Aluminium Systems</title>
        <meta
          name="description"
          content="Discover the Almil difference - from consultation to after-sales support. Global technology meets Indian living."
        />
      </Head>

      <ScrollProgress />

      <main ref={containerRef} className="min-h-screen bg-white">
        {/* Hero Section */}
        <motion.section
          style={{ opacity, scale }}
          className="relative pt-32 pb-20 bg-gradient-to-br from-[#1A2332] via-[#2D3142] to-[#1A2332] text-white overflow-hidden"
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
                className="absolute rounded-full bg-gradient-to-br from-[#D97642]/20 to-[#FDB913]/20 blur-3xl"
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
                className="inline-block px-5 py-2 bg-[#C9A96E] text-[#1A2332] rounded-full text-sm font-semibold mb-6"
              >
                Why Choose Almil
              </motion.div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Excellence in Every
                <br />
                <span className="text-[#C9A96E]">Step of the Journey</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              >
                At Almil, we believe excellence lies in the entire journey, from
                consultation to after-sales service.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Section with Animated Cards */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3ED] via-white to-[#F7F3ED] opacity-50" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-5 py-2 bg-gradient-to-r from-[#D97642] to-[#FDB913] text-white rounded-full text-sm font-semibold mb-6"
              >
                Our Process
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2332]">
                Six Steps to Perfection
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From first consultation to lifetime support, we're with you
                every step of the way
              </p>
            </motion.div>

            {/* Process Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, idx) => (
                <ProcessStepCard key={idx} step={step} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Tagline Section with Parallax */}
        <section className="relative py-32 overflow-hidden">
          {/* Parallax Background */}
          <motion.div
            style={{
              backgroundImage:
                "linear-gradient(rgba(26, 35, 50, 0.95), rgba(26, 35, 50, 0.95)), url('/images/gallery/Gallery-Image-8.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
            className="absolute inset-0"
          />

          {/* Animated Overlay */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 30% 50%, rgba(217, 118, 66, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 50%, rgba(201, 169, 110, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 50%, rgba(217, 118, 66, 0.2) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
          />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Almil Systems
                  <br />
                  <span className="text-[#C9A96E]">
                    Where Global Technology
                    <br />
                    Meets Indian Living
                  </span>
                </h2>
              </motion.div>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-32 h-1 bg-gradient-to-r from-[#D97642] to-[#FDB913] mx-auto rounded-full"
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-20 bg-gradient-to-r from-[#D97642] to-[#FDB913]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "500+", label: "Happy Clients" },
                { number: "10Y", label: "Warranty" },
                { number: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-center text-white"
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1A2332] text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience the Almil Difference
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can transform your space with premium
                aluminium systems
              </p>
              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(217, 118, 66, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#FDB913] hover:bg-[#E5A50A] text-white rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Get Started Today
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
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
                </motion.svg>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
