import React from "react";
import HomeSubPane from "./HomeSubPane";
import CreateNewModel from "./CreateNewModel";
import MyModelsPane from "./MyModelsPane";
import HelpPane from "./HelpPane";
import "./RightPane.css"

export default function RightPane({ SubpaneToShow, returnTypeOfModelToEdit }) {
    let paneToShowOnRight = null;
    function getNameOfTheModelToCrete(modelName) {
        // console.log(modelName);
        returnTypeOfModelToEdit(modelName)
    }

    if (SubpaneToShow === "home") {
        paneToShowOnRight = <HomeSubPane returnTypeOfModelSelectedToTrain={getNameOfTheModelToCrete}/>
    }
    else if (SubpaneToShow === "create") {
        paneToShowOnRight = <CreateNewModel></CreateNewModel>
    }

    else if (SubpaneToShow === "mymodels") {
        paneToShowOnRight = <MyModelsPane></MyModelsPane>
    }

    else if (SubpaneToShow === "help") {
        paneToShowOnRight = <HelpPane></HelpPane>
    }
    else {
        paneToShowOnRight = <HomeSubPane></HomeSubPane>
    }
    return (
        <div className="shadow-sm" id="rightpane">
            {paneToShowOnRight}
        </div>

    );
}