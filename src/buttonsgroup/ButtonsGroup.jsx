import React from "react";



export default function ButtonsGroup({ nameOfBtnSelected }) {
    function handleTypeOfModelBtnClick(selectedModel) {
        nameOfBtnSelected(selectedModel);        
    }
    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input onClick={()=>{handleTypeOfModelBtnClick("documents")}} type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
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

                <input onClick={()=>{handleTypeOfModelBtnClick("tabulardata")}} type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                <label className="btn btn-outline-primary" for="btnradio4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-table me-2" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
                    </svg>
                    Structured data</label>
        </div>
    );
}