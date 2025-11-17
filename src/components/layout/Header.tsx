"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PRODUCTS", href: "/products" },
  { name: "WHY ALMIL", href: "/why-almil" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { scrollY } = useScroll();

  // Check if we're on a product detail page (light background)
  const isProductDetail = router.pathname.startsWith("/products/");
  const needsSolidBg = scrolled || isProductDetail;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous !== undefined) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }

    setScrolled(latest > 20);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        needsSolidBg
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Hover Effect */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Almil Systems"
                width={140}
                height={48}
                className="h-12 w-auto transition-all duration-300"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation with Magnetic Effect */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item, index) => {
              const isActive = router.pathname === item.href;

              return (
                <Link key={item.name} href={item.href} className="relative">
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`text-sm font-semibold tracking-wide transition-colors duration-300 relative group ${
                      isActive
                        ? needsSolidBg
                          ? "text-[#D97642]"
                          : "text-white"
                        : needsSolidBg
                        ? "text-[#2D3142] hover:text-[#D97642]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}

                    {/* Animated Underline */}
                    <motion.span
                      className={`absolute -bottom-1 left-0 h-0.5 ${
                        needsSolidBg ? "bg-[#D97642]" : "bg-white"
                      }`}
                      initial={{ width: isActive ? "100%" : "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </motion.span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button with Shimmer Effect */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact"
                className={`group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 overflow-hidden ${
                  needsSolidBg
                    ? "bg-[#D97642] text-white shadow-lg shadow-[#D97642]/30"
                    : "bg-white text-[#1A2332] shadow-xl"
                }`}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <span className="relative z-10">GET QUOTE</span>
                <motion.svg
                  className="w-4 h-4 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button with Animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors relative"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6 relative"
            >
              {/* Hamburger to X animation */}
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className={`absolute left-0 top-1 w-6 h-0.5 ${
                  needsSolidBg ? "bg-[#1A2332]" : "bg-white"
                } transition-colors`}
                style={{ transformOrigin: "center" }}
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className={`absolute left-0 top-[11px] w-6 h-0.5 ${
                  needsSolidBg ? "bg-[#1A2332]" : "bg-white"
                } transition-colors`}
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className={`absolute left-0 top-[21px] w-6 h-0.5 ${
                  needsSolidBg ? "bg-[#1A2332]" : "bg-white"
                } transition-colors`}
                style={{ transformOrigin: "center" }}
              />
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu with Stagger Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-6">
              <motion.div
                className="flex flex-col gap-2"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.03, staggerDirection: -1 },
                  },
                }}
              >
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: -10, opacity: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-base font-semibold py-4 px-4 rounded-lg transition-all duration-300 ${
                        router.pathname === item.href
                          ? "bg-[#F7F3ED] text-[#D97642] shadow-sm"
                          : "text-[#2D3142] hover:bg-[#F7F3ED]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: -10, opacity: 0 },
                  }}
                  className="mt-2"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-[#D97642] hover:bg-[#C9A96E] text-white rounded-lg font-semibold transition-all duration-300 shadow-lg"
                  >
                    GET QUOTE
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
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
