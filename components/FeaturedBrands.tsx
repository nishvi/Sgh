import React from 'react';

// Fictional organic brands from Kerala for demonstration
const brands = [
  'Malabar Organics',
  'Kerala Naturals',
  'Backwater Botanicals',
  'Sahya Spice Co.',
  'Kochi Fresh Farms',
  'Wayanad Wilds',
];

const FeaturedBrands: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
           <h3 className="text-sm font-bold uppercase tracking-widest text-brand-dark/50">
            Trusted by top organic brands from Kerala
          </h3>
        </div>
        <div className="relative">
            <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-20 gap-y-10">
              {brands.map((name) => (
                <div key={name} title={name} className="text-center">
                    <p className="text-xl sm:text-2xl font-medium text-brand-dark/60 hover:text-brand-dark transition-colors duration-300 cursor-pointer">
                        {name}
                    </p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
