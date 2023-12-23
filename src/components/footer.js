import React from 'react';

// import { Container } from './styles';

function Footer({backgroundColor}) {
  return <footer className='h-16 px-4 flex items-center text-white' style={{backgroundColor}}>
    <a href='https://workoutlogs.github.io/privacy-policy'>Privacy Policy</a>
  </footer>;
}

export default Footer;