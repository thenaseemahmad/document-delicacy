import React from "react";
import "./Card.css"

export default function Card({ cardTitle, cardText, btnOnClick, cardIcon }) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body" id="card">
                    {cardIcon}
                    <h6 className="card-title">{cardTitle}</h6>
                    <p className="card-text fw-light">{cardText}</p>
                    <button onClick={btnOnClick} className="btn btn-primary position-absolute bottom-0 start-0 ms-3 mb-3">Create</button>
                </div>

            </div>
        </div>
    );

}