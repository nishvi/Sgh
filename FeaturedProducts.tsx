import React from 'react';

interface Product {
  name: string;
  category: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    name: 'Cold-Pressed Olive Oil',
    category: 'Pantry Staples',
    imageUrl: 'https://images.unsplash.com/photo-1600271886705-06c48375f4d0?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Wildflower Honey',
    category: 'Sweeteners',
    imageUrl: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Heirloom Tomato Sauce',
    category: 'Sauces & Condiments',
    imageUrl: 'https://images.unsplash.com/photo-1598912440915-0f55e7182259?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Artisanal Herbal Tea',
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1599557428812-a1936b899472?q=80&w=800&auto=format&fit=crop'
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
    <img src={product.imageUrl} alt={product.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-light-green">{product.category}</p>
      <h3 className="text-2xl font-bold mt-1">{product.name}</h3>
    </div>
  </div>
);

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green">Discover Our Organics</h2>
          <p className="text-lg text-brand-dark mt-4 max-w-2xl mx-auto">
            A curated selection of high-quality products from our trusted sellers.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;