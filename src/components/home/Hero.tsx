import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="container-padding mx-auto relative z-10 text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
          Modern essentials for everyday living
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-lg">
          Thoughtfully designed home goods that bring beauty and functionality to your space.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/collections/all" className="btn-primary">
            Shop Now
          </a>
          <a href="/pages/about" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:bg-opacity-10">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;