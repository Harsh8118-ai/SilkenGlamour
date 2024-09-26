import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import LeftCard from './LeftCard';
import RightCard from './RightCard';


function ServiceLayout({ children }) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <> <div>
    <Outlet />
    {children}
    </div>
    </>
  )
}

export default ServiceLayout