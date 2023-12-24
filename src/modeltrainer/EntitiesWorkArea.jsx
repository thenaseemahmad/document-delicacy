import React from "react";
import { EntitiesCollectionComp, EntitiesNamingComp, EntitiesTaggingComp, EntitiesTrainingComp } from "./EntitiesNamingComp";

export default function EntitiesWorkArea({modelDetail, currentState, savedEntitiesForThisModel, savedCollectionsForThisModel }) {
    let screenToShow = <EntitiesNamingComp modelDetail={modelDetail} savedEntitiesForThisModel={savedEntitiesForThisModel} />;
    if (currentState === 25) {

    }
    else if (currentState === 50) {
        //Get the list of all entities created by user and update existing entity object detail in mongodb or create new mongodb entity object
        screenToShow = <EntitiesCollectionComp modelDetail={modelDetail} savedCollectionsForThisModel={savedCollectionsForThisModel} />
    }
    else if (currentState === 75) {
        //Create/update the collection detail for this model once users changes the state of the application
        screenToShow = <EntitiesTaggingComp />
    }
    else if (currentState === 100) {
        screenToShow = <EntitiesTrainingComp />
    }
    return (
        screenToShow
    );
}