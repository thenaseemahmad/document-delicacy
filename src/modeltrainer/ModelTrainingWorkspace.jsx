// this component will be used everytime user wants to train a newly created/selected model or wants
// to make any change in earlier created model.

import React, { useEffect } from "react";
import "./ModelTrainingWorkspace.css"
import EntityTableComp from "./EntityTableComp";

export const ListOfEntitiesForThisModel = ["Invoice No", "Invoice Date", "Invoice Amount"];
export default function ModelTrainingWorkspace({ handleSaveAndCloseButton }) {
  
  return (
    <div className="main-container">
      <div className="top-progressbar ps-2 pe-2 pt-0">
        <div className="progress mb-1" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0"
          aria-valuemax="100" style={{ height: "1.5px" }}>
          <div className="progress-bar bg-success" style={{ width: "25%" }}></div>
        </div>

        <div className="progress-stacked">
          <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0"
            aria-valuemax="100" style={{ width: "25%" }}>
            <div className="progress-bar bg-secondary">Entities to extract</div>
          </div>
          <div className="vr bg-white"></div>
          <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0"
            aria-valuemax="100" style={{ width: "25%" }}>
            <div className="progress-bar bg-dark-subtle">Create buckets</div>
          </div>
          <div className="vr bg-white"></div>
          <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0"
            aria-valuemax="100" style={{ width: "25%" }}>
            <div className="progress-bar bg-dark-subtle">Tag Entities</div>
          </div>
          <div className="vr bg-white"></div>
          <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0"
            aria-valuemax="100" style={{ width: "25%" }}>
            <div className="progress-bar bg-dark-subtle">Model training</div>
          </div>
        </div>
      </div>

      <div className="bottom-mainarea">
        <div className="model-nameandsavebtnarea my-1">
          <button onClick={handleSaveAndCloseButton} type="button" className="btn btn-light ms-2 bg-transparent rounded-0">Save and close</button>
          <div className="vr"></div>
          <input id="model-name" className="me-2 border" type="text" name="modelname" placeholder="Name of the model here" />
        </div>

        <div className="model-informationarea">
          <div className="model-leftpane">
            <div className="left-upper">
              <h4>Choose information to extract</h4>
              <p>List all the data pieces that you want AI model to extract from the document.</p>
              <hr />
              <EntityTableComp existingEntitiesListForThisModel={ListOfEntitiesForThisModel}/>
            </div>
            <div className="left-bottom">
              <hr />
              <button type="button" className="customwithbtn btn btn-primary rounded-0">Next</button>
            </div>

          </div>
          <div className="vr"></div>
          <div className="model-rightpane">
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb"
                viewBox="0 0 16 16">
                <path
                  d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
              </svg>
              Quick tips
            </h4>
            <hr />
            <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>

              <div className="card-body text-secondary">
                <h6 className="card-title">Secondary card title</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
              </div>
            </div>

            <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>

              <div className="card-body text-secondary">
                <h6 className="card-title">Secondary card title</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
              </div>
            </div>
            <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>

              <div className="card-body text-secondary">
                <h6 className="card-title">Secondary card title</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}