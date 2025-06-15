import { Puzzle, Settings, Brain, ShieldCheck } from "lucide-react";

export default function ProductFeatures() {
  const features = [
    {
      icon: <Puzzle className="w-10 h-10 text-purple-400 mb-4" />,
      title: "Easy to Integrate",
      description: "Seamlessly integrates with your existing systems using modern APIs.",
    },
    {
      icon: <Settings className="w-10 h-10 text-purple-400 mb-4" />,
      title: "Robust & Flexible",
      description: "Built to scale and adapt to your unique business needs.",
    },
    {
      icon: <Brain className="w-10 h-10 text-purple-400 mb-4" />,
      title: "Smart & Adaptive",
      description: "AI-driven decisions tailored to your workflows.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-purple-400 mb-4" />,
      title: "Privacy-First",
      description: "Designed with privacy and compliance in mind from day one.",
    },
  ];

  return (
    <section className="bg-gray-950 py-20 px-4 sm:px-8 lg:px-32 text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Key Features
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-purple-500 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105 bg-gray-900"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
