import React, { useState } from "react"
import "./UserWorkspace.css"
import LeftPane from "./LeftPane"


export default function UserWorkspace() {
    const [leftWorkspaceArea, setLeftWorkspaceArea] = useState(null);
        function getBtnValuePressedOnLeftPane(btnPressed){
            setLeftWorkspaceArea(btnPressed);
        }
    return (
        // user workspace will be divided into two section 
        // Left pane 
        // right workspace
        
        <>
            <div className="d-inline-flex flex-row column-gap-2 h-100">
                {/* this is left pane div */}
                <LeftPane leftPanePressedBtnValue={getBtnValuePressedOnLeftPane}></LeftPane>


                {/* this is workspace area here */}
                <div className="d-flex flex-column shadow">

                </div>
            </div>
        </>
    )
}