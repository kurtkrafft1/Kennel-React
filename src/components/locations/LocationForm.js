import React, { useState } from "react";
import LocationsManager from "../../modules/LocationsManager";
import "./LocationForm.css"

const LocationForm = (props) => {
    const [location, setLocation] = useState({address: "", number: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = {...location };
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
    }
    const constructNewLocation = (evt) => {
        evt.preventDefault()
        if(location.address===""||location.number===""){
            window.alert("Please enter in both the new address and new phone number")
        } else {
            setIsLoading(true)
            LocationsManager.post(location).then(()=> props.history.push('/locations'))
        }
    };
    return (
        <>
              <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text" required onChange={handleFieldChange}
                    id="address" placeholder="Address" />
                    <label htmlFor = "address">Address</label>
                    <input type="text" required onChange={handleFieldChange}
                    id="number" placeholder="Number" />
                    <label htmlFor = "number">Number</label>
                </div>
                <div className = "alignRight">
                    <button type="button" disabled={isLoading}
                    onClick={constructNewLocation}>Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}
export default LocationForm;