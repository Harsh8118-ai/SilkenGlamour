import React, { useEffect } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { CartProvider } from './components/Service/Service Nav/CartContext';


function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <><div>
<CartProvider>
    <Header/>
    <Outlet />
    <Footer /></CartProvider>
    
    {children}
    </div>
    </>
  )
}

export default Layout