// src/App.js
import React from 'react';
import CardContainer from './components/CardContainer';
import './index.css'; // import the CSS file

const App = () => {
  const data = [
    {
      id: 1,
      title: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://via.placeholder.com/200x200',
    },
    {
      id: 2,
      title: 'Product 2',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/200x200',
    },
    {
      id: 3,
      title: 'Product 3',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageUrl: 'https://via.placeholder.com/200x200',
    },
  ];

  return (
    <>
      <header>
        <h1>My Online Store</h1>
      </header>
      <main>
        <CardContainer data={data} />
      </main>
    </>
  );
};

export default App;
