import React, { useState } from "react";
import OwnersManager from "../../modules/OwnersManager";
import "./OwnerForm.css"

const OwnerForm = (props) => {
    const [owner, setOwner] = useState({name:"", title:"", img:"", number:""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = {...owner}
        stateToChange[evt.target.id] = evt.target.value;
        setOwner(stateToChange);
    }
    const constructNewOwner = (evt) => {
        evt.preventDefault();
        if(owner.name===""||owner.title===""|| owner.img==="" || owner.number==="") {
            window.alert("Please fill out all of the input fields")
        } else {
            setIsLoading(true)
            OwnersManager.post(owner).then(()=> props.history.push('/owners'))
        }
    }
    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text" required onChange={handleFieldChange}
                    id="name" placeholder="Owner name" />
                    <label htmlFor = "name">Name</label>
                    <input type="text" required onChange={handleFieldChange}
                    id="title" placeholder="Title" />
                    <label htmlFor = "breed">Breed</label>
                    <input type="text" required onChange = {handleFieldChange}
                    id="number" placeholder="Phone Number" />
                    <label htmlFor = "img">Number: </label>
                    <input type="text" required onChange = {handleFieldChange}
                    id="img" placeholder="Image" />
                    <label htmlFor = "img">Image: </label>
                </div>
                <div className = "alignRight">
                    <button type="button" disabled={isLoading}
                    onClick={constructNewOwner}>Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}
export default OwnerForm