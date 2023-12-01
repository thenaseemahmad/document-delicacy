import React, { useState } from "react";
import ToggleButtonWithIcon from "./ToggleButtonWithIcon";
import Icon from "../icon/Icon";

const BttonCollection = [{
    ButtonID: "btnradio1",
    ButtonTitle: "Document"
    },
    {
        ButtonID: "btnradio1",
        ButtonTitle: "Document"
        }
]


export default function ButtonsGroup({ buttonPressedInGroup }) {
    //const [btnClickedOnGroup, setBtnClickedOnGroup] = useState(null);

    function handleTypeOfModelBtnClick(btnName) {
        //setBtnClickedOnGroup(btnName);
        buttonPressedInGroup(btnName)
    }
    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input onClick={()=>{handleTypeOfModelBtnClick("document")}} type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                <label className="btn btn-outline-primary" for="btnradio1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark me-2" viewBox="0 0 16 16">
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                    </svg>
                    Documents</label>


                <input onClick={()=>{handleTypeOfModelBtnClick("text")}} type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label className="btn btn-outline-primary" for="btnradio2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor-text me-2" viewBox="0 0 16 16">
                        <path d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2m-.704 9.29" />
                    </svg>
                    Text</label>

                <input onClick={()=>{handleTypeOfModelBtnClick("images")}} type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label className="btn btn-outline-primary" for="btnradio3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image me-2" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12" />
                    </svg>
                    Images</label>

                <input onClick={()=>{handleTypeOfModelBtnClick("tabulardata")}} type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                <label className="btn btn-outline-primary" for="btnradio4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-table me-2" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
                    </svg>
                    Structured data</label>

            {/* <ToggleButtonWithIcon
                radioButtonPressHandler={() => { handleTypeOfModelBtnClick("document") }}
                radioButtonId="btnradio1"
                radioButtonTitle="Document"
                radioButtonIcon={<Icon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark me-2" viewBox="0 0 16 16">
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                </Icon>}
            />

            <ToggleButtonWithIcon
                radioButtonPressHandler={() => { handleTypeOfModelBtnClick("document") }}
                radioButtonId="btnradio2"
                radioButtonTitle="Text"
                radioButtonIcon={<Icon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor-text me-2" viewBox="0 0 16 16">
                    <path d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2m-.704 9.29" />
                </Icon>}
            />

            <ToggleButtonWithIcon
                radioButtonPressHandler={() => { handleTypeOfModelBtnClick("document") }}
                radioButtonId="btnradio3"
                radioButtonTitle="Images"
                radioButtonIcon={<Icon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image me-2" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12" />
                </Icon>}
            />

            <ToggleButtonWithIcon
                radioButtonPressHandler={() => { handleTypeOfModelBtnClick("document") }}
                radioButtonId="btnradio4"
                radioButtonTitle="Structured data"
                radioButtonIcon={<Icon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-table me-2" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
                </Icon>}
            /> */}
        </div>
    );
}