import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalCard from "./Animal/AnimalCard";
//only include these once they are built - previous practice exercise
import LocationCard from "./locations/LocationCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/animals"
        render={props => {
          return <AnimalCard />;
        }}
      />
      <Route
      path="/locations"
      render={props=> {
          return <LocationCard />;
        //   UPPERCASE THIS L WHEN READY
      }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;