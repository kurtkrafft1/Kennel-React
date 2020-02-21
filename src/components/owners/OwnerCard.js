import React from "react";

const OwnerCard = () => {
  return (
      <div className="card">
          <div className="card-content">
              <picture>
                  <img src={require("./index.jpg")} alt="owner" />
              </picture>
              <h3>Name: <span className="owner-name">Mark Cuban</span></h3>
          </div>
      </div>
  )
}
export default OwnerCard;