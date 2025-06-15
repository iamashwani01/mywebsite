import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://source.unsplash.com/featured/?technology",
  "https://source.unsplash.com/featured/?ai",
  "https://source.unsplash.com/featured/?data",
  "https://source.unsplash.com/featured/?integration",
];




export default function Hero() {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" relative bg-gray-80n0 text-white py-20 px-4 sm:px-8 lg:px-32 overflow-hidden">
      
      <motion.img
        key={images[currentImage]}
        src={images[currentImage]}
        alt="Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Build Secure, Smart, and Integrated Workflows
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            MutaIntegri is your AI-powered solution for seamless system integration and intelligent automation.
          </p>
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/form")}
  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
>
  Submit Your Product
</motion.button>

        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="https://mutaengine.cloud/static/media/hero-image.38cf5ecdc83c98a02b1e.webp"
            alt="Hero illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
