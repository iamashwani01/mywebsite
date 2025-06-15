import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-950 text-white py-40 px-4 sm:px-8 lg:px-32 overflow-hidden">
      {/* Background Image */}
      <motion.img
        src="https://mutaengine.cloud/static/media/img2.88727ed124229bd838a0.webp"
        alt="Hero Background"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 0.9, x: -100 }}
        transition={{ duration: 1.4 }}
        className="absolute right-[10rem] top-[28%] h-[420px] w-auto object-contain z-0 hidden md:block"
      />

      {/* Dark overlay gradient for smooth blend */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/50 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
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

        {/* Mobile fallback image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center md:hidden z-10"
        >
          <img
            src="https://mutaengine.cloud/static/media/img2.88727ed124229bd838a0.webp"
            alt=""
            className="w-full max-w-xs object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
