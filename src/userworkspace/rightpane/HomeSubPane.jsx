import React, { useState } from "react";
import ButtonsGroup from "../../buttonsgroup/ButtonsGroup";
import CardGroup from "../../card/CardGroup";
import { DocumentsModelsDetail, TextModelsDetail, StructuredDataModelsDetail } from "./cardgroupsbasedata/AvailableCardTypes";
import CustomModal from "../../modal/CustomModal";


export default function HomeSubPane({returnTypeOfModelSelectedToTrain}) {
    const [cardsToShow, setCardsToShow] = useState(DocumentsModelsDetail);
    const [modelScreenToShow, setModelScreenToShow] = useState(null);
    function handleTypeOfModelBtnClick(btnPressed) {
        // setSelectedModelType(btnPressed);
        if (btnPressed === 'documents') {
            // show the type of ml models that can be trained on documents
            setCardsToShow(DocumentsModelsDetail);
        }
        else if (btnPressed === 'text') {
            // show the type of ml models that can be trained on text
            setCardsToShow(TextModelsDetail);
            console.log(cardsToShow);
        }

        else if (btnPressed === 'tabulardata') {
            // show the type of ml models that can be trained on structured data
            setCardsToShow(StructuredDataModelsDetail);
            console.log(cardsToShow);
        }

        else {
            // Show the documents models that will work as default models for users
            //setCardsToShow(ModelsToWorkOnDocuments)
        }

    }
    function handleCardBtnClick(selectedCardName) {
        console.log(selectedCardName);
        if (selectedCardName === 'invoices') {
            //open model screen to give more information to
            //Update state here to show the required model screen
            setModelScreenToShow(
                <CustomModal
                    handleCloseBtn={handleCloseBtnOfThisModel}
                    returnModelTypeToCreate={typeOfModelToCreate}
                />
            )

        }
        else{
            alert("The selected model will be available in next release");
        }
    }

    function handleCloseBtnOfThisModel() {
        setModelScreenToShow(null);
    }

    function typeOfModelToCreate(modelType) {
        returnTypeOfModelSelectedToTrain(modelType);
        if(modelType==="invoiceprocess"){
            //this will redirect user to home screen to showcare the initial requirement to create and train the model
            
        }
    }

    return (
        <>
            <div className="text-center my-5 px-5">
                <h4>Document delicacy: The secret to successful data extraction from documents!</h4>
                <p>AI models that are designed to optimize your business processes. Get started by selecting a type of model for your business need and start the data extraction journey!</p>
            </div>
            <div className=" ps-3 mb-3">
                <ButtonsGroup
                    nameOfBtnSelected={handleTypeOfModelBtnClick} />
            </div>

            <div className="container-fluid mb-4 ps-3">
                <CardGroup
                    cards={cardsToShow}
                    selectedCard={handleCardBtnClick} />
            </div>
            {modelScreenToShow}
        </>
    );
}