import React from 'react';
import { Mail, MessageCircle, Github } from 'lucide-react';
import NavLink from '../components/NavLink';

const Footer = () => {
  return (
    <footer id="support" className="bg-navy-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img src="/ghost-logo.png" alt="GhostMode AI" className="w-6 h-6 mr-2" />
              <span className="text-white text-lg font-bold">GhostMode<span className="bg-clip-text text-transparent bg-gradient-to-r from-neonBlue-400 to-neonBlue-600">AI</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Privacy-focused productivity tool that helps you maintain confidentiality during video calls and screen sharing.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:support@azurerift.in" className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-navy-700 hover:text-neonBlue-400 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://azurerift.in" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-navy-700 hover:text-neonBlue-400 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://github.com/azurerift" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-navy-700 hover:text-neonBlue-400 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><NavLink href="#features">Features</NavLink></li>
              <li><NavLink href="#pricing">Pricing</NavLink></li>
              <li><NavLink href="#download">Download</NavLink></li>
              <li><a href="#" className="text-gray-400 hover:text-neonBlue-400 transition-colors">Release Notes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neonBlue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neonBlue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neonBlue-400 transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neonBlue-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="https://azurerift.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neonBlue-400 transition-colors">AzureRift</a></li>
              <li><a href="https://neelanjanchakraborty.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neonBlue-400 transition-colors">Developer</a></li>
              <li><a href="/legal" className="text-gray-400 hover:text-neonBlue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/legal" className="text-gray-400 hover:text-neonBlue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 GhostMode AI by <a href="https://azurerift.in" target="_blank" rel="noopener noreferrer" className="text-neonBlue-400 hover:underline">AzureRift</a>. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/legal" className="text-gray-500 text-sm hover:text-neonBlue-400 transition-colors">Privacy Policy</a>
              <a href="/legal" className="text-gray-500 text-sm hover:text-neonBlue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 text-sm hover:text-neonBlue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;