import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";

//only include these once they are built - previous practice exercise
import AnimalList from "./Animal/AnimalList";
import EmployeeList from "./employees/EmployeeList";
import LocationList from "./locations/LocationList";
import OwnerList from "./owners/OwnersList";
import AnimalDetail from "./Animal/AnimalDetail.js";
import LocationDetail from "./locations/LocationDetail.js";

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
        exact
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />

      <Route
        exact path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
       <Route
        path="/locations/:locationId(\d+)"
        render={props => {
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
