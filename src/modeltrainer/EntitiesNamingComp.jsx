import React, { useEffect, useState } from "react";
import EntityTableComp from "./EntityTableComp";
import NewEntityAddComp from "./NewEntityAddComp";
import { createNewCollection, getCollections} from "../backendcomp/BackendComp";
import DocumentUploader from "./trainingdocuploadsidetray/DocumentUploader";

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
    const [collectionsForThisModel, setCollectionsForThisModel] = useState(savedCollectionsForThisModel);
    const [fileUploadModal, setFileUploadModal] = useState(null);

    useEffect(()=>{
        //fetch existing collections for this model
        getCollections(modelDetail._id,function(apiResponse){
            if(apiResponse.status===200){
                setCollectionsForThisModel(apiResponse.data);
            }
            else{
                alert('Unable to perform this action at the moment, Please try again later!')
            }
        })
    },[]);

    function callbackGetNewCollectionName(collName) {
        createNewCollection(modelDetail._id, collName, function (apiResponse) {
            if (apiResponse.status === 200) {
                setCollectionsForThisModel(currentItems => [apiResponse.data, ...currentItems]);
            }
            else {
                alert('Collection can not be added at this time. Please try again later');
                //Raise exception for prod support team.
            }
        })
    }

    function handleCloseButtonOnUploadModal() {
        setFileUploadModal(null);
    }

    function handleClickOnCollectionTile(collObj) {  
        setFileUploadModal(
            <DocumentUploader collDetail={collObj} modelDetail={modelDetail} handleCloseButtonOnUploadModal={handleCloseButtonOnUploadModal}/>
        );              
    }
    return (
        <>
            <h4>Add collections of documents</h4>
            <p>Collections are meant to hold documents of similar templates.</p>
            <hr />
            <NewEntityAddComp returnNewEntity={callbackGetNewCollectionName} placeholderText="New collection name" />
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "row", gap: "10px", flexWrap: "wrap", height: "250px", overflowY: "scroll" }}>
                {collectionsForThisModel.map((selectedCollectionObj) => {
                    return (
                        // https://www.filestack.com/fileschool/react/react-file-upload/
                        <div onClick={() => { handleClickOnCollectionTile(selectedCollectionObj) }} className="card" style={{ height: "15rem", width: "15rem", cursor: "pointer" }}>
                            <div className="m-2">
                                <img style={{ width: "15rem", height: "150px", overflow: "hidden" }} src="https://marketplace.canva.com/EAETpJ0lmjg/2/0/1131w/canva-fashion-invoice-in-beige-black-minimalist-style-zvoLwRH8Wys.jpg" className="img-fluid" alt="..." />
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">{selectedCollectionObj.collection_name}</h6>
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