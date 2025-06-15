export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">MutaIntegri</h2>
          <p className="text-sm">
            Ensuring transparency, auditability, and trust with blockchain-powered integrity solutions.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#tech" className="hover:text-white">Technology</a></li>
            <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">Email: contact@mutaintegri.com</p>
          <p className="text-sm">Phone: +91-9876543210</p>
        </div>
      </div>

      <div className="text-center text-xs mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} MutaIntegri. All rights reserved.
      </div>
    </footer>
  );
}


