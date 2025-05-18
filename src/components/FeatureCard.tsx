import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  icon: typeof LucideIcon;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-navy-800 p-6 rounded-xl border border-navy-600 shadow-xl transition-all duration-300 hover:shadow-neonBlue-500/10 hover:border-neonBlue-500/30 group">
      <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center mb-4 group-hover:bg-navy-600">
        <Icon className="w-6 h-6 text-neonBlue-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;