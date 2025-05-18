import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { EyeOff, Mic, Bot, DivideIcon as LucideIcon, Shield, Brain, Laptop, Zap, LucideIcon as LucideIconType } from 'lucide-react';

const features = [
  {
    icon: EyeOff,
    title: 'Window Hiding',
    description: 'Hide sensitive windows from screen sharing and screen captures with real-time selection and secure technology that works with all major applications.'
  },
  {
    icon: Mic,
    title: 'Audio Transcription',
    description: 'Record and transcribe audio from any input or output device with AI-powered transcription using Google\'s Gemini API. Save and export transcripts.'
  },
  {
    icon: Bot,
    title: 'AI Chat Assistant',
    description: 'Integrated chat interface powered by advanced language models with context-aware responses and support for markdown formatting.'
  },
  {
    icon: Shield,
    title: 'Privacy Protection',
    description: 'Your data stays private with local processing where possible. We do not permanently store your recordings or transcripts on our servers.'
  },
  {
    icon: Brain,
    title: 'Multiple AI Models',
    description: 'Choose from multiple AI models to suit your specific needs, ensuring you get the most relevant and accurate responses.'
  },
  {
    icon: Laptop,
    title: 'Cross-Platform',
    description: 'Works seamlessly across all your devices and screen sharing applications without compromising performance.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-gray-400">
            GhostMode AI comes packed with features designed to enhance your privacy and productivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon as LucideIconType}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-navy-800 rounded-xl p-8 border border-navy-700">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
              <h3 className="text-2xl font-bold text-white mb-4">How GhostMode AI Works</h3>
              <p className="text-gray-400 mb-6">
                GhostMode AI uses advanced technology to hide windows during screen sharing while providing powerful AI features for enhancing your productivity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neonBlue-500/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-neonBlue-400 text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-300">Select windows you want to hide using our intuitive checkbox interface</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neonBlue-500/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-neonBlue-400 text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-300">Start your screen sharing in any application</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neonBlue-500/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-neonBlue-400 text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-300">Record audio and get instant transcriptions powered by AI</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neonBlue-500/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-neonBlue-400 text-sm font-bold">4</span>
                  </div>
                  <p className="text-gray-300">Use the AI chat assistant for help during your workflow</p>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 bg-gradient-to-br from-navy-700 to-navy-800 rounded-xl flex items-center justify-center shadow-xl">
                <div className="absolute inset-0 bg-neonBlue-500/10 rounded-xl"></div>
                <Zap className="w-24 h-24 text-neonBlue-400 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;