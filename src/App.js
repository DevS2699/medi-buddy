import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import InformationRequired from './pages/InformationRequired'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="notification/info-required" element={<InformationRequired />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
