import React from 'react';
import { Product } from '../../types';
import ProductCard from '../product/ProductCard';

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products }) => {
  return (
    <div className="py-16">
      <div className="container-padding mx-auto">
        <h2 className="text-3xl font-light text-center mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/collections/all" className="btn-primary">
            View All Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;