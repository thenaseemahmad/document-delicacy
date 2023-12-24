import React, { useState } from "react";
import "./ModelTrainingWorkspace.css";
import ProgressBar from "./ProgressBar";
import EntitiesWorkArea from "./EntitiesWorkArea";
import { renameModel } from "../backendcomp/BackendComp";



export default function ModelTrainingWorkspace({ handleSaveAndCloseButton, detailOfTheModelToTrain }) {
  const [trainingState, setTrainingState] = useState(25);
  const [modelName, setModelName] = useState(detailOfTheModelToTrain.model_name)

  let typingTimer;                //timer identifier
  let doneTypingInterval = 5000;  //time in ms (5 seconds)

  let ListOfEntitiesForThisModel = detailOfTheModelToTrain.list_of_entities;
  let ListOfCollectionsForThisModel = detailOfTheModelToTrain.list_of_collections;

  function handleNextButton() {
    setTrainingState(trainingState => trainingState + 25);
  }
  function handleBackButton() {
    setTrainingState(trainingState => trainingState - 25);
  }

  let deactivateBack = false;
  let deactivateNext = false;
  if (trainingState === 25) {
    deactivateBack = true;
    deactivateNext = false;
  }
  else if (trainingState === 100) {
    deactivateBack = false;
    deactivateNext = true;
  }


  function doneTyping() {

    renameModel(detailOfTheModelToTrain._id, modelName, function (renameStatus) {
      console.log(renameStatus);
      if(renameStatus.status===200){
        //inform user that the rename has been done successfully
      }
      else{
        //Show the existing name to the user and raise an exception intimation to prod support team
      }
    })
  }

  function handleKeyupOnModelName() {
    clearTimeout(typingTimer);
    if (modelName) {
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
  }

  return (
    <div className="main-container">

      <ProgressBar currentState={trainingState} />

      <div className="bottom-mainarea">
        <div className="model-nameandsavebtnarea my-1">
          <button onClick={handleSaveAndCloseButton} type="button" className="btn btn-light ms-2 bg-transparent rounded-0">Save and close</button>
          <div className="vr"></div>
          <input onKeyUp={handleKeyupOnModelName} onChange={(e) => { setModelName(e.target.value) }} id="model-name" className="me-2 border" type="text" name="modelname" value={modelName} placeholder="Name of the model here" />
        </div>

        <div className="model-informationarea">
          <div className="model-leftpane">
            <div className="left-upper">
              <EntitiesWorkArea modelDetail={detailOfTheModelToTrain} currentState={trainingState} savedEntitiesForThisModel={ListOfEntitiesForThisModel} savedCollectionsForThisModel={ListOfCollectionsForThisModel} />
            </div>
            <div className="left-bottom">
              <hr />
              <button onClick={handleBackButton} type="button" className="customwithbtn btn btn-primary rounded-0 me-2" disabled={deactivateBack} >Back</button>
              <button onClick={handleNextButton} type="button" className="customwithbtn btn btn-primary rounded-0 ms-2" disabled={deactivateNext}>Next</button>
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