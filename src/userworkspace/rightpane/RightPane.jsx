import React, { useState } from "react";
import HomeSubPane from "./HomeSubPane";
import CreateNewModel from "./CreateNewModel";
import MyModelsPane from "./MyModelsPane";
import HelpPane from "./HelpPane";
import "./RightPane.css"

export default function RightPane({ SubpaneToShow }) {
    let paneToShowOnRight = null;

    if (SubpaneToShow === "home") {
        paneToShowOnRight = <HomeSubPane></HomeSubPane>
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