import React from 'react';

// import { Container } from './styles';

function Header({ backgroundColor }) {
  return <header style={{backgroundColor}} className='text-white h-16 p-2 flex items-center md:px-12 md:block justify-center'>
    <a href='#' className='text-2xl border-b-2 border-b-transparent hover:border-b-white'>WorkoutLogs</a>
  </header>;
}

export default Header;