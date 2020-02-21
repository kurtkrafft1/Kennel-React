import React from 'react';

const LocationCard = () => {
  return (
      <div className="card">
          <div className="card-content">
              <picture>
                  <img src={require("./pet-store.jpeg")} alt="Pet Store"/>
              </picture>
              <h3 className="store-address">Address: 
                  <span className="address">1111 Pet Lane</span>
              </h3>
              <p>Phone: <span className="phone-number">555-555-5555</span></p>
          </div>
      </div>
  )
}
export default LocationCard;