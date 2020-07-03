import React from 'react';
import './../index.css';
import Header from './Header';
import IceCreamControl from './IceCreamControl';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='header'>
          <Header />
        </div>
        <div className='control'>
          <IceCreamControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
