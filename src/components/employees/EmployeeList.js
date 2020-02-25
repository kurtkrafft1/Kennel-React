import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeesManager';

const EmployeeList  = () => {
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
        <div className="card-container"> 
        {employees.map(employee=> 
            <EmployeeCard key={employee.id} employee={employee} deleteEmployee={deleteEmployee}/>
        )}
        </div>
    )
};

export default  EmployeeList;