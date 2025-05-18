import React from 'react';
import { Shield, Lock, Eye, AlertCircle, Apple, Monitor } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-navy-900">
      {/* Enhanced background effects */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-neonBlue-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute -top-20 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl opacity-20"></div>
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-navy-800/80 rounded-full border border-neonBlue-500/30 mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-neonBlue-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">Privacy-First Productivity Tool</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonBlue-400 to-neonBlue-600">Ace Every Meeting</span> with Complete Privacy
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            GhostMode AI helps you maintain confidentiality during video calls, screen sharing, and AI-assisted workflows with intelligent window hiding, audio transcription, and AI chat capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/Ghost Mode AI Installer.exe" download="Ghost Mode AI Installer.exe">
              <Button size="lg" variant="primary" className="w-full sm:w-auto group">
                <span className="group-hover:scale-105 transition-transform duration-300">Download Now</span>
              </Button>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-4 border border-navy-700/50">
              <div className="flex items-center justify-center">
                <Lock className="w-5 h-5 text-neonBlue-400 mr-2" />
                <span className="text-gray-300">Privacy-Focused</span>
              </div>
            </div>
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-4 border border-navy-700/50">
              <div className="flex items-center justify-center">
                <Eye className="w-5 h-5 text-neonBlue-400 mr-2" />
                <span className="text-gray-300">Hide Sensitive Windows</span>
              </div>
            </div>
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-4 border border-navy-700/50">
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-neonBlue-400 mr-2" />
                <span className="text-gray-300">AI-Powered Features</span>
              </div>
            </div>
          </div>

          {/* Improved Coming Soon Panel */}
          <div className="mt-12 inline-flex items-center px-6 py-3 bg-gradient-to-r from-neonBlue-500/10 to-purple-500/10 rounded-full border border-neonBlue-500/40 backdrop-blur-sm group animate-pulse-slow">
            <div className="flex items-center space-x-3">
              <Apple className="w-5 h-5 text-neonBlue-400" />
              <Monitor className="w-5 h-5 text-neonBlue-400" />
              <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-neonBlue-400 to-purple-400">
                Coming Soon: Mac and Linux Support
              </span>
            </div>
          </div>

          {/* Improved Disclaimer Panel */}
          <div className="mt-8 p-6 bg-navy-800/60 backdrop-blur-sm rounded-xl relative">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-neonBlue-500/30 via-purple-500/30 to-neonBlue-500/30 -z-10"></div>
            
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-white text-md font-medium mb-2">Important Disclaimer</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  This tool is intended for legitimate privacy protection during meetings and presentations.
                  It should not be used for any illegal purposes or activities that violate terms of service of any platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;