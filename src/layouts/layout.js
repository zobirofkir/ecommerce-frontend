import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

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