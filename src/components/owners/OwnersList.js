import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import OwnersManager from '../../modules/OwnersManager';

const OwnersList = (props) => {
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
        <>
           <section className="section-content">
  <button type="button"
      className="btn ui yellow button"
      onClick={() => {props.history.push("/owners/new")}}>
      New Boss
  </button>
  </section>
        <div className="container-cards">
            {owners.map(owner=> <OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner}/>

            )}
        </div>
        </>
    )
}

export default OwnersList;