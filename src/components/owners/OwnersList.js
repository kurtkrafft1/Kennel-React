import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import OwnersManager from '../../modules/OwnersManager';

const OwnersList = () => {
    const [owners, setOwners] = useState([]);
    const getOwners = () => {
        return OwnersManager.getAll().then(ownersFromAPI => {
            setOwners(ownersFromAPI)
        })
    }
    const deleteOwner =(id) => {
        OwnersManager.delete(id).then(()=> OwnersManager.getAll().then(setOwners))
    }
    useEffect(()=> {
        getOwners()
    }, [])

    return(
        <div className="container-cards">
            {owners.map(owner=> <OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner}/>

            )}
        </div>
    )
}

export default OwnersList;