
import React from 'react';
import { MarketplaceIcon, EBusinessIcon, SourcingIcon } from '../constants';

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-light-green text-white mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-brand-dark mb-4">{title}</h3>
    <p className="text-brand-dark/80 leading-relaxed">{children}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green">An All-in-One Organic Platform</h2>
          <p className="text-lg text-brand-dark mt-4 max-w-2xl mx-auto">
            We provide a complete ecosystem for the organic community, from discovery to delivery.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard icon={<MarketplaceIcon className="w-8 h-8" />} title="Curated Marketplace">
            Our AI-driven marketplace connects you with organic products tailored to your taste, while offering sellers beautiful, customizable storefronts.
          </FeatureCard>
          <FeatureCard icon={<EBusinessIcon className="w-8 h-8" />} title="AI-Powered Growth">
            We empower brands with market analysis, product development tools, and expert mentorship to thrive in the competitive organic space.
          </FeatureCard>
          <FeatureCard icon={<SourcingIcon className="w-8 h-8" />} title="Transparent Sourcing">
            Build trust with AI-verified sourcing, quality control, and a fully transparent supply chain from farm to your doorstep.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
