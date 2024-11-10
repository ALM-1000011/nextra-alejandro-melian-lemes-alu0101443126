// components/Cards.jsx
import React from 'react';
import styles from './Card.module.css'; 

export default function Cards({ children }) {
  return (
    <div className="cards-container">
      {children}
    </div>
  );
}
