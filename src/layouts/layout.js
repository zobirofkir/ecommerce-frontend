import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/header/HeaderComponent';
import FooterComponent from '../components/footer/FooterComponent';
import NewsLetterComponent from '../components/newsletter/NewsLetterComponent';

const layout = () => {

   const token = localStorage.getItem('accessToken');

  return (
    <min>
      <header>
        <HeaderComponent/>
      </header>
      
        <Outlet/>

      {!token && <NewsLetterComponent/>}

      <footer>
        <FooterComponent/>
      </footer>
    </min>
  )
}

export default layout