import React from 'react';
import { Collection } from '../../types';

interface FeaturedCollectionProps {
  collection: Collection;
  reversed?: boolean;
}

const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ 
  collection, 
  reversed = false 
}) => {
  return (
    <div className="py-16 md:py-24">
      <div className="container-padding mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
          reversed ? 'md:flex-row-reverse' : ''
        }`}>
          <div className={`${reversed ? 'md:order-2' : ''}`}>
            <div className="relative overflow-hidden group">
              <img 
                src={collection.imageSrc} 
                alt={collection.title}
                className="w-full h-[500px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
          
          <div className={`${reversed ? 'md:order-1' : ''} max-w-lg`}>
            <h2 className="text-3xl md:text-4xl font-light mb-6">{collection.title}</h2>
            {collection.description && (
              <p className="text-gray-600 mb-8 text-lg">{collection.description}</p>
            )}
            <a 
              href={`/collections/${collection.id}`} 
              className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center border-b border-primary-700 pb-1 transition-colors duration-200"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;