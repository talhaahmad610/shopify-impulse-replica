import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import { collections } from '../data';
import { Filter, ChevronDown } from 'lucide-react';

const CollectionPage: React.FC = () => {
  // Use the first collection as an example
  const collection = collections[0];
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  return (
    <div>
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Collection Header */}
        <div 
          className="relative bg-cover bg-center h-56 md:h-80 flex items-center justify-center"
          style={{ backgroundImage: `url(${collection.imageSrc})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="text-center relative z-10 text-white px-4">
            <h1 className="text-3xl md:text-5xl font-light mb-4">{collection.title}</h1>
            {collection.description && (
              <p className="max-w-2xl mx-auto text-lg">{collection.description}</p>
            )}
          </div>
        </div>
        
        {/* Collection Content */}
        <div className="container-padding mx-auto py-12">
          {/* Collection Filters */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <button 
              className="flex items-center text-primary-800 font-medium mb-4 md:mb-0"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <Filter size={18} className="mr-2" />
              Filter
              <ChevronDown size={16} className={`ml-2 transition-transform duration-200 ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-3">Sort by</span>
              <select className="py-2 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A-Z</option>
                <option>Name: Z-A</option>
              </select>
            </div>
          </div>
          
          {/* Mobile filters - collapsed by default */}
          <div className={`mb-8 border-t border-b border-gray-200 py-6 ${isMobileFilterOpen ? 'block' : 'hidden'} md:block md:border-0 md:py-0`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Furniture</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Lighting</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Decor</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Kitchen</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-4">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>$0 - $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>$50 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>$100 - $200</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>$200+</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-4">Color</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="w-6 h-6 rounded-full bg-black border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-white border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-gray-500 border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-green-500 border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 border border-gray-300"></button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-4">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>In stock</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Out of stock</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {collection.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {/* Duplicate products to fill the grid */}
            {collection.products.map((product) => (
              <ProductCard key={`${product.id}-dup`} product={{...product, id: `${product.id}-dup`}} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex border border-gray-300">
              <button className="px-4 py-2 border-r border-gray-300 text-gray-500 hover:bg-gray-50">
                &laquo;
              </button>
              <button className="px-4 py-2 border-r border-gray-300 text-white bg-primary-700">
                1
              </button>
              <button className="px-4 py-2 border-r border-gray-300 text-gray-500 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border-r border-gray-300 text-gray-500 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 text-gray-500 hover:bg-gray-50">
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollectionPage;