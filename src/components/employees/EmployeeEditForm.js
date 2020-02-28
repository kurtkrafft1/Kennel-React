import React, { useState, useEffect } from "react";
import EmployeesManager from "../../modules/EmployeesManager";
import "./EmployeeForm.css";

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({ name: "", img: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeField = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };
  const updateExistingEmployee = evt => {
    evt.preventDefault();
    setIsLoading(true);
    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name,
      img: employee.img
    };
    EmployeesManager.update(editedEmployee).then(() =>
      props.history.push("/employees")
    );
  };
  useEffect(() => {
    EmployeesManager.get(props.match.params.employeeId)
    .then(employee => {
      setEmployee(employee);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleChangeField}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee Name: </label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleChangeField}
              id="img"
              value={employee.img}
            />
            <label htmlFor="img">Image: </label>
          </div>
          <div className="alignRight">
              <picture>
                  <img src={employee.img} alt="your image"  className="edit-photo"/>
              </picture>
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary btn-photo"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeEditForm;
