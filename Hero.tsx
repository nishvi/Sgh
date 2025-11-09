import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-light-green text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')` }}
      ></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-shadow">
          Your Ecosystem for Organic Living & Growth
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-shadow-sm">
          Discover curated organic products, empower your brand with AI-driven tools, and join a community committed to a sustainable future.
        </p>
        <a 
          href="#" 
          className="bg-white text-brand-green px-8 py-3 rounded-full font-bold text-lg hover:bg-brand-cream transition-transform transform hover:scale-105 shadow-lg"
        >
          Explore the Marketplace
        </a>
      </div>
    </section>
  );
};

export default Hero;