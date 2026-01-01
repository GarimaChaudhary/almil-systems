import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Head from "next/head";

const values = [
  {
    icon: "🎯",
    title: "Quality First",
    description:
      "Every product undergoes rigorous testing to meet international standards",
    stat: "100%",
    label: "Quality Assured",
  },
  {
    icon: "🤝",
    title: "Customer Focus",
    description:
      "Your satisfaction drives everything we do, from design to installation",
    stat: "500+",
    label: "Happy Clients",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "Constantly evolving with the latest technology and design trends",
    stat: "15+",
    label: "Years Experience",
  },
  {
    icon: "🌍",
    title: "Sustainability",
    description:
      "Committed to eco-friendly practices and energy-efficient solutions",
    stat: "30%",
    label: "Energy Saved",
  },
];

const team = [
  {
    name: "Engineering Excellence",
    description: "US-trained engineers with decades of experience",
    image: "/images/gallery/Gallery-Image-2.jpg",
  },
  {
    name: "Quality Craftsmanship",
    description: "Skilled artisans dedicated to perfection",
    image: "/images/gallery/Gallery-Image-3.jpg",
  },
  {
    name: "Customer Service",
    description: "Always here to support your journey",
    image: "/images/gallery/Gallery-Image-4.jpg",
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

// Magnetic Card Component
function MagneticCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.1, y: y * 0.1 });
  };

  const resetPosition = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={resetPosition}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Almil Systems India</title>
        <meta
          name="description"
          content="Learn about Almil Systems - 15+ years of excellence in premium aluminium windows and doors, now in India."
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1A2332] via-[#2D3142] to-[#1A2332] text-white overflow-hidden">
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

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-5 py-2 bg-[#C9A96E] text-[#1A2332] rounded-full text-sm font-semibold mb-6"
              >
                About Almil Systems
              </motion.div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                15+ Years of Global Excellence,
                <br />
                <span className="text-[#C9A96E]">Now in India</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Bringing world-class aluminium systems, superior craftsmanship,
                and unmatched quality to transform Indian homes and businesses.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story with Mosaic Grid */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left: Story Text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2332]">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Founded in the United States over 15 years ago, Almil
                    Systems has been at the forefront of premium aluminium
                    window and door manufacturing.
                  </p>
                  <p>
                    Our journey began with a simple mission: to combine German
                    engineering precision with American innovation.
                  </p>
                  <p>
                    Today, we're proud to bring this legacy to India. With our
                    state-of-the-art facility and expert team, we're committed
                    to setting new standards in the Indian fenestration
                    industry.
                  </p>
                  <p>
                    Every window, every door, every system we create is a
                    testament to our dedication to quality, innovation, and
                    customer satisfaction.
                  </p>
                </div>

                {/* Key Points */}
                <div className="mt-8 space-y-4">
                  {[
                    { icon: "🇺🇸", text: "US-Engineered Excellence" },
                    { icon: "🏭", text: "State-of-the-Art Facility" },
                    { icon: "✨", text: "Premium Quality Standards" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-lg font-semibold text-[#1A2332]">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Image Mosaic */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
                  {/* Large Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="col-span-4 row-span-4 relative rounded-2xl overflow-hidden shadow-2xl group"
                  >
                    <img
                      src="/images/gallery/Gallery-Image-1.jpg"
                      alt="Almil Systems Quality"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="col-span-2 row-span-3 relative rounded-2xl overflow-hidden shadow-xl group"
                  >
                    <img
                      src="/images/gallery/Gallery-Image-5.jpg"
                      alt="Modern Design"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group"
                  >
                    <img
                      src="/images/gallery/Gallery-Image-6.jpg"
                      alt="Craftsmanship"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group"
                  >
                    <img
                      src="/images/gallery/Gallery-Image-7.jpg"
                      alt="Premium Materials"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="col-span-2 row-span-3 relative rounded-2xl overflow-hidden shadow-xl group"
                  >
                    <img
                      src="/images/gallery/Gallery-Image-2.jpg"
                      alt="Innovation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2332]">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <MagneticCard
                  key={idx}
                  className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#C9A96E] transition-all duration-300 text-center cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.div
                      className="text-5xl mb-4"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>
                    <AnimatedCounter end={value.stat} />
                    <div className="text-sm text-gray-500 mb-4">
                      {value.label}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A2332] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2332]">
                Excellence at Every Level
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our commitment to quality is reflected in every team
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group relative h-96 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-200">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-20 bg-gradient-to-r from-[#D97642] to-[#FDB913]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Years Global" },
                { number: "500+", label: "Projects" },
                { number: "10Y", label: "Warranty" },
                { number: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
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
                Ready to Experience Excellence?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's discuss how Almil Systems can transform your space
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#FDB913] hover:bg-[#E5A50A] text-white rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Get in Touch
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
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
