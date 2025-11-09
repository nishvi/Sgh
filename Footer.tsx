
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">SattvaGreenhub</h3>
            <p className="text-brand-cream/70">Your ecosystem for organic living and growth.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-brand-cream/70 hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-brand-cream/70 hover:text-white transition-colors">For Sellers</a></li>
              <li><a href="#" className="text-brand-cream/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-brand-cream/70 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-brand-cream/70 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-brand-cream/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-brand-cream/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-brand-cream/70 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            {/* Social media icons would go here */}
          </div>
        </div>
        <div className="border-t border-brand-cream/20 mt-10 pt-6 text-center text-brand-cream/50 text-sm">
          <p>&copy; {new Date().getFullYear()} SattvaGreenhub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
