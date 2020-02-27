import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationView";
import Sidebar from "./sidebar/Sidebar";
import Button from "./buttons/Button"

import "./Kennel.css";
import "../App.css";

const Kennel = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <ApplicationViews />
    </>
  );
};

export default Kennel;
