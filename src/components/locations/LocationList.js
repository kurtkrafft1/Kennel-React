import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import LocationsManager from '../../modules/LocationsManager';

const LocationList = (props) => {
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
        <>
        <section className="section-content">
  <button type="button"
      className="btn ui yellow button"
      onClick={() => {props.history.push("/locations/new")}}>
      New Branch
  </button>
  </section>
        <div className = "container-cards">
            {locations.map(oneLocation=> 
                <LocationCard key={oneLocation.id} oneLocation={oneLocation}  deleteLocations={deleteLocations} {...props}/>
            )}
        </div>
        </>
    )
}
export default LocationList;