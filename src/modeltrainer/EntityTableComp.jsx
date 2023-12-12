import React, { useState } from "react";
import EntityAddDropdown from "./EntityAddDropdown";
import EntityTable from "./EntityTable";

export default function EntityTableComp({existingEntitiesListForThisModel}) {
    //existingEntitiesListForThisModel will be an empty array for new models
    //State for this component to refresh table
    const [entityList, setEntityList] = useState(existingEntitiesListForThisModel)
    
    function callbackGatherNewEntityName(newEntityName) {
        existingEntitiesListForThisModel.push(newEntityName);
        setEntityList(existingEntitiesListForThisModel);
    }
    return (
        <>
            {/* // Add a new entityButton */}
            <EntityAddDropdown returnNewEntityName={callbackGatherNewEntityName} />
            {/* // Entity table to showcase all the entities created by user */}
            <EntityTable listOfEntities={entityList} />
        </>
    );
}