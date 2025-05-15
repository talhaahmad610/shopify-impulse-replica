import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { navigationItems } from '../../data';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMegaMenuToggle = (title: string) => {
    if (isMegaMenuOpen === title) {
      setIsMegaMenuOpen(null);
    } else {
      setIsMegaMenuOpen(title);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-solid' : 'header-transparent'
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-primary-800 text-white text-sm text-center py-2">
        <p>Free shipping on all orders over $50</p>
      </div>

      {/* Main Header */}
      <div className="container-padding mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={handleMobileMenuToggle}
              className="p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <a href="/" className="text-xl font-semibold">IMPULSE</a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                <button 
                  onClick={() => item.megaMenu && handleMegaMenuToggle(item.title)}
                  className="py-2 relative group"
                >
                  <span className="group-hover:text-primary-600 transition-colors duration-200">
                    {item.title}
                  </span>
                  {item.megaMenu && (
                    <span 
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${
                        isMegaMenuOpen === item.title ? 'scale-x-100' : ''
                      }`}
                    ></span>
                  )}
                </button>
                {item.megaMenu && isMegaMenuOpen === item.title && (
                  <MegaMenu item={item} onClose={() => setIsMegaMenuOpen(null)} />
                )}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="p-2" aria-label="Account">
              <User size={20} />
            </button>
            <button className="p-2 relative" aria-label="Cart">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </header>
  );
};

export default Header;