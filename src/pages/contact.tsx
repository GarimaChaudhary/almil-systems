import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Head from "next/head";

const contactInfo = [
  {
    icon: "📍",
    title: "Visit Us",
    details: ["N 286, New Atish Market", "Jaipur, Rajasthan 302020", "India"],
  },
  {
    icon: "📞",
    title: "Call Us",
    details: ["+91 9024268374", "Mon-Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
  {
    icon: "✉️",
    title: "Email Us",
    details: [
      "info@almilsystems.in",
      "sales@almilsystems.in",
      "support@almilsystems.in",
    ],
  },
];

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

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    console.log("Form submitted:", formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Thank you for contacting us! We'll get back to you within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Head>
        <title>Contact Us | Almil Systems India</title>
        <meta
          name="description"
          content="Get in touch with Almil Systems - premium aluminium windows and doors in Jaipur. Contact us for quotes, inquiries, or support."
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
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-5 py-2 bg-[#C9A96E] text-[#1A2332] rounded-full text-sm font-semibold mb-6"
              >
                Contact Us
              </motion.div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Let's Start a
                <br />
                <span className="text-[#C9A96E]">Conversation</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              >
                Have a project in mind? We're here to help bring your vision to
                life with premium aluminium solutions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-24 bg-[#F7F3ED]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, idx) => (
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
                      {info.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#1A2332] mb-4">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 mb-1 leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2332]">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D97642] focus:ring-2 focus:ring-[#D97642]/20 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D97642] focus:ring-2 focus:ring-[#D97642]/20 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D97642] focus:ring-2 focus:ring-[#D97642]/20 transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D97642] focus:ring-2 focus:ring-[#D97642]/20 transition-all outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="product">Product Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D97642] focus:ring-2 focus:ring-[#D97642]/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-[#D97642] hover:bg-[#C9A96E] text-white rounded-xl font-semibold text-lg shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Map Section with Jaipur Location */}
        <section className="py-24 bg-[#F7F3ED]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2332]">
                Find Us in Jaipur
              </h2>
              <p className="text-xl text-gray-600">
                Visit our showroom to experience our premium aluminium systems
                firsthand
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-300"
            >
              {/* Add your Google Maps iframe here with the Jaipur address */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2!2d75.8!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Almil Systems Location in Jaipur"
              />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#1A2332] text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Schedule a consultation with our experts to discuss your project
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="tel:+919024268374"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-5 bg-[#D97642] hover:bg-[#C9A96E] text-white rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </motion.a>
                <motion.a
                  href="mailto:info@almil.org"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
