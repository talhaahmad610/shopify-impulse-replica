import React from 'react';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductPage from './pages/ProductPage';

function App() {
  // For demo purposes, we'll just show the HomePage by default
  // In a real Shopify theme, these routes would be handled by Shopify's Liquid templating system
  
  // Uncomment one of these to view different pages
  return (
    <HomePage />
    // <CollectionPage />
    // <ProductPage />
  );
}

export default App;