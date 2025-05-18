import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

type PricingFeature = {
  text: string;
  included: boolean;
};

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
};

const PricingCard = ({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false 
}: PricingCardProps) => {
  // Prepare email with preloaded message specific to the plan
  const emailSubject = `GhostModeAI ${name} Plan Inquiry`;
  const emailBody = `Hello Neelanjan,\n\nI'm interested in the ${name} plan for GhostModeAI. I would like to learn more about the features and payment options.\n\nThank you.`;
  const mailtoLink = `mailto:neelanjan.chakraborty@azurerift.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className={`relative bg-navy-800 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 ${
      highlighted ? 'border-2 border-neonBlue-500 shadow-lg shadow-neonBlue-500/20' : 'border border-navy-600'
    }`}>
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-neonBlue-500 to-neonBlue-600 text-white text-center py-1.5 font-semibold">
          Most Popular
        </div>
      )}
      
      <div className={`p-6 ${highlighted ? 'pt-10' : 'pt-6'}`}>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== "Free" && <span className="text-gray-400 text-sm ml-1">/month</span>}
        </div>
        
        <a href={mailtoLink}>
          <Button 
            variant={highlighted ? "primary" : "outline"}
            className="w-full mb-6"
          >
            {price === "Free" ? "Get Started" : "Contact Sales"}
          </Button>
        </a>
        
        <div>
          <h4 className="text-white font-medium mb-3">Features</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className={`w-5 h-5 mt-0.5 mr-3 ${
                  feature.included ? 'text-neonBlue-400' : 'text-gray-600'
                }`} />
                <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;