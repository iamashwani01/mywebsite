// src/pages/ProductForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function ProductForm() {


  
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    productKey: "",
    file: null,
  });
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, productKey, file } = form;

    if (!firstName || !lastName || !email || !productKey || !file) {
      setError("Please fill in all fields and attach a file.");
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }

    setError("");
    // TODO: Submit to backend
    alert("Product Submitted Successfully!");
    navigate("/");
  };

  const handleCancel = () => navigate("/");

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <motion.form
        onSubmit={handleSubmit}
        className={`bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md text-white space-y-4 ${
          shake ? "animate-shake" : ""
        }`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Avatar */}
        <div className="flex justify-center mb-2">
          <div className="bg-purple-700 p-3 rounded-full">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center">Product Registration</h2>

        {/* Name Fields */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="flex-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="flex-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Product Key */}
        <input
          type="text"
          name="productKey"
          value={form.productKey}
          onChange={handleChange}
          placeholder="Product Key"
          required
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* File Upload */}
        <input
          type="file"
          name="file"
          accept=".pdf,.jpeg,.jpg,.png"
          onChange={handleChange}
          required
          className="w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:font-semibold file:bg-purple-600 hover:file:bg-purple-700"
        />

        {/* Error Message */}
        {error && <p className="text-red-500 text-center text-sm">{error}</p>}

        {/* Buttons Side‑by‑Side */}
        <div className="flex gap-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-semibold transition"
          >
            Submit
          </motion.button>
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded font-semibold transition"
          >
            Cancel
          </button>
        </div>
      </motion.form>
    </div>
  );
}
