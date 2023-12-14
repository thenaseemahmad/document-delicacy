import React from "react";
import { EntitiesCollectionComp, EntitiesNamingComp, EntitiesTaggingComp, EntitiesTrainingComp } from "./EntitiesNamingComp";

export default function EntitiesWorkArea({ currentState, savedEntitiesForThisModel }) {
    let screenToShow = <EntitiesNamingComp savedEntitiesForThisModel={savedEntitiesForThisModel} />;
    if (currentState === 25) {

    }
    else if(currentState===50){
        screenToShow=<EntitiesCollectionComp/>
    }
    else if(currentState===75){
        screenToShow= <EntitiesTaggingComp/>
    }
    else if(currentState===100){
        screenToShow = <EntitiesTrainingComp/>
    }
    return(
        screenToShow
    );
}