import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import ProductGrid from '../components/home/ProductGrid';
import FeaturedCollection from '../components/home/FeaturedCollection';
import NewsletterPopup from '../components/shared/NewsletterPopup';
import { featuredProducts, collections } from '../data';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      
      <main>
        <Hero />
        
        <ProductGrid 
          title="Featured Products" 
          products={featuredProducts} 
        />
        
        <FeaturedCollection collection={collections[0]} />
        
        <div className="py-16 md:py-24 bg-gray-100">
          <div className="container-padding mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Beautifully Crafted</h2>
            <p className="text-gray-600 mb-0 text-lg">
              Our products are designed with care and made to last, 
              using sustainable materials and ethical manufacturing processes.
            </p>
          </div>
        </div>
        
        <FeaturedCollection collection={collections[1]} reversed />
      </main>
      
      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default HomePage;