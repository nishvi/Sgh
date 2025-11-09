import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MarketAnalysis from './components/MarketAnalysis';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SellerShowcase from './components/SellerShowcase';
import FeaturedProducts from './components/FeaturedProducts';
import FeaturedBrands from './components/FeaturedBrands';

const App: React.FC = () => {
  return (
    <div className="bg-brand-cream min-h-screen font-sans text-brand-dark">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturedProducts />
        <FeaturedBrands />
        <SellerShowcase />
        <MarketAnalysis />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;