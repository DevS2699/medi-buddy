import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div>
      {window.location.href.indexOf("sign") > -1 ? <></> : <Navbar/>}
      <div className="container-fluid ">
        <div className="row d-flex">
          {window.location.href.indexOf("sign") > -1  ? <></> : <Sidebar/>}
          <main className='flex-grow-1 mt-2 mx-2'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
