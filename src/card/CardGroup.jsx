import React from "react";
import Card from "./Card";

export default function CardGroup({ cards, selectedCard }) {
    //const [cardsGroupState, setCardsGroupState] = useState(cards);
    //setCardsGroupState(cards);
    function handleCardBtnClick(cardName) {
        selectedCard(cardName);
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