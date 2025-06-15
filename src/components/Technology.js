// src/components/Technology.js
import { motion } from "framer-motion";
import { Cpu, Cloud, Database, Lock } from "lucide-react";

const techItems = [
  {
    icon: <Cpu className="w-10 h-10 text-purple-400 mb-4" />,
    title: "AI-Powered Logic",
    description: "Intelligent algorithms to streamline operations and boost productivity."
  },
  {
    icon: <Cloud className="w-10 h-10 text-purple-400 mb-4" />,
    title: "Cloud Native",
    description: "Scalable, secure cloud-native architecture built for modern systems."
  },
  {
    icon: <Database className="w-10 h-10 text-purple-400 mb-4" />,
    title: "Data-Centric",
    description: "Everything revolves around fast, secure, and reliable data handling."
  },
  {
    icon: <Lock className="w-10 h-10 text-purple-400 mb-4" />,
    title: "Built-in Security",
    description: "End-to-end encryption and compliance built into the core."
  }
];

export default function Technology() {
  return (
    <section className="bg-gray-950 py-16 px-4 sm:px-8 lg:px-32 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Our Technology Stack
      </motion.h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {techItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-purple-500/20 hover:scale-[1.03] transition-all duration-300"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
