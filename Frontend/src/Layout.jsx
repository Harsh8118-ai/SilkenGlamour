import React, { useEffect } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <><div>

    <Header/>
    <Outlet />
    <Footer />
    
    {children}
    </div>
    </>
  )
}

export default Layout