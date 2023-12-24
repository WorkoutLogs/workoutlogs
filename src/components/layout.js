import React from 'react';

// import { Container } from './styles';

function Layout({ children }) {
  return <div className='h-screen' style={{backgroundColor: "#df2a27"}}>
    {children}
  </div>;
}

export default Layout;