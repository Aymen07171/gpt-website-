import React from 'react';
import pizza from '../assets/images/pizza-3.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <p className="text-lg">At Modern Pizza, we believe in quality ingredients and traditional methods. Our pizzas are crafted with love and baked to perfection.</p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src={pizza} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
