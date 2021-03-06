import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";

//only include these once they are built - previous practice exercise
import AnimalList from "./Animal/AnimalList";
import EmployeeList from "./employees/EmployeeList";
import EmployeeForm from "./employees/EmployeeForm";
import LocationList from "./locations/LocationList";
import LocationForm from "./locations/LocationForm";
import OwnerList from "./owners/OwnersList";
import OwnerForm from "./owners/OwnerForm";
import OwnerEditForm from "./owners/OwnerEditForm";
import AnimalDetail from "./Animal/AnimalDetail.js";
import LocationDetail from "./locations/LocationDetail.js";
import LocationEditForm from "./locations/LocationEditForm";
import AnimalForm from "./Animal/AnimalForm";
import AnimalEditForm from "./Animal/AnimalEditForm";
import Login from "./auth/Login";
import EmployeeEditForm from "./employees/EmployeeEditForm";


const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  return (
    <React.Fragment>
      <Route
        exact
        path="/ "
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={props => {
          if(isAuthenticated()){
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login"/>
          }
          
        }}
      />
      <Route
        exact path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          if (isAuthenticated()){
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );}
          else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route
        path="/animals/new"
        render={props => {
          if(isAuthenticated()){
            return <AnimalForm {...props} />;
          } else {
            return <Redirect to="/login" />
          }
          
        }}
      />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
  if (isAuthenticated()) {
    return <AnimalEditForm {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
      <Route
        exact
        path="/locations"
        render={props => {
          if(isAuthenticated()){
          return <LocationList {...props}/>;
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route
        exact
        path="/locations/new"
        render={props => {
          return <LocationForm {...props} />;
        }}
      />
      <Route
        exact path="/locations/:locationId(\d+)"
        render={props => {
          if(isAuthenticated()){
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );} else {
            return <Redirect to="/login"/>
          }
        }}
      />
      <Route 
      path ="/locations/:locationId(\d+)/edit"
      render={props => {
        if(isAuthenticated()){
          return <LocationEditForm {...props} />

        } else {
          return <Redirect to ="/login" />
        }
      }}
      />
      <Route
        exact path="/owners"
        render={props => {
          if(isAuthenticated()){
            return <OwnerList {...props}/>;
          } else {
            return  <Redirect to="/login" />
          }
         
        }}
      />
      <Route 
      path="/owners/new"
      render = {props => {
        if(isAuthenticated()){
          return <OwnerForm {...props} />;
        } else {
          return <Redirect to="/login" />
        }
      }}
      />
      <Route
      path="/owners/:ownerId(\d+)/edit"
      render={props=> {
        if(isAuthenticated()){
          return <OwnerEditForm {...props}/>
        } else {
          return <Redirect to="/login" />
        }
      }}
      />
      <Route
        exact path="/employees"
        render={props => {
          if (isAuthenticated()){
            return <EmployeeList {...props}/>;
          } else {
            return <Redirect to ="/login"/> 
          }
    
        }}
      />
      <Route
      path="/employees/new"
      render={props=> {
        if(isAuthenticated()){
          return <EmployeeForm {...props} />

        }else {
          return <Redirect to="/login" />
        }
      }}
      />
      <Route 
      path="/employees/:employeeId(\d+)/edit"
      render={props => {
        if(isAuthenticated()){
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
          
      }}
      />
      <Route 
      path="/login"
     component = {Login}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
