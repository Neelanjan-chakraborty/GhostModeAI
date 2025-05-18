import React from 'react';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const NavLink = ({ children, href, className = '' }: NavLinkProps) => {
  const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={href} 
      onClick={scrollToElement} 
      className={`text-gray-300 hover:text-neonBlue-400 font-medium transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;