// src/components/Navbar.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handler = () => setShowShadow(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Features", href: "#Features" },
    { label: "Benefits", href: "#Benefits" },
    { label: "Technology", href: "#Technology" },
    { label: "Contact", href: "#Footer" },
    
    
  ];

  return (
    <motion.nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 bg-white ${
        showShadow ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-600">MutaIntegri</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-700">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="hover:underline">
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-md"
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block py-3 px-6 text-gray-700 border-b hover:bg-purple-50"
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
