import React from 'react';
import { NavigationItem } from '../../types';

interface MegaMenuProps {
  item: NavigationItem;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ item, onClose }) => {
  return (
    <div 
      className="absolute left-0 w-screen bg-white text-primary-900 shadow-lg animate-slideDown"
      onMouseLeave={onClose}
    >
      <div className="container-padding mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Categories */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {item.children?.map((child) => (
            <div key={child.title}>
              <a 
                href={child.url} 
                className="text-primary-800 font-medium hover:text-primary-600 transition-colors duration-200"
                onClick={onClose}
              >
                {child.title}
              </a>
            </div>
          ))}
        </div>

        {/* Featured */}
        {item.featured && (
          <div className="col-span-1">
            <div className="relative overflow-hidden group">
              <a href={item.featured.url} onClick={onClose}>
                <img 
                  src={item.featured.imageSrc} 
                  alt={item.featured.title}
                  className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                  <div className="p-4 w-full bg-white bg-opacity-90">
                    <h3 className="text-lg font-medium text-primary-900">{item.featured.title}</h3>
                    <p className="text-sm text-primary-600 mt-1">Shop Now</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;