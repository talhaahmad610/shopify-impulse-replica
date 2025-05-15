import React from 'react';
import { X } from 'lucide-react';
import { NavigationItem } from '../../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigationItems }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="container-padding py-4">
        <div className="flex justify-between items-center mb-8">
          <a href="/" className="text-xl font-semibold">IMPULSE</a>
          <button 
            onClick={onClose}
            className="p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-6">
          {navigationItems.map((item) => (
            <div key={item.title} className="py-2 border-b border-gray-200">
              <a 
                href={item.url}
                className="text-lg font-medium text-primary-900 block py-2"
                onClick={onClose}
              >
                {item.title}
              </a>
              
              {item.children && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.children.map((child) => (
                    <a 
                      key={child.title}
                      href={child.url}
                      className="text-sm text-primary-700 block py-1"
                      onClick={onClose}
                    >
                      {child.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <a 
            href="/account" 
            className="block py-3 text-primary-800 font-medium"
            onClick={onClose}
          >
            Account
          </a>
          <a 
            href="/search" 
            className="block py-3 text-primary-800 font-medium"
            onClick={onClose}
          >
            Search
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;