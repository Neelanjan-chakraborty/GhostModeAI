import React from 'react';
import { Download as DownloadIcon, Check, Monitor, Database, Cpu } from 'lucide-react';
import Button from '../components/Button';

const systemRequirements = [
  { icon: Monitor, text: "Windows 10 or later" },
  { icon: Database, text: ".NET Framework 4.7.2 or higher" },
  { icon: Monitor, text: "Microsoft Edge WebView2 Runtime" },
  { icon: Cpu, text: "4GB RAM minimum (8GB recommended)" },
  { icon: Database, text: "200MB free disk space" },
  { icon: Cpu, text: "Internet connection for AI features" }
];

const Download = () => {
  return (
    <section id="download" className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-neonBlue-500/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-800 rounded-2xl overflow-hidden shadow-xl border border-navy-700 relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neonBlue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            <div className="p-8 md:p-12 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Download GhostMode<span className="bg-clip-text text-transparent bg-gradient-to-r from-neonBlue-400 to-neonBlue-600">AI</span> Today
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Experience privacy-focused productivity with our powerful window hiding, 
                    audio transcription, and AI assistant features.
                  </p>
                  
                  <a 
                    href="/Ghost Mode AI Installer.exe" 
                    download="Ghost Mode AI Installer.exe"
                    className="relative group block w-full sm:w-auto"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-neonBlue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                    <Button 
                      variant="primary"
                      size="lg"
                      className="mb-6 w-full sm:w-auto relative group"
                    >
                      <DownloadIcon className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Download for Windows
                    </Button>
                  </a>
                  
                  <p className="text-sm text-gray-500">
                    Version 1.2.0 | Released: June 15, 2025 | 85MB
                  </p>
                </div>
                
                <div className="md:w-1/3 bg-navy-700 rounded-xl p-6 border border-navy-600">
                  <h3 className="text-lg font-medium text-white mb-4">System Requirements</h3>
                  <ul className="space-y-3">
                    {systemRequirements.map((req, index) => (
                      <li key={index} className="flex items-center">
                        <req.icon className="w-4 h-4 text-neonBlue-400 mr-3" />
                        <span className="text-gray-300 text-sm">{req.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-900 px-8 py-6 border-t border-navy-700">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-neonBlue-400 mr-3" />
                <p className="text-gray-400 text-sm">
                  By downloading, you agree to our <a href="/legal" className="text-neonBlue-400 hover:underline">Terms of Service</a> and <a href="/legal" className="text-neonBlue-400 hover:underline">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-white mb-6">Getting Started is Easy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center mx-auto mb-4 border border-navy-700">
                  <span className="text-neonBlue-400 font-bold">1</span>
                </div>
                <h4 className="text-white font-medium mb-2">Download & Install</h4>
                <p className="text-gray-400 text-sm">Download the installer and follow the on-screen instructions</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center mx-auto mb-4 border border-navy-700">
                  <span className="text-neonBlue-400 font-bold">2</span>
                </div>
                <h4 className="text-white font-medium mb-2">First-Time Setup</h4>
                <p className="text-gray-400 text-sm">Enter your API keys in Settings for AI features</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center mx-auto mb-4 border border-navy-700">
                  <span className="text-neonBlue-400 font-bold">3</span>
                </div>
                <h4 className="text-white font-medium mb-2">Start Using</h4>
                <p className="text-gray-400 text-sm">Select windows to hide and enjoy enhanced privacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;