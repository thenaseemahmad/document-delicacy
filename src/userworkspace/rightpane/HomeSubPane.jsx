import React, { useState } from "react";
import ButtonsGroup from "../../buttonsgroup/ButtonsGroup";
import CardGroup from "../../card/CardGroup";
import { DocumentsModelsDetail, TextModelsDetail } from "./cardgroupsbasedata/AvailableCardTypes"


export default function HomeSubPane() {
    const [cardsToShow, setCardsToShow] = useState(DocumentsModelsDetail);

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
        else if (btnPressed === 'images') {
            // show the type of ml models that can be trained on images
            setCardsToShow(TextModelsDetail);
            console.log(cardsToShow);
        }
        else if (btnPressed === 'tabulardata') {
            // show the type of ml models that can be trained on structured data
            setCardsToShow(TextModelsDetail);
            console.log(cardsToShow);
        }

        else {
            // Show the documents models that will work as default models for users
            //setCardsToShow(ModelsToWorkOnDocuments)
        }

    }
    function handleCardBtnClick(cardName) {
        console.log(cardName)
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
        </>
    );
}