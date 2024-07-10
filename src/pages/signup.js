import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import SignUpForm from "./signupform";
import SignInForm from "./signinform";

import "../App.css";

class SignUp extends Component {
  render() {
    return (
      <div className="SignIn">
        <div className="signInAside" />
        <div className="signInForm">
          <div className="pageSwitcher">
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive ? "pageSwitcherItem pageSwitcherItem-active" : "pageSwitcherItem"
              }
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/sign-up"
              className={({ isActive }) => 
                isActive ? "pageSwitcherItem pageSwitcherItem-active" : "pageSwitcherItem"
              }
            >
              Sign Up
            </NavLink>
          </div>

          <div className="formTitle">
            <NavLink
              to="/sign-in"
              className={({ isActive }) => 
                isActive ? "formTitleLink formTitleLink-active" : "formTitleLink"
              }
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/sign-up"
              className={({ isActive }) => 
                isActive ? "formTitleLink formTitleLink-active" : "formTitleLink"
              }
            >
              Sign Up
            </NavLink>
          </div>
          <div>
            <SignUpForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
