import React, { useState } from "react"
import LeftPane from "./leftpane/LeftPane"
import RightPane from "./rightpane/RightPane";


export default function UserWorkspace({returnModelNameToEditifAny}) {
    const [btnPressedOnLeftPane, setBtnPressedOnLeftPane] = useState(null);
    function getBtnValuePressedOnLeftPane(btnPressed) {
        setBtnPressedOnLeftPane(btnPressed);
    }
    function callbackGetModelNameToEdit(modelName){
        returnModelNameToEditifAny(modelName);
    }
    return (
        // user workspace will be divided into two section 
        // Left pane 
        // right workspace
        
        <>
            <div className="d-flex flex-row h-auto w-100">
                {/* this is left pane div */}
                <LeftPane leftPanePressedBtnValue={getBtnValuePressedOnLeftPane}></LeftPane>
                {/* this is workspace area here */}
                <RightPane SubpaneToShow={btnPressedOnLeftPane} returnTypeOfModelToEdit={callbackGetModelNameToEdit}></RightPane>
            </div>
        </>
    )
}