import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full p-8 relative animate-fadeIn">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-2xl font-medium mb-4 text-center">Join our community</h3>
        <p className="text-gray-600 mb-6 text-center">
          Subscribe to our newsletter and get 10% off your first purchase.
        </p>
        
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="btn-primary w-full"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
        </p>
      </div>
    </div>
  );
};

export default NewsletterPopup;