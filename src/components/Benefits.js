import { ShieldCheck, Cpu, Zap, RefreshCcw } from "lucide-react";

export default function BenefitSection() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-purple-400 mb-4" />,
      title: "Enhanced Security",
      description: "Keep your data protected with end-to-end encryption and robust access controls.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-purple-400 mb-4" />,
      title: "High Performance",
      description: "Experience lightning-fast processing powered by advanced optimization techniques.",
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-400 mb-4" />,
      title: "Real-time Automation",
      description: "Automate routine tasks with intelligent workflows and event-driven actions.",
    },
    {
      icon: <RefreshCcw className="w-10 h-10 text-purple-400 mb-4" />,
      title: "Seamless Updates",
      description: "Stay up to date effortlessly with continuous integration and deployment.",
    },
  ];

  return (
    <section id="Benefits" className="bg-gray-950 py-20 px-4 sm:px-8 lg:px-32 text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Benefits of Using Our Platform</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-purple-500 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105 bg-gray-900"
          >
            {benefit.icon}
            <h3 className="text-xl font-semibold text-purple-300 mb-2">{benefit.title}</h3>
            <p className="text-gray-300">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
