import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";

const projectImages = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    src: `/images/projects/${i + 1}.jpg`,
}));

const clients = [
    { id: 1, name: "Client 1", logo: "/images/clients/client-1.png" },
    { id: 2, name: "Client 2", logo: "/images/clients/client-2.jpg" },
    { id: 3, name: "Client 3", logo: "/images/clients/client-3.jpg" },
    { id: 4, name: "Client 4", logo: "/images/clients/client-4.jpg" },
    { id: 5, name: "Client 5", logo: "/images/clients/client-5.avif" },
    { id: 6, name: "Client 6", logo: "/images/clients/client-6.png" },
    { id: 7, name: "Client 7", logo: "/images/clients/client-7.png" },
    { id: 8, name: "Client 8", logo: "/images/clients/client-8.svg.png" },
    { id: 9, name: "Client 9", logo: "/images/clients/client-9.jpg" },
    { id: 10, name: "Client 10", logo: "/images/clients/client-10.gif" },
    { id: 11, name: "Client 11", logo: "/images/clients/client-11.png" },
    { id: 12, name: "Client 12", logo: "/images/clients/client-12.svg.png" },
    { id: 13, name: "Client 13", logo: "/images/clients/client-13.jpg" },
    { id: 14, name: "Client 14", logo: "/images/clients/client-14.png" },
    { id: 15, name: "Client 15", logo: "/images/clients/client-15.png" },
    { id: 16, name: "Client 16", logo: "/images/clients/client-16.png" },
    { id: 17, name: "Client 17", logo: "/images/clients/client-17.jpg" },
    { id: 18, name: "Client 18", logo: "/images/clients/client-18.jpg" },
    { id: 19, name: "Client 19", logo: "/images/clients/client-19.jpg" },
    { id: 20, name: "Client 20", logo: "/images/clients/client-20.jpg" },
    { id: 21, name: "Client 21", logo: "/images/clients/client-21.jpg" },
    { id: 23, name: "Client 23", logo: "/images/clients/client-23.jpg" },
    { id: 24, name: "Client 24", logo: "/images/clients/client-24.jpg" },
    { id: 25, name: "Client 25", logo: "/images/clients/client-25.svg" },
    { id: 26, name: "Client 26", logo: "/images/clients/client-26.png" },
    { id: 27, name: "Client 27", logo: "/images/clients/client-27.jpg" },
    { id: 28, name: "Client 28", logo: "/images/clients/client-28.png" },
    { id: 29, name: "Client 29", logo: "/images/clients/client-29.png" },
    { id: 30, name: "Client 30", logo: "/images/clients/client-30.png" },
    { id: 31, name: "Client 31", logo: "/images/clients/client-31.jpg" },
];

// Lightbox Component
function Lightbox({ image, onClose }: { image: string | null; onClose: () => void }) {
    if (!image) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-7xl max-h-[90vh] w-full h-full"
            >
                <Image
                    src={image}
                    alt="Project detail"
                    fill
                    className="object-contain"
                    quality={100}
                />
            </motion.div>
            <button
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
            >
                ×
            </button>
        </motion.div>
    );
}

export default function Projects() {
    const containerRef = useRef(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

    return (
        <>
            <Head>
                <title>Our Projects & Clients | Almil Systems India</title>
                <meta
                    name="description"
                    content="Explore our portfolio of premium aluminium window and door installations across India, and see the clients we are proud to serve."
                />
            </Head>

            <main ref={containerRef} className="min-h-screen bg-white">
                {/* Hero Section - Standardized */}
                <motion.section
                    style={{ opacity, scale }}
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
                                Our Projects
                            </motion.div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Crafting Excellence
                                <br />
                                <span className="text-alumil-yellow">Across India</span>
                            </h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                            >
                                A showcase of our premium aluminium installations, bringing
                                world-class quality to homes and businesses.
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Photo Gallery - Clean Uniform Grid */}
                <section className="py-24 bg-white px-6">
                    <div className="container mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-alumil-dark mb-4">
                                Project Gallery
                            </h2>
                            <p className="text-lg text-alumil-dark/60 max-w-2xl mx-auto">
                                Beautiful installations showcasing our commitment to quality and design excellence
                            </p>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-alumil-yellow to-transparent mx-auto rounded-full mt-6"></div>
                        </motion.div>

                        {/* Clean Uniform Grid - 3 columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projectImages.map((image, idx) => (
                                <motion.div
                                    key={image.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        delay: idx * 0.05,
                                        duration: 0.5,
                                    }}
                                    onClick={() => setLightboxImage(image.src)}
                                    className="relative group cursor-zoom-in overflow-hidden rounded-xl aspect-[4/3] bg-gray-100"
                                >
                                    <Image
                                        src={image.src}
                                        alt={`Project ${image.id}`}
                                        fill
                                        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {/* Zoom Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-8 h-8 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Clients Section - Beautified */}
                <section className="py-24 bg-gradient-to-b from-white to-alumil-gray px-6 relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute top-20 right-0 w-72 h-72 bg-alumil-yellow/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-0 w-96 h-96 bg-alumil-yellow/5 rounded-full blur-3xl"></div>

                    <div className="container mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-alumil-dark mb-4">
                                Trusted By Industry Leaders
                            </h2>
                            <p className="text-lg text-alumil-dark/60 max-w-2xl mx-auto mb-6">
                                Proud partners of leading brands across diverse industries
                            </p>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-alumil-yellow to-transparent mx-auto rounded-full"></div>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                            {clients.map((client, idx) => (
                                <motion.div
                                    key={client.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        delay: idx * 0.03,
                                        duration: 0.4,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    className="relative group"
                                    style={{ zIndex: 1 }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.zIndex = '50';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.zIndex = '1';
                                    }}
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.15,
                                            y: -8,
                                            rotateZ: 0
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20
                                        }}
                                        className="relative flex items-center justify-center p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 aspect-[4/3] cursor-pointer border border-gray-100 hover:border-alumil-yellow/30 overflow-hidden"
                                    >
                                        {/* Subtle gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-alumil-yellow/0 to-alumil-yellow/0 group-hover:from-alumil-yellow/5 group-hover:to-transparent transition-all duration-300" />

                                        <div className="relative w-full h-full p-2">
                                            <Image
                                                src={client.logo}
                                                alt={client.name}
                                                fill
                                                className="object-contain transition-all duration-300 group-hover:brightness-110"
                                            />
                                        </div>

                                        {/* Decorative corner accent */}
                                        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-alumil-yellow/0 border-l-[20px] border-l-transparent group-hover:border-b-alumil-yellow/20 transition-all duration-300 rounded-bl-xl" />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats or trust indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-16 text-center"
                        >
                            <p className="text-alumil-dark/70 text-lg">
                                <span className="font-bold text-alumil-yellow text-2xl">30+</span> leading brands trust our premium aluminium solutions
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Lightbox */}
            {lightboxImage && <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
        </>
    );
}
