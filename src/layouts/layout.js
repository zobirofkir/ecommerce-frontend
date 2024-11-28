import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/header/HeaderComponent';
import FooterComponent from '../components/footer/FooterComponent';

const layout = () => {
  return (
    <min>
      <header>
        <HeaderComponent/>
      </header>
      
        <Outlet/>

      <footer>
        <FooterComponent/>
      </footer>
    </min>
  )
}

export default layout