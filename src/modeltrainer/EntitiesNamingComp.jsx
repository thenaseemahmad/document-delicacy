import React, { useState } from "react";
import EntityTableComp from "./EntityTableComp";
import NewEntityAddComp from "./NewEntityAddComp";

export function EntitiesNamingComp({ savedEntitiesForThisModel }) {
    return (
        <>
            <h4>Choose information to extract</h4>
            <p>List all the data pieces that you want AI model to extract from the document.</p>
            <hr />
            <EntityTableComp existingEntitiesListForThisModel={savedEntitiesForThisModel} />
        </>
    );
}

export function EntitiesCollectionComp({ savedCollectionsForThisModel }) {
    const [collectionName, setCollectionName] = useState(savedCollectionsForThisModel);
    const [fileUploadModal, setFileUploadModal] = useState(null);
    function callbackGetNewCollectionName(collName) {
        setCollectionName(currentItems => [collName, ...currentItems]);
    }

    function handleCloseButtonOnUploadModal() {
        setFileUploadModal(null);
    }

    function handleClickOnCollectionTile() {
        setFileUploadModal(
            <div class="offcanvas offcanvas-end show border" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" aria-modal="true" role="dialog">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Selected collection name</h5>
                    <button onClick={handleCloseButtonOnUploadModal} type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <button className="btn rounded-0">+ Add documents</button>
                </div>
                <div>
                    
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
                        <div onClick={handleClickOnCollectionTile} class="card" style={{ height: "15rem", width: "15rem", cursor: "pointer" }}>
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