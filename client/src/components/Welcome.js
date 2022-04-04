import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    // change content depend on that is there any expenses/incomes sources
    <div>
      <h1>Welcome</h1> 
      <h5>First things first you need to configure your wallet</h5>
      
      {/* Popup window with basic wallet setup (first income, expense)  */}
      <Link to='/settings'>Go</Link>
    </div>
  );
};

export default Welcome;