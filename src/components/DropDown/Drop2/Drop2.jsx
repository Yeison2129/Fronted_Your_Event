import React, { useState } from 'react';
import './drop.css';

export const Drop = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="dropdown">
      <button className={`dropdown-toggle ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        Dropdown
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

