import React from 'react';

const LocationCard = props => {
  return (
      <div className="card">
          <div className="card-content">
              <picture>
                  <img src={require("./pet-store.jpeg")} className = "loc-pic" alt="Pet Store"/>
              </picture>
              <h3 className="store-address">Address: 
                  <span className="address"> {props.location.address}</span>
              </h3>
              <p>Phone: <span className="phone-number">{props.location.number}</span></p>
              <button type="button" onClick={()=> props.deleteLocations(props.location.id)}>Close Location</button>
          </div>
      </div>
  )
}
export default LocationCard;