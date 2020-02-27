import React, { useState } from 'react';
import EmployeesManager from "../../modules/EmployeesManager";
import "./EmployeeForm.css"


const EmployeesForm = (props) => {
    const [newEmployee, setNewEmployee] = useState({name:"", img:""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = {...newEmployee}
        stateToChange[evt.target.id] = evt.target.value
        setNewEmployee(stateToChange)
    }
    const constructNewEmployee = (evt) => {
        evt.preventDefault()
        if(newEmployee.name===""||newEmployee.img===""){
            window.alert("Hey, fill out all the forms")
        } else {    
            EmployeesManager.post(newEmployee).then(()=> props.history.push('/employees'))
            setIsLoading(true)
        }
    }

    return (
        <>
           <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text" required onChange={handleFieldChange}
                    id="name" placeholder="Employee name" />
                    <label htmlFor = "name">Name</label>
                    <input type="text" required onChange = {handleFieldChange}
                    id="img" placeholder="Image" />
                    <label htmlFor = "img">Image: </label>
                </div>
                <div className = "alignRight">
                    <button type="button" disabled={isLoading}
                    onClick={constructNewEmployee}>Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}

export default EmployeesForm;