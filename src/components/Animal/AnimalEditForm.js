import React, { useState, useEffect } from "react"
import AnimalManager from "../../modules/AnimalManager"
import "./AnimalForm.css"

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", img: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      img: animal.img
    };

    AnimalManager.update(editedAnimal)
      .then(() => props.history.push("/animals"))
  }

  useEffect(() => {
    AnimalManager.get(props.match.params.animalId)
      .then(animal => {
        setAnimal(animal);
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
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="img"
              value={animal.img}
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
              <picture>
                  <img src={animal.img} alt="your img" className=" edit-photo" />
              </picture>
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary btn-photo"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm