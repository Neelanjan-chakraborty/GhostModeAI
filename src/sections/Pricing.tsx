import React from 'react';
import PricingCard from '../components/PricingCard';

const pricingPlans = [
  {
    name: "Free",
    price: "Free",
    description: "Basic features for personal use",
    features: [
      { text: "Window hiding for 2 windows", included: true },
      { text: "Audio transcription (5 minutes/day)", included: true },
      { text: "Basic AI chat assistant", included: true },
      { text: "Community support", included: true },
      { text: "Unlimited window hiding", included: false },
      { text: "Advanced transcription features", included: false },
      { text: "Multiple AI models", included: false },
      { text: "Priority support", included: false },
    ]
  },
  {
    name: "Pro",
    price: "₹599",
    description: "Advanced features for professionals",
    features: [
      { text: "Window hiding for unlimited windows", included: true },
      { text: "Audio transcription (60 minutes/day)", included: true },
      { text: "Advanced AI chat assistant", included: true },
      { text: "Multiple AI models", included: true },
      { text: "Email support", included: true },
      { text: "Customizable shortcuts", included: true },
      { text: "Team collaboration", included: false },
      { text: "Priority support", included: false },
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "₹1,299",
    description: "Complete solution for teams",
    features: [
      { text: "Window hiding for unlimited windows", included: true },
      { text: "Unlimited audio transcription", included: true },
      { text: "Premium AI chat assistant", included: true },
      { text: "All AI models", included: true },
      { text: "Priority support", included: true },
      { text: "Customizable shortcuts", included: true },
      { text: "Team collaboration", included: true },
      { text: "Custom deployment options", included: true },
    ]
  }
];

const Pricing = () => {
  // Prepare email with preloaded message
  const emailSubject = "GhostModeAI Enterprise Inquiry";
  const emailBody = "Hello Neelanjan,\n\nI'm interested in learning more about GhostModeAI's enterprise solutions. Could you please provide more information about pricing and features for our organization?\n\nThank you.";
  const mailtoLink = `mailto:neelanjan.chakraborty@azurerift.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section id="pricing" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400">
            Choose the plan that fits your needs. All plans include core privacy features.
          </p>
          <div className="mt-4 inline-flex items-center text-sm text-neonBlue-400 backdrop-blur-sm px-4 py-2 rounded-full bg-neonBlue-500/10 border border-neonBlue-500/20">
            <span>Monthly subscription • GST included • Cancel anytime</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Need a custom solution for your organization?</p>
          <a 
            href={mailtoLink} 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neonBlue-500/20 to-purple-500/20 rounded-full border border-neonBlue-500/30 backdrop-blur-sm hover:from-neonBlue-500/30 hover:to-purple-500/30 transition-all duration-300"
          >
            <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-neonBlue-400 to-purple-400">
              Contact Sales Team
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;