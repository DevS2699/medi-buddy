import React from "react";

const Landing = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Active Claims
          </a>
        </li>
      </ul>
      <div className="mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Patient Name</th>
              <th scope="col">Claim Id</th>
              <th scope="col">Claimed Amount</th>
              <th scope="col">Approved Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Admission Date</th>
              <th scope="col">Discharge Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arun Jannu</td>
              <td>92424071</td>
              <td>1,60,000</td>
              <td>1,00,000</td>
              <td><span className="badge bg-primary">Pre-Auth Approved</span></td>
              <td>12 Jun</td>
              <td>14 Jun</td>
            </tr>
            <tr>
              <td>Mankali Hegde</td>
              <td>12788510</td>
              <td>4,25,000</td>
              <td>3,00,000</td>
              <td><span className="badge bg-primary">Pre-Auth Approved</span></td>
              <td>8 Jun</td>
              <td>15 Jun</td>
            </tr>
            <tr>
              <td>Shilpa Singh</td>
              <td>92428179</td>
              <td>1,20,000</td>
              <td>1,00,000</td>
              <td><span className="badge bg-primary">Pre-Auth Approved</span></td>
              <td>02 Jun</td>
              <td>14 Jun</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Landing;
