import React from "react";
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

export function EntitiesCollectionComp() {
    function callbackGetNewCollectionName(collName) {
        console.log(collName);
    }
    return (
        <>
            <h4>Add collections of documents</h4>
            <p>Collections are meant to hold documents of similar templates.</p>
            <hr />
            <NewEntityAddComp returnNewEntity={callbackGetNewCollectionName} placeholderText="New collection name" />
            <div className="row" style={{maxHeight:"400px",overflowY:"scroll"}}>
                <div class="card m-3" style={{ width: "15rem" }}>
                    <div class="mt-2">
                        <img style={{ width: "15rem", height: "150px", overflow: "hidden" }} src="https://marketplace.canva.com/EAETpJ0lmjg/2/0/1131w/canva-fashion-invoice-in-beige-black-minimalist-style-zvoLwRH8Wys.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Card title</h6>
                        <p className="fw-lighter">7 documents</p>
                    </div>
                </div>
                <div class="card m-3" style={{ width: "15rem" }}>
                    <div class="mt-2">
                        <img style={{ width: "15rem", height: "150px", overflow: "hidden" }} src="https://marketplace.canva.com/EAETpJ0lmjg/2/0/1131w/canva-fashion-invoice-in-beige-black-minimalist-style-zvoLwRH8Wys.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Card title</h6>
                        <p className="fw-lighter">7 documents</p>
                    </div>
                </div>
                <div class="card m-3" style={{ width: "15rem" }}>
                    <div class="mt-2">
                        <img style={{ width: "15rem", height: "150px", overflow: "hidden" }} src="https://marketplace.canva.com/EAETpJ0lmjg/2/0/1131w/canva-fashion-invoice-in-beige-black-minimalist-style-zvoLwRH8Wys.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Card title</h6>
                        <p className="fw-lighter">7 documents</p>
                    </div>
                </div>
                <div class="card m-3" style={{ width: "15rem" }}>
                    <div class="mt-2">
                        <img style={{ width: "15rem", height: "150px", overflow: "hidden" }} src="https://marketplace.canva.com/EAETpJ0lmjg/2/0/1131w/canva-fashion-invoice-in-beige-black-minimalist-style-zvoLwRH8Wys.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Card title</h6>
                        <p className="fw-lighter">7 documents</p>
                    </div>
                </div>
                <div class="card m-3" style={{ width: "15rem" }}>
                    <div class="mt-2">
                        <img style={{ width: "15rem", height: "150px", overflow: "hidden" }} src="https://marketplace.canva.com/EAETpJ0lmjg/2/0/1131w/canva-fashion-invoice-in-beige-black-minimalist-style-zvoLwRH8Wys.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Card title</h6>
                        <p className="fw-lighter">7 documents</p>
                    </div>
                </div>

            </div>
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