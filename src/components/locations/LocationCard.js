import React from 'react';
import { Link } from"react-router-dom";

const LocationCard = props => {
  return (
      <div className="card">
          <div className="card-content">
              <picture>
                  <img src={require("./pet-store.jpeg")} className = "loc-pic" alt="Pet Store"/>
              </picture>
              <h3 className="store-address">Address: 
                  <span className="address"> {props.oneLocation.address}</span>
              </h3>
              <p>Phone: <span className="phone-number">{props.oneLocation.number}</span></p>
              <Link to={`/locations/${props.oneLocation.id}`}>
          <button>Details</button>
        </Link>
              <button type="button" onClick={()=> props.deleteLocations(props.oneLocation.id)}>Close Location</button>
          </div>
          <button type="button" onClick={()=> props.history.push(`/locations/${props.oneLocation.id}/edit`)}>Edit</button>
      </div>
  )
}
export default LocationCard;