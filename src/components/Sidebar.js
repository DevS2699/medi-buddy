import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  useEffect(() => {
    // Initialize Bootstrap's collapse components
    const collapseElements = document.querySelectorAll('.collapse');
    collapseElements.forEach((collapseEl) => {
      new window.bootstrap.Collapse(collapseEl, {
        toggle: false // Ensure only one item can be open at a time
      });
    });
  }, []);

  return (
    <div className="flex-shrink-0 col-2 bg-dark" style={{ height: "90vh" }}>
      <ul className="list-unstyled d-flex flex-column">
        <li className='border-bottom'>
          <Link to="/" className="nav-link link-body-emphasis">
            Notifications
          </Link>
        </li>
        <li className="border-bottom">
          <button className="btn btn-link nav-link link-body-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#dropdownMenu" aria-expanded="false" aria-controls="dropdownMenu">
            Dropdown
          </button>
          <div className="collapse" id="dropdownMenu">
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="dropdown-item">
                  Action
                </Link>
              </li>
              <li>
                <Link to="/" className="dropdown-item">
                  Another action
                </Link>
              </li>
              <li>
                <Link to="/" className="dropdown-item">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="border-bottom">
          <button className="btn btn-link nav-link link-body-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdmission" aria-expanded="false" aria-controls="collapseAdmission">
            Admission
          </button>
          <div className="collapse" id="collapseAdmission">
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="dropdown-item">
                  Admission Action 1
                </Link>
              </li>
              <li>
                <Link to="/" className="dropdown-item">
                  Admission Action 2
                </Link>
              </li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </li>
        <li className="border-bottom">
          <Link to="/" className="nav-link link-body-emphasis">
            Claims
          </Link>
        </li>
        <li className="border-bottom">
          <Link to="/" className="nav-link link-body-emphasis">
            Dashboard
          </Link>
        </li>
        <li className="border-bottom">
          <Link to="/" className="nav-link link-body-emphasis">
            Hospital Profile
          </Link>
        </li>
        <li className="border-bottom">
          <Link to="/" className="nav-link link-body-emphasis">
            User Management
          </Link>
        </li>
        <li className="border-bottom">
          <Link to="/" className="nav-link link-body-emphasis">
            Guidelines
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link link-body-emphasis">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
