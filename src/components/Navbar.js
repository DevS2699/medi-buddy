import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <header className="p-3 bg-dark">
      <div>
        <div className="d-flex align-items-center justify-content-between mx-4">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <img className="bi me-2" width="100" height="32" src="https://www.gartner.com/pi/vendorimages/exl_business-analytics-services-worldwide_1631909869450.png" alt="Logo" />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 link-secondary">Overview</Link></li>
            <li><Link to="/" className="nav-link px-2 link-body-emphasis">Inventory</Link></li>
            <li><Link to="/" className="nav-link px-2 link-body-emphasis">Customers</Link></li>
            <li><Link to="/" className="nav-link px-2 link-body-emphasis">Products</Link></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="dropdown text-end">
            <a href="/" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="/">New project...</a></li>
              <li><a className="dropdown-item" href="/">Settings</a></li>
              <li><a className="dropdown-item" href="/">Profile</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
