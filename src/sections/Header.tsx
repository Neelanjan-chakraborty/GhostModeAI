import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from '../components/NavLink';
import Button from '../components/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy-900/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/ghost-logo.png" alt="GhostMode AI" className="w-8 h-8 mr-2" />
            <span className="text-white text-xl font-bold">GhostMode<span className="bg-clip-text text-transparent bg-gradient-to-r from-neonBlue-400 to-neonBlue-600">AI</span></span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#download">Download</NavLink>
            <NavLink href="#support">Support</NavLink>
          </nav>
          
          <div className="hidden md:block">
            <a href="/Ghost Mode AI Installer.exe" download="Ghost Mode AI Installer.exe">
              <Button variant="primary" size="sm">
                Download Now
              </Button>
            </a>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-navy-800/95 backdrop-blur-sm mt-4 py-4 px-4 rounded-lg shadow-lg border border-navy-700">
            <nav className="flex flex-col space-y-4">
              <NavLink href="#features" className="py-2">Features</NavLink>
              <NavLink href="#pricing" className="py-2">Pricing</NavLink>
              <NavLink href="#download" className="py-2">Download</NavLink>
              <NavLink href="#support" className="py-2">Support</NavLink>
              <a href="/Ghost Mode AI Installer.exe" download="Ghost Mode AI Installer.exe">
                <Button variant="primary" className="mt-2 w-full">
                  Download Now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;