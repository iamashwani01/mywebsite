
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductFeatures from "./components/ProductFeatures";
import Benefits from "./components/Benefits";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import ProductForm from "./pages/ProductForm";

function App() {
  return (
    <Router>
      <div className="dark bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductFeatures />
                <Benefits />
                <Technology/>
                <Footer />
              </>
            }
          />
          <Route path="/form" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
