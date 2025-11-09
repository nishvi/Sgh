
import React from 'react';   

const Header: React.FC = () => {
  return (
    <header className="bg-brand-cream/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-green tracking-wider">
          SattvaGreenhub
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-brand-dark hover:text-brand-accent transition-colors">Marketplace</a>
          <a href="#" className="text-brand-dark hover:text-brand-accent transition-colors">For Sellers</a>
          <a href="#" className="text-brand-dark hover:text-brand-accent transition-colors">About</a>
          <a href="#" className="bg-brand-accent text-white px-4 py-2 rounded-full hover:bg-brand-green transition-colors font-medium">
            Join Now
          </a>
        </nav>
        <button className="md:hidden text-brand-dark">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
