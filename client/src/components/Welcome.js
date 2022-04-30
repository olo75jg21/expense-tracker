import React from 'react';
import { useSelector } from 'react-redux';

import {
  Button
} from 'react-bootstrap';

const Welcome = () => {
  const auth = useSelector(state => state.auth);

  if (!auth) {
    return (
      <div className='text-center mt-5'>
        <h1>Track your finances with ease</h1>
        <h2 className='text-secondary'>To start with please log in</h2>
        <Button variant="secondary" href="/auth/google">Login With Google</Button>
      </div>
    );
  }

  return (
    <div className='text-center mt-5'>
      <h1>Welcome</h1>
      <h2 className='text-secondary'>To start with please go to dashboard</h2>
    </div>
  );
};

export default Welcome;