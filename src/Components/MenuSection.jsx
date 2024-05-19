import React from 'react';
import pizza1 from '../assets/images/pizza-1.jpg';
import pizza2 from '../assets/images/pizza-2.jpg';

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded shadow-lg p-4">
            <img src={pizza1} alt="Pizza 1" className="w-full h-64 object-cover rounded-t"/>
            <h3 className="text-2xl font-bold mt-4">Classic Margherita</h3>
            <p className="mt-2">A delicious classic with fresh tomatoes, mozzarella, and basil.</p>
          </div>
          <div className="bg-white rounded shadow-lg p-4">
            <img src={pizza2} alt="Pizza 2" className="w-full h-64 object-cover rounded-t"/>
            <h3 className="text-2xl font-bold mt-4">Pepperoni Feast</h3>
            <p className="mt-2">Loaded with pepperoni slices and a mix of mozzarella and cheddar cheese.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
