import React from 'react';

// import { Container } from './styles';

function Header({ backgroundColor }) {
  return <header style={{backgroundColor}} className='text-white p-2 px-12'>
    <a href='#' className='text-2xl'>WorkoutLogs</a>
  </header>;
}

export default Header;