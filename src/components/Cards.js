// src/components/Cards.js
import React from 'react';


const Cards = ({ item }) => {
  return (
    <div className="card">
      <img src={item.imageUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button>Buy now</button>
    </div>
  );
};

export default Cards;
