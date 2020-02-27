import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);
  
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then(animal => {
     setAnimal({
        name: animal.name,
        breed: animal.breed,
        img: animal.img
      });
      setIsLoading(false);
    });
  }, [props.animalId]);
  if(animal.name===undefined){
    return (
      <div className='card'>
        <div className = "card-content">
          <h1>Sorry page not found</h1>
          <picture>
            <img src="https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif"/>

          </picture>
        </div>
      </div>
    )
  }
else{
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={animal.img} alt="My Dog" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}
};

export default AnimalDetail;