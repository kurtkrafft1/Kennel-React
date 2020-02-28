import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeesManager';

const EmployeeList  = (props) => {
    const [employees, setEmployees] = useState([]);
    
    const getEmployees = () => {
       return EmployeeManager.getAll().then(employeesfromAPI => {
             setEmployees(employeesfromAPI)
        })
    }
    const deleteEmployee = (id) => {
        return EmployeeManager.delete(id).then(()=> EmployeeManager.getAll().then(setEmployees))
    }
    useEffect(()=> {
        getEmployees();
    }, [])

    return(
        <>
        <section className="section-content">
  <button type="button"
      className="btn ui yellow button"
      onClick={() => {props.history.push("/employees/new")}}>
      New Boss
  </button>
  </section>
        <div className="container-cards"> 
        {employees.map(employee=> 
            <EmployeeCard key={employee.id} employee={employee} deleteEmployee={deleteEmployee} {...props}/>
        )}
        </div>
        </>
    )
};

export default  EmployeeList;