import React from "react";

const OwnerCard = props => {
  return (
      <div className="card">
          <div className="card-content">
              <picture>
                  <img src={`${props.owner.img}`} className="mark-pic" alt="owner" />
              </picture>
              <h3>Name: <span className="owner-name">{props.owner.name}</span></h3>
              <h3>Title: <span className="owner-title">{props.owner.title}</span></h3>
              <h3>Phone Number: <span className="owner-number">{props.owner.number}</span></h3>
              <button type="button" onClick= {()=> props.deleteOwner(props.owner.id)}>Resign</button>
          </div>
      </div>
  )
}
export default OwnerCard;