import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Dashboard.css'; // Import custom CSS

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-start">
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card text-white bg-primary">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                  <rect x="2" y="2" width="20" height="6" />
                  <rect x="2" y="10" width="20" height="6" />
                  <rect x="2" y="18" width="20" height="6" />
                </svg>
              </div>
              <div className="text-right">
                <div className="value display-4">172</div>
                <div className="label">Preauthorized Raised</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card text-white bg-success">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 19L2 12l1.41-1.41L9 16.17l12-12L22.41 6 9 19z" />
                </svg>
              </div>
              <div className="text-right">
                <div className="value display-4">1542</div>
                <div className="label">Preauthorized Approved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
