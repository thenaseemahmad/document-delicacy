import React, { useState } from "react";
import EntityTable from "./EntityTable";
import NewEntityAddComp from "./NewEntityAddComp";

export default function EntityTableComp({existingEntitiesListForThisModel}) {
    //existingEntitiesListForThisModel will be an empty array for new models
    //State for this component to refresh table
    const [entityList, setEntityList] = useState(existingEntitiesListForThisModel)
    
    
    function callbackGatherNewEntityName(newEntityName) {
        setEntityList(entityList=>[...entityList,newEntityName]);
        entityList.filter(function(){return true})
    }
    return (
        <>
            {/* // Add a new entityButton */}
            {/* <EntityAddDropdown returnNewEntityName={callbackGatherNewEntityName} /> */}
            <NewEntityAddComp returnNewEntity={callbackGatherNewEntityName} placeholderText="New entity name"/>
            {/* // Entity table to showcase all the entities created by user */}
            <EntityTable listOfEntities={entityList} />
        </>
    );
}