import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Modern Pizza</h1>
      <nav>
        <a href="#home" className="mx-2">Home</a>
        <a href="#menu" className="mx-2">Menu</a>
        <a href="#about" className="mx-2">About</a>
        <a href="#contact" className="mx-2">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
