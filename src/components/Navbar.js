// src/components/Navbar.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handler = () => setShowShadow(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 bg-white ${showShadow ? "shadow-lg" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-600">MutaIntegri</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-700">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#technology" className="hover:underline">Technology</a>

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:underline">
              Exams <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute hidden group-hover:block bg-white mt-2 p-2 rounded shadow-md"
            >
              <a href="#exam1" className="block px-4 py-2 hover:bg-purple-50">Exam 1</a>
              <a href="#exam2" className="block px-4 py-2 hover:bg-purple-50">Exam 2</a>
              <a href="#exam3" className="block px-4 py-2 hover:bg-purple-50">Exam 3</a>
            </motion.div>
          </div>

          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
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
          {["Features", "Technology", "Exam 1", "Exam 2", "Exam 3", "Contact"].map((label, i) => (
            <a
              key={i}
              href={`#${label.toLowerCase().replace(" ", "")}`}
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
