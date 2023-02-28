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
      imageUrl: 'https://www.stockvault.net/data/2010/10/16/115363/preview16.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://www.stockvault.net/data/2011/02/23/118132/thumb16.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageUrl: 'https://www.shutterstock.com/image-photo/light-blue-flower-on-white-600w-526400839.jpg',
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
