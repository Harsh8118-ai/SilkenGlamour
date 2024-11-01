import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import SocialMediaLinks from '../../Home/SocialMediaLinks';



function ServiceLayout({ children }) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <> <div>
    <Outlet />
    <SocialMediaLinks />  
    {children}
    </div>
    </>
  )
}

export default ServiceLayout