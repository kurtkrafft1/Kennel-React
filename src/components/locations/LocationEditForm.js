import React, { useState, useEffect } from "react";
import LocationsManager from "../../modules/LocationsManager";
import "./LocationForm.css";

const LocationEditForm = props => {
  const [editLocation, setEditLocation] = useState({ address: "", number: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...editLocation };
    stateToChange[evt.target.id] = evt.target.value;
    setEditLocation(stateToChange);
  };

  const updateExistingLocation = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedLocation = {
      id: props.match.params.locationId,
      address: editLocation.address,
      number: editLocation.name
    };
    console.log(editedLocation);

    LocationsManager.update(editedLocation).then(() =>
      props.history.push("/locations")
    );
  };
  useEffect(() => {
    LocationsManager.get(props.match.params.locationId).then(oneLocation => {
      setEditLocation(oneLocation);
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
              onChange={handleFieldChange}
              className="form-control"
              value={editLocation.address}
              id="address"
            />
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              required
              className="form-control"
              value={editLocation.number}
              onChange={handleFieldChange}
              id="number"
            />
            <label htmlFor="number">Number: </label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              className="btn btn-primary "
              onClick={updateExistingLocation}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
export default LocationEditForm;
