// src/components/CardContainer.js
import React from 'react';
import Cards from './Cards';
import './CardContainer.css'; // import the CSS file

const CardContainer = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardContainer;
