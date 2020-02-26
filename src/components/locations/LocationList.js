import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import LocationsManager from '../../modules/LocationsManager';

const LocationList = () => {
    const [locations, setLocations] = useState([]);
    const getLocations=() => {
        return LocationsManager.getAll().then(locationsFromAPI=> {
            setLocations(locationsFromAPI)
        })
    }
    const deleteLocations=(id) => {
        LocationsManager.delete(id).then(()=> LocationsManager.getAll().then(setLocations))
    }
    useEffect(()=> {
        getLocations()
    }, [])

    return(
        <div className = "container-cards">
            {locations.map(location=> 
                <LocationCard key={location.id} location={location}  deleteLocations={deleteLocations}/>
            )}
        </div>
    )
}
export default LocationList;