import React, { useState } from "react"
import LeftPane from "./leftpane/LeftPane"
import RightPane from "./rightpane/RightPane";


export default function UserWorkspace({ returnModelDetailToEditifAny }) {
    const [btnPressedOnLeftPane, setBtnPressedOnLeftPane] = useState(null);
    function getBtnValuePressedOnLeftPane(btnPressed) {
        setBtnPressedOnLeftPane(btnPressed);
    }
    function callbackGetModelDetailToEdit(modelDetail) {
        returnModelDetailToEditifAny(modelDetail);
    }
    return (
    <>
        <div className="d-flex flex-row h-auto w-100">
            {/* this is left pane div */}
            <LeftPane leftPanePressedBtnValue={getBtnValuePressedOnLeftPane}></LeftPane>
            {/* this is workspace area here */}
            <RightPane SubpaneToShow={btnPressedOnLeftPane} returnDetailOfModelToEdit={callbackGetModelDetailToEdit}></RightPane>
        </div>
    </>
    );
}