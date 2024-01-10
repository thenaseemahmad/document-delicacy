import { useState } from "react";

export default function UploadButtonComp({disabledState}) {
    const [currentState, setCurrentState] = useState(<span role="status">Upload</span>)
    return (
        <button class=" form-control btn btn-primary" type="button" disabled={disabledState}>
            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span role="status">Loading...</span>
            <span role="status">Upload</span>       
        </button>
    );
}