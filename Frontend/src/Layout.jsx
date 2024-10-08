import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CartProvider } from '../src/components/Cart/CartContext'; // CartProvider wraps everything

function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* CartProvider wraps everything to share cart context across the app */}
      <CartProvider>
        <div>
          <Header /> {/* Contains MobileCart */}
          <Outlet /> {/* Render child components based on route */}
          <Footer />
        </div>
        {children}
      </CartProvider>
    </>
  );
}

export default Layout;
