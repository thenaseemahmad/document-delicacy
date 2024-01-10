import React, { useEffect, useState } from "react";
import { uploadTrainingDocs } from "../../backendcomp/BackendComp";


export default function FileUploadComp({ collectionDetailToUploadTheFiles, returnUploadedFiles }) {
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [disableUploadBtn, setDisableUploadBtn] = useState(true);
    const [uploadBtnState, setUploadBtnState] = useState(<span role="status">Upload</span>)

    useEffect(() => {
        returnUploadedFiles(uploadedFiles)
    }, [uploadedFiles])

    function handleMultipleChange(event) {
        setFiles([...event.target.files]);
        setDisableUploadBtn(false)

    }
    function handleMultipleSubmit(event) {
        event.preventDefault();
        //change the state of the upload button as uploading and deactivate it
        setDisableUploadBtn(true);
        setUploadBtnState(<>
            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span role="status">Uploading...</span>
        </>)
        uploadTrainingDocs(files, collectionDetailToUploadTheFiles._id, function (apiStatus) {
            if (apiStatus.status === 200) {
                setUploadedFiles(apiStatus.data);
                //useEffect to return the uploaded files to parent component
            }
            else {
                alert('Submitted documents can not uploaded at the moment, Please try again later!');
            }
            //Reset the state of the upload button to UPLOAD Deactivated
            setDisableUploadBtn(true)
            setUploadBtnState(<span role="status">Upload</span>);

        });
    }

    return (
        <form className="row" onSubmit={handleMultipleSubmit}>
            <div className="col-auto me-auto">
                <input className="form-control" type="file" multiple onChange={handleMultipleChange} />
            </div>
            <div className="col-auto">
                {/* <button className="form-control" disabled={disableUploadBtn} type="submit">Upload</button> */}
                <button class=" form-control btn btn-primary" type="submit" disabled={disableUploadBtn}>
                    {uploadBtnState}
                </button>
            </div>
        </form>
    );
}