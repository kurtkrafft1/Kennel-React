import React from "react";

const EmployeeCard = props => {
  return (
      <div className="card">
          <div className="card-content">
                <picture>
                    <img src={`${props.employee.img}`} className="baby-pic" alt="Employee" />
                </picture>
                <h3>Employee: <span className="employee-name">{props.employee.name}</span></h3>
                <button
          type="button" className="baby-fire"
          onClick={() => props.deleteEmployee(props.employee.id)}
        >
          Fire
        </button>
          </div>
      </div>
  )
}

export default EmployeeCard;