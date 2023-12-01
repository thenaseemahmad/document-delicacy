import React from "react";
import Card from "./Card";

export default function CardGroup({ cards, buttonPressedOnWhichCard }) {
    
    function handleCardBtnClick(cardName) {
        buttonPressedOnWhichCard(cardName);
    }
    return (
        <div class="row align-items-start">
            {cards.map((item) => {
                return (
                    <Card
                        cardTitle={item.cardTitle}
                        cardText={item.cardText}
                        cardIcon={item.cardIcon}
                        btnOnClick={() => { handleCardBtnClick(item.cardName) }}
                    />
                );
            })}
        </div>

    );
}