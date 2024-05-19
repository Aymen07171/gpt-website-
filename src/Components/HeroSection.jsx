import React from 'react';
import restaurantImage from '../assets/images/restaurant.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${restaurantImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate-bounce">Welcome to Modern Pizza</h1>
          <p className="text-xl mb-6">Experience the best pizza in town</p>
          <a href="#menu" className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 transition">Explore Our Menu</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
