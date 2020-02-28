import React, { useState, useEffect} from "react";
import OwnersManager from "../../modules/OwnersManager";
import "./OwnerForm.css"

const OwnerEditForm = props => {
    const [owner, setOwner] = useState({name: "", title: "", img:"", number:""})
    const [isLoading, setIsLoading] = useState(false)
    const handleFieldChange = evt => {
        const stateToChange = {...owner}
        stateToChange[evt.target.id] = evt.target.value
        setOwner(stateToChange)
    }
    const updateExistingOwner = evt => {
        evt.preventDefault()
        setIsLoading(true)

        const editedOwner = {
            id: props.match.params.ownerId,
            name: owner.name,
            title: owner.title,
            img: owner.img,
            number: owner.number

        }

        OwnersManager.update(editedOwner).then(()=> props.history.push('/owners'))
    }

    useEffect(()=> {
        OwnersManager.get(props.match.params.ownerId).then( owner => {
            setOwner(owner)
        })
    }, [])

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text"
                    required
                    id="name"
                    className="form-control"
                    value={owner.name} 
                    onChange={handleFieldChange}/>
                    <label htmlFor="name">Name: </label>
                    <input type="text"
                    required
                    id="title"
                    className="form-control"
                    onChange={handleFieldChange}
                    value={owner.title} />
                    <label htmlFor="title">Title: </label>
                    <input type="text"
                    required
                    id="img"
                    className="form-control"
                    onChange={handleFieldChange}
                    value={owner.img} />
                    <label htmlFor="img">Image: </label>
                    <input type="text"
                    required
                    id="number"
                    className="form-control"
                    onChange={handleFieldChange}
                    value={owner.number} />
                    <label htmlFor="number">Number: </label>

                </div>
                <div className="alignRight">
                    <button className="btn btn-primary" disabled={isLoading} onClick={updateExistingOwner}>Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}
export default OwnerEditForm;