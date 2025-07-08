
const StepsSection = () => {
  const steps = [
    { number: "01", title: "Join Slack", description: "Connect with the community of teen builders" },
    { number: "02", title: "Design Hardware/PCB", description: "Create your schematic and board layout" },
    { number: "03", title: "Upload to Vendor", description: "Prepare files for manufacturing" },
    { number: "04", title: "Submit Repo", description: "Share your code and documentation" },
    { number: "05", title: "Get Approved", description: "Our team reviews your project" },
    { number: "06", title: "Order", description: "We handle the purchasing process" },
    { number: "07", title: "Ship It", description: "Receive your components and build!" }
  ];

  return (
    <section className="py-20 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-green-400 font-mono">
          &gt; How It Works
        </h2>
        <p className="text-center text-green-300 mb-16 text-lg">
          From idea to hardware in 7 simple steps
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-12 left-full w-6 h-0.5 bg-green-400/30 z-0" />
              )}
              
              <div className="bg-black/50 border border-green-900/50 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 relative z-10 group-hover:shadow-lg group-hover:shadow-green-400/10">
                <div className="text-3xl font-bold text-green-400 font-mono mb-3">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-green-300 mb-2 font-mono">
                  {step.title}
                </h3>
                <p className="text-green-500 text-sm">
                  {step.description}
                </p>
                
                {/* Glowing dot */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
