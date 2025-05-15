import React, { useState } from 'react';
import { Product } from '../../types';
import { Eye, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={`/products/${product.id}`}>
        <div className="product-card-image-container">
          <img 
            src={isHovered && product.hoverImageSrc ? product.hoverImageSrc : product.imageSrc} 
            alt={product.title}
            className="product-card-image"
          />
          
          {product.badge && (
            <div className={`absolute top-0 left-0 ${
              product.badge === 'sale' 
                ? 'bg-accent-500' 
                : product.badge === 'new' 
                  ? 'bg-primary-600' 
                  : 'bg-gray-800'
            } text-white text-xs uppercase tracking-wider px-3 py-1.5`}>
              {product.badge}
            </div>
          )}
        </div>
        
        <div className="pt-4 pb-2 text-center">
          <h3 className="text-base font-medium">{product.title}</h3>
          <div className="mt-1 flex justify-center items-center gap-2">
            {product.compareAtPrice && (
              <span className="text-gray-400 line-through">${product.compareAtPrice.toFixed(2)}</span>
            )}
            <span className={product.compareAtPrice ? "text-accent-600 font-medium" : ""}>
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </a>
      
      <div className="product-quick-view">
        <div className="flex justify-between items-center">
          <button 
            className="text-sm text-primary-700 hover:text-primary-800 font-medium flex items-center gap-1"
            aria-label="Quick view"
          >
            <Eye size={16} />
            <span>Quick view</span>
          </button>
          
          <button 
            className="text-sm text-primary-700 hover:text-primary-800 font-medium flex items-center gap-1"
            aria-label="Add to cart"
            disabled={!product.available}
          >
            <ShoppingBag size={16} />
            <span>{product.available ? "Add to cart" : "Sold out"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;