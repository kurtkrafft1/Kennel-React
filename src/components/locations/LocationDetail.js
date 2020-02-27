import React, { useState, useEffect } from "react";
import LocationsManager from "../../modules/LocationsManager";
import "./LocationDetail.css";

const LocationDetail = props => {
    const [location, setLocation] = useState({address:"", number:""});
    const [isLoading, setIsLoading]= useState(true);

    const handleDelete =() => {
        setIsLoading(true);
        LocationsManager.delete(props.locationId).then(()=> {
            props.history.push('/locations')
        })
    }

    useEffect(()=> {
        LocationsManager.get(props.locationId).then(location=> {
            setLocation({
                address:location.address,
                number:location.number
            })
            setIsLoading(false);
        });

    }, [props.locationId])
    return(
        <div className="card">
            <div className="card-content">
            <picture>
          <img src={require("./pet-store.jpeg")} alt="My Dog" />
        </picture>
        <h3>
          Address: <span style={{ color: "darkslategrey" }}>{location.name}</span>
        </h3>
        <p>Phone: {location.number}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
            </div>
        </div>
    )
}
export default LocationDetail;