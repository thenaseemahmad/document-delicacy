import React, { useState } from "react";
import EntityTableComp from "./EntityTableComp";
import NewEntityAddComp from "./NewEntityAddComp";
import { createNewCollection } from "../backendcomp/BackendComp";

export function EntitiesNamingComp({ modelDetail, savedEntitiesForThisModel }) {
    return (
        <>
            <h4>Choose information to extract</h4>
            <p>List all the data pieces that you want AI model to extract from the document.</p>
            <hr />
            <EntityTableComp modelDetail={modelDetail} existingEntitiesListForThisModel={savedEntitiesForThisModel} />
        </>
    );
}

export function EntitiesCollectionComp({ modelDetail, savedCollectionsForThisModel }) {
    const [collectionName, setCollectionName] = useState(savedCollectionsForThisModel);
    const [fileUploadModal, setFileUploadModal] = useState(null);
    function callbackGetNewCollectionName(collName) {
        createNewCollection(modelDetail._id, collName, function (apiResponse) {
            if (apiResponse.status === 200) {
                setCollectionName(currentItems => [collName, ...currentItems]);
            }
            else{
                alert('Collection can not be added at this time. Please try again later');
                //Raise exception for prod support team.
            }
        })
        
    }

    function handleCloseButtonOnUploadModal() {
        setFileUploadModal(null);
    }
    function handleAddButtonToAddDocsToThisColl(collectionName, modelName) {
        //Open the file wizard and let user select the files to upload to this user
        //Update the json object accordingly

    }

    function handleClickOnCollectionTile(collName) {
        setFileUploadModal(
            <div style={{ width: "600px" }} class="offcanvas offcanvas-end show border" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" aria-modal="true" role="dialog">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">{collName}</h5>
                    <button onClick={handleCloseButtonOnUploadModal} type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr className="m-0" />
                <div class="offcanvas-body">
                    <button onClick={() => { handleAddButtonToAddDocsToThisColl(collName, "ModelNameHere") }} className="btn rounded-0 px-1">+ Add documents</button>
                    <hr className="mb-1" />
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr</th>
                                <th scope="col">Name</th>
                                <th scope="col">Upload date</th>
                                <th scope="col">Size</th>
                            </tr>
                        </thead>
                        <tbody className="fw-lighter">
                            <tr className="added-pdf-docs">
                                <td>1</td>
                                <td className="text-truncate" style={{ maxWidth: "150px" }}>Invoice_OCR_POL_WPP00024985_20230511081517332414917.pdf</td>
                                <td>23rd Dec, 2023</td>
                                <td>3.6MB</td>
                            </tr>
                            <tr className="added-pdf-docs">
                                <td>2</td>
                                <td className="text-truncate" style={{ maxWidth: "150px" }}>Invoice_OCR_POL_WPP00024985_20230511081517332414917.pdf</td>
                                <td>23rd Dec, 2023</td>
                                <td>3.6MB</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>);

    }
    return (
        <>
            <h4>Add collections of documents</h4>
            <p>Collections are meant to hold documents of similar templates.</p>
            <hr />
            <NewEntityAddComp returnNewEntity={callbackGetNewCollectionName} placeholderText="New collection name" />
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "row", gap: "10px", flexWrap: "wrap", height: "250px", overflowY: "scroll" }}>
                {collectionName.map((item) => {
                    return (
                        // https://www.filestack.com/fileschool/react/react-file-upload/
                        <div onClick={() => { handleClickOnCollectionTile(item) }} class="card" style={{ height: "15rem", width: "15rem", cursor: "pointer" }}>
                            <div class="m-2">
                                <img style={{ width: "15rem", height: "150px", overflow: "hidden" }} src="https://marketplace.canva.com/EAETpJ0lmjg/2/0/1131w/canva-fashion-invoice-in-beige-black-minimalist-style-zvoLwRH8Wys.jpg" class="img-fluid" alt="..." />
                            </div>
                            <div class="card-body">
                                <h6 class="card-title">{item}</h6>
                                <p className="fw-lighter">7 documents</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {fileUploadModal}
        </>
    );
}

export function EntitiesTaggingComp() {
    return (
        <>
            <h1>Show Entities taggign comp here</h1>
        </>
    );
}

export function EntitiesTrainingComp() {
    return (
        <>
            <h1>Show Entities taggign comp here</h1>
        </>
    );
}