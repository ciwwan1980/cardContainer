//// src/components/CardContainer.js
//import React from 'react';
//import Cards from './Cards';
//import './CardContainer.css'; // import the CSS file

//const CardContainer = ({ data }) => {
//  return (
//    <div className="card-container">
//      {data.map((item) => (
//        <Cards key={item.id} item={item} />
//      ))}
//    </div>
//  );
//};

//export default CardContainer;


// src/components/CardContainer.js
import React from 'react';
import Cards from './Cards';
import './CardContainer.css';

const CardContainer = ({ data }) => {
  const handleBuy = (item) => {
    // Navigate to the details page for the selected item
    console.log(`Buy ${item.title}`);
  };

  return (
    <div className="card-container">
      {data.map((item) => (
        <Cards key={item.id} item={item} onBuy={handleBuy} />
      ))}
    </div>
  );
};

export default CardContainer;
