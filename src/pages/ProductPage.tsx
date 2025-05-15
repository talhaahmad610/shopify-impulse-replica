import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { featuredProducts } from '../data';
import { ShoppingBag, Heart, Share2, Minus, Plus } from 'lucide-react';
import ProductGrid from '../components/home/ProductGrid';

const ProductPage: React.FC = () => {
  // Use the first product as an example
  const product = featuredProducts[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Mock images array for the gallery
  const productImages = [
    product.imageSrc,
    product.hoverImageSrc || 'https://images.pexels.com/photos/172147/pexels-photo-172147.jpeg',
    'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  return (
    <div>
      <Header />
      
      <main className="pt-20 md:pt-24">
        <div className="container-padding mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img 
                  src={productImages[currentImageIndex]} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                
                {product.badge && (
                  <div className={`absolute top-4 left-4 ${
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
              
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button 
                    key={index}
                    className={`aspect-[3/4] ${currentImageIndex === index ? 'border-2 border-primary-700' : 'border border-gray-200'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-light mb-2">{product.title}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  {/* Star Rating */}
                  <div className="flex text-accent-500">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">4.5 (24 reviews)</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  {product.compareAtPrice && (
                    <span className="text-gray-400 line-through text-lg mr-3">${product.compareAtPrice.toFixed(2)}</span>
                  )}
                  <span className={`text-2xl ${product.compareAtPrice ? "text-accent-600 font-medium" : ""}`}>
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                
                {product.compareAtPrice && (
                  <div className="mt-1 text-sm text-accent-600">
                    Save ${(product.compareAtPrice - product.price).toFixed(2)} ({Math.round((1 - product.price / product.compareAtPrice) * 100)}%)
                  </div>
                )}
              </div>
              
              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Color</h3>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-black border-2 border-primary-700"></button>
                    <button className="w-10 h-10 rounded-full bg-gray-500 border border-gray-300"></button>
                    <button className="w-10 h-10 rounded-full bg-blue-500 border border-gray-300"></button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Size</h3>
                  <div className="flex gap-2">
                    <button className="min-w-[48px] h-12 border border-gray-300 hover:border-primary-700 flex items-center justify-center">S</button>
                    <button className="min-w-[48px] h-12 border-2 border-primary-700 flex items-center justify-center">M</button>
                    <button className="min-w-[48px] h-12 border border-gray-300 hover:border-primary-700 flex items-center justify-center">L</button>
                    <button className="min-w-[48px] h-12 border border-gray-300 hover:border-primary-700 flex items-center justify-center">XL</button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Quantity</h3>
                  <div className="flex">
                    <button 
                      className="w-10 h-10 flex items-center justify-center border border-gray-300"
                      onClick={() => handleQuantityChange(-1)}
                    >
                      <Minus size={16} />
                    </button>
                    <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300">
                      {quantity}
                    </div>
                    <button 
                      className="w-10 h-10 flex items-center justify-center border border-gray-300"
                      onClick={() => handleQuantityChange(1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mb-8">
                <button className="btn-primary w-full flex-1 py-4">
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className="btn-secondary w-12 h-12 p-0">
                  <Heart size={18} />
                </button>
                <button className="btn-secondary w-12 h-12 p-0">
                  <Share2 size={18} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Description</h3>
                  <p className="text-gray-600">
                    This modern {product.title.toLowerCase()} features sleek lines and premium materials, 
                    designed to complement any space. Its minimalist design and functional features make 
                    it a versatile addition to your home.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Details</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Made from sustainable materials</li>
                    <li>Dimensions: 30cm x 20cm x 15cm</li>
                    <li>Weight: 2.5kg</li>
                    <li>Available in multiple colors</li>
                    <li>1-year warranty</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Shipping</h3>
                  <p className="text-gray-600">
                    Free shipping on orders over $50. Estimated delivery: 3-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Reviews */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-light mb-8">Customer Reviews</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="flex items-center mb-6">
                  <div className="flex text-accent-500 text-2xl mr-2">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xl">4.5/5</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="mr-2 w-8">5★</span>
                    <div className="flex-1 h-3 bg-gray-200">
                      <div className="h-3 bg-accent-500 w-3/4"></div>
                    </div>
                    <span className="ml-2 w-8 text-sm text-gray-500">75%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 w-8">4★</span>
                    <div className="flex-1 h-3 bg-gray-200">
                      <div className="h-3 bg-accent-500 w-1/5"></div>
                    </div>
                    <span className="ml-2 w-8 text-sm text-gray-500">20%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 w-8">3★</span>
                    <div className="flex-1 h-3 bg-gray-200">
                      <div className="h-3 bg-accent-500 w-[5%]"></div>
                    </div>
                    <span className="ml-2 w-8 text-sm text-gray-500">5%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 w-8">2★</span>
                    <div className="flex-1 h-3 bg-gray-200">
                      <div className="h-3 bg-accent-500 w-0"></div>
                    </div>
                    <span className="ml-2 w-8 text-sm text-gray-500">0%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 w-8">1★</span>
                    <div className="flex-1 h-3 bg-gray-200">
                      <div className="h-3 bg-accent-500 w-0"></div>
                    </div>
                    <span className="ml-2 w-8 text-sm text-gray-500">0%</span>
                  </div>
                </div>
                
                <button className="btn-primary w-full mt-8">Write a Review</button>
              </div>
              
              <div className="md:col-span-2 space-y-8">
                <div className="border-b border-gray-200 pb-8">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Excellent product!</h3>
                    <div className="flex text-accent-500">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Sarah T. - April 15, 2025</p>
                  <p className="text-gray-600">
                    This lamp is exactly what I was looking for! The design is sleek and modern, 
                    and the quality is excellent. It gives off the perfect amount of light for my office space.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-8">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Great addition to my space</h3>
                    <div className="flex text-accent-500">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Michael K. - March 28, 2025</p>
                  <p className="text-gray-600">
                    The lamp arrived quickly and was easy to set up. It's sturdy and well-made. 
                    The only reason for 4 stars instead of 5 is that the color is slightly different than pictured.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <ProductGrid 
              title="You May Also Like" 
              products={featuredProducts} 
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;