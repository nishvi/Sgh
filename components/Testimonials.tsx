
import React from 'react';

const TestimonialCard: React.FC<{ quote: string, name: string, role: string, imageUrl: string }> = ({ quote, name, role, imageUrl }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
    <img src={imageUrl} alt={name} className="w-20 h-20 rounded-full mb-4 object-cover ring-4 ring-brand-light-green/50" />
    <p className="text-brand-dark/80 italic mb-6">"{quote}"</p>
    <div className="mt-auto">
      <p className="font-bold text-brand-green">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green">From Our Community</h2>
          <p className="text-lg text-brand-dark mt-4 max-w-2xl mx-auto">
            Hear what sellers and buyers are saying about SattvaGreenhub.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
          <TestimonialCard 
            quote="SattvaGreenhub's AI tools gave my small farm the market insights of a large corporation. My sales have tripled!"
            name="Aarav Sharma"
            role="Organic Farmer"
            imageUrl="https://picsum.photos/200/200?image=823"
          />
          <TestimonialCard 
            quote="Finally, a place where I can trust the source of my food. The transparency in their supply chain is revolutionary."
            name="Priya Patel"
            role="Health-Conscious Buyer"
            imageUrl="https://picsum.photos/200/200?image=646"
          />
          <TestimonialCard 
            quote="Setting up my brand's landing page was a breeze. I love having my own corner of the internet on a platform that shares my values."
            name="Rohan Das"
            role="Artisanal Brand Owner"
            imageUrl="https://picsum.photos/200/200?image=1027"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
