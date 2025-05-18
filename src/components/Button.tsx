import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick 
}: ButtonProps) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-neonBlue-500 to-neonBlue-600 text-white shadow-lg shadow-neonBlue-500/30 hover:shadow-neonBlue-500/50 hover:from-neonBlue-400 hover:to-neonBlue-500',
    secondary: 'bg-navy-700 hover:bg-navy-600 text-neonBlue-400 border border-neonBlue-500/30',
    outline: 'bg-transparent border border-neonBlue-500/50 text-neonBlue-400 hover:bg-navy-700'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;